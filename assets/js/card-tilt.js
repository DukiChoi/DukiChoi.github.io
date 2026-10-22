(() => {
  const MAX_ROTATION = 20;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const finePointer = window.matchMedia('(any-hover: hover) and (any-pointer: fine)');
  const singleColumn = window.matchMedia('(max-width: 700px)');
  const clamp = value => Math.max(0, Math.min(1, value));
  const cards = Array.from(document.querySelectorAll('.card--holo'));
  const foilStyles = ['amazing-rare', 'holo', 'cosmos', 'radiant'];
  const updateRows = () => {
    const columns = singleColumn.matches ? 1 : 2;
    cards.forEach((card, index) => {
      card.dataset.foil = foilStyles[Math.floor(index / columns) % foilStyles.length];
    });
  };
  updateRows();
  singleColumn.addEventListener('change', updateRows);

  const controllers = cards.map(card => {
    // Measure the stationary slot, so tilting the card never moves its hit area.
    const slot = card.closest('.card-slot');
    let bounds;
    let active = false;
    let frame = 0;
    let previousTime = 0;
    const current = { x: 0.5, y: 0.5, lift: 0 };
    const target = { ...current };

    const render = () => {
      card.style.setProperty('--rotate-x', `${((0.5 - current.y) * 2 * MAX_ROTATION).toFixed(3)}deg`);
      card.style.setProperty('--rotate-y', `${((current.x - 0.5) * 2 * MAX_ROTATION).toFixed(3)}deg`);
      card.style.setProperty('--lift', `${(-current.lift * 4).toFixed(3)}px`);
      card.style.setProperty('--mx', `${(current.x * 100).toFixed(2)}%`);
      card.style.setProperty('--my', `${(current.y * 100).toFixed(2)}%`);
      // Incidence changes the intensity; the grain stays fixed on the surface.
      const incidence = Math.min(1, Math.hypot(current.x - 0.5, current.y - 0.5) * Math.SQRT2);
      card.style.setProperty('--light', (current.lift * (0.6 + incidence * 0.4)).toFixed(4));
      // The foil shifts against the light, like diffraction on a printed card.
      card.style.setProperty('--foil-x', `${(65 - current.x * 30).toFixed(2)}%`);
      card.style.setProperty('--foil-y', `${(65 - current.y * 30).toFixed(2)}%`);
    };

    const animate = time => {
      const elapsed = previousTime ? Math.min(time - previousTime, 32) : 16;
      previousTime = time;
      const easing = 1 - Math.exp(-elapsed / 75);
      let moving = false;

      for (const key of ['x', 'y', 'lift']) {
        current[key] += (target[key] - current[key]) * easing;
        if (Math.abs(target[key] - current[key]) > 0.001) moving = true;
        else current[key] = target[key];
      }

      render();
      frame = moving ? requestAnimationFrame(animate) : 0;
      if (!moving) previousTime = 0;
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(animate);
    };

    const reset = (immediate = false) => {
      active = false;
      card.classList.remove('is-hover');
      slot.classList.remove('is-active');
      Object.assign(target, { x: 0.5, y: 0.5, lift: 0 });

      if (immediate) {
        cancelAnimationFrame(frame);
        frame = 0;
        previousTime = 0;
        Object.assign(current, target);
        render();
      } else {
        schedule();
      }
    };

    const track = event => {
      if (event.pointerType !== 'mouse' || reducedMotion.matches || !finePointer.matches) return;
      if (!active) {
        bounds = slot.getBoundingClientRect();
        active = true;
        target.lift = 1;
        card.classList.add('is-hover');
        slot.classList.add('is-active');
      }
      target.x = clamp((event.clientX - bounds.left) / bounds.width);
      target.y = clamp((event.clientY - bounds.top) / bounds.height);
      schedule();
    };

    slot.addEventListener('pointerenter', track);
    slot.addEventListener('pointermove', track, { passive: true });
    slot.addEventListener('pointerleave', () => reset());
    slot.addEventListener('pointercancel', () => reset());

    return {
      reset,
      measure: () => { if (active) bounds = slot.getBoundingClientRect(); },
      slot
    };
  });

  const resetAll = () => controllers.forEach(controller => controller.reset(true));
  const resizeObserver = new ResizeObserver(entries => {
    for (const entry of entries) {
      controllers.find(controller => controller.slot === entry.target)?.measure();
    }
  });
  controllers.forEach(controller => resizeObserver.observe(controller.slot));

  window.addEventListener('scroll', resetAll, { passive: true });
  window.addEventListener('blur', resetAll);
  window.addEventListener('resize', resetAll);
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) resetAll();
  });
  reducedMotion.addEventListener('change', resetAll);
  finePointer.addEventListener('change', resetAll);
})();
