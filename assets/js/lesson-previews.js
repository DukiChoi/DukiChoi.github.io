(() => {
  const previews = [...document.querySelectorAll('[data-lesson-preview]')];
  if (!previews.length) return;
  const language = document.documentElement.lang;
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  const toggle = document.querySelector('.preview-toggle');
  let paused = motion.matches;
  let tick = 0;
  const visible = new Set(previews);
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) visible.add(entry.target); else visible.delete(entry.target);
    }));
    previews.forEach(el => observer.observe(el));
  }
  const initial = [6, 2, 8, 4, 1, 7, 3, 5];
  // Record genuine operations, then animate positions without rerunning a full lesson.
  function trace(kind) {
    const a = [...initial], frames = [[...a]], record = () => frames.push([...a]);
    if (kind === 0) {
      for (let end = a.length - 1; end > 0; end--) {
        let swapped = false;
        for (let j = 0; j < end; j++) {
          record();
          if (a[j] > a[j + 1]) { [a[j], a[j + 1]] = [a[j + 1], a[j]]; swapped = true; record(); }
        }
        if (!swapped) break;
      }
    } else if (kind === 1) {
      for (let i = 1; i < a.length; i++) for (let j = i; j > 0; j--) {
        record();
        if (a[j - 1] <= a[j]) break;
        [a[j - 1], a[j]] = [a[j], a[j - 1]]; record();
      }
    } else {
      for (let i = 0; i < a.length - 1; i++) {
        let min = i;
        for (let j = i + 1; j < a.length; j++) { record(); if (a[j] < a[min]) min = j; }
        if (i !== min) { [a[i], a[min]] = [a[min], a[i]]; record(); }
      }
    }
    return frames;
  }
  const traces = [0, 1, 2].map(trace);
  const cycle = Math.max(...traces.map(t => t.length)) + 6;
  const sorting = previews.find(el => el.dataset.lessonPreview === 'sorting');
  const rows = sorting ? [...sorting.querySelectorAll('.mini-sort-row')] : [];
  const bars = rows.map(row => [...row.querySelectorAll('.mini-bar')]);
  const cache = previews.find(el => el.dataset.lessonPreview === 'cache');
  const transaction = previews.find(el => el.dataset.lessonPreview === 'transaction');
  const slots = [null, null, null, null];
  const addresses = [0, 4, 8, 0, 16, 4, 0, 8];
  function frame() {
    if (paused || document.hidden || !visible.size) return;
    const step = tick % cycle;
    if (sorting && visible.has(sorting)) {
      rows.forEach((row, i) => {
        const values = traces[i][Math.min(step, traces[i].length - 1)];
        bars[i].forEach(bar => { bar.style.left = `${values.indexOf(Number(bar.dataset.value)) * 12.5}%`; });
        row.classList.toggle('is-done', step >= traces[i].length - 1);
      });
      sorting.querySelector('.mini-status').textContent = `${step + 1}`;
    }
    if (tick % 3 === 0 && cache && visible.has(cache)) {
      const k = Math.floor(tick / 3) % addresses.length;
      if (k === 0) slots.fill(null);
      const address = addresses[k], block = address / 4, set = block % 4, hit = slots[set] === block;
      slots[set] = block;
      cache.querySelector('.mini-address strong').textContent = `0x${address.toString(16).toUpperCase().padStart(2, '0')}`;
      cache.querySelector('.mini-status').textContent = hit ? 'HIT' : 'MISS';
      cache.querySelectorAll('.mini-cache-line').forEach((line, i) => {
        line.classList.toggle('is-current', i === set);
        line.querySelector('strong').textContent = slots[i] === null ? '—' : `B${slots[i]}`;
      });
    }
    if (tick % 4 === 0 && transaction && visible.has(transaction)) {
      const k = Math.floor(tick / 4) % 4;
      const labels = {
        en: ['BEGIN → READ 1,000', 'T2: UPDATE → 500', 'T1: DIRTY READ → 500', 'T2: ROLLBACK → 1,000'],
        ja: ['開始 → 1,000を読む', 'T2: 残高を500に更新', 'T1: 未確定の500を読む', 'T2: ロールバック → 1,000'],
        ko: ['시작 → 1,000 읽기', 'T2: 잔액을 500으로 변경', 'T1: 미확정 값 500 읽기', 'T2: 롤백 → 다시 1,000']
      }[language] || ['BEGIN → READ 1,000', 'T2: UPDATE → 500', 'T1: DIRTY READ → 500', 'T2: ROLLBACK → 1,000'];
      transaction.querySelector('[data-tx-read]').textContent = k >= 2 ? '500' : '1,000';
      transaction.querySelector('[data-tx-write]').textContent = k === 1 || k === 2 ? '500' : '1,000';
      transaction.querySelector('.mini-tx-event').textContent = labels[k];
      transaction.classList.toggle('is-dirty', k >= 2);
    }
    tick++;
  }
  function updateToggle() {
    toggle.hidden = false;
    toggle.textContent = paused ? toggle.dataset.playLabel : toggle.dataset.pauseLabel;
    toggle.setAttribute('aria-pressed', String(paused));
  }
  if (toggle) {
    updateToggle();
    toggle.addEventListener('click', () => { paused = !paused; updateToggle(); });
    motion.addEventListener('change', event => { paused = event.matches; updateToggle(); });
  }
  setInterval(frame, 450);
})();
