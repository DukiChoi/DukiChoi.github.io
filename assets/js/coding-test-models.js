/* Pure algorithms shared by the interactive lessons and their regression checks. */
(function (root) {
  'use strict';
  const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]];
  function dimensions(rows) {
    if (!rows.length || !rows[0].length || rows.some(row => row.length !== rows[0].length)) throw new Error('Invalid rectangular grid');
    return [rows.length, rows[0].length];
  }
  function floodFill(rows, target = '0', mode = 'dfs') {
    const [height, width] = dimensions(rows), labels = Array(height * width).fill(0), visited = Array(height * width).fill(false);
    const frames = [], sizes = [];
    const save = (event, current, frontier) => frames.push({event, current, frontier: frontier.map(p => [...p]), labels: [...labels], visited: [...visited], sizes: [...sizes]});
    save('ready', null, []);
    for (let r = 0; r < height; r++) for (let c = 0; c < width; c++) {
      if (String(rows[r][c]) !== String(target) || labels[r * width + c]) continue;
      sizes.push(0);
      const component = sizes.length, pending = [[r, c]];
      let head = 0;
      labels[r * width + c] = component;
      save('component', [r, c], pending);
      while (mode === 'bfs' ? head < pending.length : pending.length > 0) {
        const [y, x] = mode === 'bfs' ? pending[head++] : pending.pop();
        visited[y * width + x] = true;
        sizes[component - 1]++;
        const neighbors = mode === 'bfs' ? directions : [...directions].reverse();
        for (const [dy, dx] of neighbors) {
          const ny = y + dy, nx = x + dx;
          if (ny < 0 || ny >= height || nx < 0 || nx >= width || String(rows[ny][nx]) !== String(target) || labels[ny * width + nx]) continue;
          labels[ny * width + nx] = component; // Mark when discovered, before adding to the frontier.
          pending.push([ny, nx]);
        }
        save('visit', [y, x], mode === 'bfs' ? pending.slice(head) : pending);
      }
    }
    save('done', null, []);
    return {frames, sizes: [...sizes].sort((a, b) => a - b), count: sizes.length};
  }
  function shortestPath(rows) {
    const [height, width] = dimensions(rows), distance = Array(height * width).fill(-1), parent = Array(height * width).fill(-1);
    const frames = [], queue = [];
    const save = (event, current, head) => frames.push({event, current, distance: [...distance], frontier: queue.slice(head), path: []});
    if (Number(rows[0][0]) !== 1 || Number(rows[height - 1][width - 1]) !== 1) {
      save('unreachable', null, 0);return {frames, answer: -1, path: []};
    }
    queue.push([0, 0]);distance[0] = 1;
    save('ready', null, 0);
    for (let head = 0; head < queue.length; head++) {
      const [r, c] = queue[head], id = r * width + c;
      if (id === height * width - 1) {
        const path = [];
        for (let at = id; at !== -1; at = parent[at]) path.push([Math.floor(at / width), at % width]);
        path.reverse();save('done', [r, c], head + 1);frames[frames.length - 1].path = path;
        return {frames, answer: distance[id], path};
      }
      for (const [dy, dx] of directions) {
        const y = r + dy, x = c + dx, next = y * width + x;
        if (y < 0 || y >= height || x < 0 || x >= width || Number(rows[y][x]) !== 1 || distance[next] !== -1) continue;
        distance[next] = distance[id] + 1;parent[next] = id;queue.push([y, x]);
      }
      save('visit', [r, c], head + 1);
    }
    save('unreachable', null, queue.length);
    return {frames, answer: -1, path: []};
  }
  function evacuationDistances(rows) {
    const [height, width] = dimensions(rows), people = [], doors = [];
    rows.forEach((row, r) => [...row].forEach((value, c) => {
      if (value === '.') people.push([r, c]);
      if (value === 'D') doors.push([r, c]);
    }));
    const distances = doors.map(([r, c]) => {
      const distance = Array(height * width).fill(-1), queue = [[r, c]];
      distance[r * width + c] = 0;
      for (let head = 0; head < queue.length; head++) {
        const [y, x] = queue[head];
        for (const [dy, dx] of directions) {
          const ny = y + dy, nx = x + dx, id = ny * width + nx;
          // A door ends a route. Other doors are never used as corridors.
          if (ny < 0 || ny >= height || nx < 0 || nx >= width || rows[ny][nx] !== '.' || distance[id] !== -1) continue;
          distance[id] = distance[y * width + x] + 1;queue.push([ny, nx]);
        }
      }
      return people.map(([y, x]) => distance[y * width + x]);
    });
    return {height, width, people, doors, distances};
  }
  function matchByDeadline(model, deadline) {
    if (!Number.isInteger(deadline) || deadline < 0) throw new Error('Invalid deadline');
    const {people, doors, distances} = model, doorCount = doors.length;
    const edges = people.map((_, person) => {
      const slots = [];
      for (let time = 1; time <= deadline; time++) for (let door = 0; door < doorCount; door++) {
        if (distances[door][person] >= 1 && distances[door][person] <= time) slots.push((time - 1) * doorCount + door);
      }
      return slots;
    });
    const owner = Array(doorCount * deadline).fill(-1), seen = Array(owner.length).fill(0);
    let stamp = 0, matched = 0;
    function augment(person) {
      for (const slot of edges[person]) {
        if (seen[slot] === stamp) continue;
        seen[slot] = stamp;
        if (owner[slot] === -1 || augment(owner[slot])) { owner[slot] = person;return true; }
      }
      return false;
    }
    for (let person = 0; person < people.length; person++) { stamp++;if (augment(person)) matched++; }
    const schedule = Array(people.length).fill(null);
    owner.forEach((person, slot) => { if (person !== -1) schedule[person] = {door: slot % doorCount, time: Math.floor(slot / doorCount) + 1}; });
    return {matched, schedule, deadline};
  }
  function solveEvacuation(rows) {
    const model = evacuationDistances(rows), count = model.people.length;
    if (!count) return {model, possible: true, minimum: 0, schedule: [], checks: []};
    const nearest = model.people.map((_, p) => Math.min(...model.distances.map(ds => ds[p] < 0 ? Infinity : ds[p])));
    if (nearest.some(d => !Number.isFinite(d))) return {model, possible: false, minimum: -1, schedule: [], checks: []};
    let low = Math.max(...nearest, Math.ceil(count / model.doors.length)), high = Math.max(...nearest) + count - 1;
    const checks = [];
    while (low < high) {
      const mid = Math.floor((low + high) / 2), result = matchByDeadline(model, mid);
      checks.push({deadline: mid, matched: result.matched});
      if (result.matched === count) high = mid;else low = mid + 1;
    }
    const result = matchByDeadline(model, low);
    return {model, possible: true, minimum: low, schedule: result.schedule, checks};
  }
  const api = {floodFill, shortestPath, evacuationDistances, matchByDeadline, solveEvacuation};
  if (typeof module === 'object' && module.exports) module.exports = api;else root.CodingTestModels = api;
})(typeof globalThis === 'object' ? globalThis : window);
