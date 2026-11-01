(function () {
  'use strict';
  const root = document.querySelector('[data-coding-lab]');
  if (!root || !window.CodingTestModels) return;
  const ui = JSON.parse(document.getElementById('coding-lab-strings').textContent);
  const models = window.CodingTestModels, kind = root.dataset.codingLab;
  const find = name => root.querySelector(`[data-lab-${name}]`);
  const format = (key, values = {}) => ui[key].replace(/\{(\w+)\}/g, (_, name) => String(values[name] ?? ''));
  const presets = {
    flood: [
      {name: 'ice', rows: ['00100', '00111', '11100', '00100', '00111'], target: '0'},
      {name: 'houses', rows: ['11011', '11000', '00011', '11011', '11000'], target: '1'},
      {name: 'diagonal', rows: ['10101', '01010', '10101', '01010', '10101'], target: '1'}
    ],
    shortest: [
      {name: 'reachable', rows: ['11100', '00100', '11110', '10010', '11111']},
      {name: 'blocked', rows: ['11100', '00100', '11110', '10000', '11101']}
    ],
    evacuation: [
      {name: 'one_door', rows: ['XXDXX', 'X...X', 'X.X.X', 'X...X', 'XXXXX']},
      {name: 'two_doors', rows: ['XXDXX', 'X...X', 'D.X.X', 'X...X', 'XXXXX']},
      {name: 'trapped', rows: ['XXDXX', 'X...X', 'XXXXX', 'X...X', 'XXXXX']}
    ]
  }[kind];
  let rows, result, index = 0, timer = null, deadline = 1, assignment;
  function element(tag, text, className) {
    const node = document.createElement(tag);
    if (text !== undefined) node.textContent = text;
    if (className) node.className = className;
    return node;
  }
  presets.forEach((preset, i) => {
    const option = element('option', ui[preset.name]);option.value = i;find('preset').append(option);
  });
  find('hint').textContent = ui[kind === 'evacuation' ? 'evac_hint' : 'edit'];
  function pause() {
    clearInterval(timer);timer = null;
    find('play').textContent = ui.play;
    find('message').setAttribute('aria-live', 'polite');
  }
  function metric(label, value) {
    const box = element('div');box.append(element('small', ui[label]), element('strong', value));
    find('metrics').append(box);
  }
  const coordinate = ([r, c]) => `${r + 1},${c + 1}`;
  function drawGrid(frame) {
    const grid = find('grid'), width = rows[0].length;
    const focused = grid.contains(document.activeElement) ? document.activeElement.dataset.cell : null;
    grid.replaceChildren();grid.style.gridTemplateColumns = `repeat(${width}, minmax(0, 1fr))`;
    rows.forEach((row, r) => [...row].forEach((value, c) => {
      const id = r * width + c, cell = element(kind === 'evacuation' ? 'span' : 'button', value, 'ct-cell');
      cell.dataset.cell = id;
      if (kind === 'evacuation') {
        const person = result.model.people.findIndex(([y, x]) => y === r && x === c);
        const door = result.model.doors.findIndex(([y, x]) => y === r && x === c);
        if (value === 'X') cell.classList.add('is-wall');
        if (door >= 0) { cell.textContent = `D${door + 1}`;cell.classList.add('is-door'); }
        if (person >= 0) {
          cell.textContent = `P${person + 1}`;
          if (assignment.schedule[person]?.time <= index) cell.classList.add('is-exited');
        }
      } else {
        cell.type = 'button';
        const target = kind === 'flood' ? presets[Number(find('preset').value)].target : '1';
        if (value !== target) cell.classList.add('is-wall');
        if (frame.labels?.[id]) {
          cell.textContent = frame.labels[id];cell.dataset.component = frame.labels[id];cell.classList.add('is-filled');
        }
        if (frame.distance?.[id] > 0) { cell.textContent = frame.distance[id];cell.classList.add('is-filled'); }
        if (frame.frontier.some(([y, x]) => y === r && x === c)) cell.classList.add('is-frontier');
        if (frame.current?.[0] === r && frame.current?.[1] === c) cell.classList.add('is-current');
        if (frame.path?.some(([y, x]) => y === r && x === c)) cell.classList.add('is-path');
        cell.addEventListener('click', () => {
          rows[r] = rows[r].slice(0, c) + (value === '0' ? '1' : '0') + rows[r].slice(c + 1);
          calculate();
        });
      }
      cell.title = format('cell', {r: r + 1, c: c + 1, value: cell.textContent});
      cell.setAttribute('aria-label', cell.title);grid.append(cell);
    }));
    if (focused !== null) grid.querySelector(`[data-cell="${focused}"]`)?.focus({preventScroll: true});
  }
  function drawTimetable() {
    const table = element('table');table.append(element('caption', ui.timetable));
    const head = element('thead'), heading = element('tr');heading.append(element('th', ui.door));
    for (let time = 1; time <= deadline; time++) heading.append(element('th', format('seconds', {value: time})));
    head.append(heading);table.append(head);
    const body = element('tbody');
    result.model.doors.forEach((_, door) => {
      const row = element('tr'), title = element('th', `D${door + 1}`);title.scope = 'row';row.append(title);
      for (let time = 1; time <= deadline; time++) {
        const person = assignment.schedule.findIndex(slot => slot?.door === door && slot.time === time);
        const cell = element('td', person < 0 ? '—' : `P${person + 1}`);
        if (person >= 0 && time <= index) cell.classList.add('is-past');row.append(cell);
      }
      body.append(row);
    });
    table.append(body);find('timetable').replaceChildren(table);
  }
  function limit() { return kind === 'evacuation' ? deadline : result.frames.length - 1; }
  function render() {
    find('metrics').replaceChildren();
    if (kind === 'evacuation') {
      drawGrid();drawTimetable();
      metric('people', result.model.people.length);
      metric('matched', `${assignment.matched} / ${result.model.people.length}`);
      metric('minimum', result.possible ? format('seconds', {value: result.minimum}) : ui.impossible);
      metric('clock', format('seconds', {value: index}));
      find('deadline-value').textContent = format('seconds', {value: deadline});
      find('deadline').value = deadline;
      const unassigned = assignment.schedule.flatMap((slot, p) => slot ? [] : [`P${p + 1}`]);
      find('frontier').textContent = `${ui.unassigned}: ${unassigned.join(', ') || ui.none}`;
      find('message').textContent = !result.possible ? ui.no_exit : index > 0 ? format('evac_playing', {
        time: index, exited: assignment.schedule.filter(slot => slot && slot.time <= index).length, total: result.model.people.length
      }) : format('deadline_status', {time: deadline, matched: assignment.matched, total: result.model.people.length, result: ui[assignment.matched === result.model.people.length ? 'feasible' : 'infeasible']});
      find('play').disabled = !result.possible;
      find('minimum').disabled = !result.possible;
    } else {
      const frame = result.frames[index];drawGrid(frame);
      if (kind === 'flood') {
        metric('components', frame.sizes.length);metric('sizes', frame.sizes.join(', ') || '—');
      } else {
        const distance = frame.current ? frame.distance[frame.current[0] * rows[0].length + frame.current[1]] : '—';
        metric('distance', distance);metric('frontier', frame.frontier.length);
      }
      find('frontier').textContent = `${ui.frontier}: ${frame.frontier.map(coordinate).join(' → ') || ui.none}`;
      find('seek').value = index;find('step').textContent = `${index}/${limit()}`;
      find('message').textContent = frame.event === 'done' ? kind === 'flood' ? format('flood_done', {count: result.count, sizes: result.sizes.join(', ') || '0'}) : format('shortest_done', {answer: result.answer}) : ui[frame.event];
    }
    find('prev').disabled = index === 0;find('next').disabled = index >= limit();
  }
  function setDeadline(value) {
    pause();deadline = value;index = 0;
    assignment = models.matchByDeadline(result.model, deadline);render();
  }
  function calculate() {
    pause();index = 0;
    if (kind === 'evacuation') {
      result = models.solveEvacuation(rows);
      find('deadline').max = result.possible ? Math.max(1, result.minimum + 4) : rows.length * rows[0].length;
      setDeadline(Math.max(1, result.minimum - 1));
    } else {
      result = kind === 'flood' ? models.floodFill(rows, presets[Number(find('preset').value)].target, find('method').value) : models.shortestPath(rows);
      find('seek').max = limit();render();
    }
  }
  find('preset').addEventListener('change', () => {rows = [...presets[Number(find('preset').value)].rows];calculate();});
  find('method')?.addEventListener('change', calculate);
  find('reset').addEventListener('click', () => {pause();index = 0;render();});
  find('prev').addEventListener('click', () => {pause();index = Math.max(0, index - 1);render();});
  find('next').addEventListener('click', () => {pause();index = Math.min(limit(), index + 1);render();});
  find('seek')?.addEventListener('input', event => {pause();index = Number(event.target.value);render();});
  find('deadline')?.addEventListener('input', event => setDeadline(Number(event.target.value)));
  find('minimum')?.addEventListener('click', () => setDeadline(Math.max(1, result.minimum)));
  find('play').addEventListener('click', () => {
    if (timer) {pause();return;}
    if (kind === 'evacuation' && assignment.matched < result.model.people.length) setDeadline(result.minimum);
    if (index >= limit()) index = 0;
    find('play').textContent = ui.pause;find('message').setAttribute('aria-live', 'off');
    timer = setInterval(() => {index++;if (index >= limit()) pause();render();}, 550);
    render();
  });
  document.addEventListener('visibilitychange', () => {if (document.hidden) pause();});
  rows = [...presets[0].rows];calculate();
})();
