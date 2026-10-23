(() => {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const finePointer = window.matchMedia('(any-hover: hover) and (any-pointer: fine)');
  const targets = document.querySelectorAll('.home-program-banner, .program-link--cube');
  const controllers = Array.from(targets, target => {
    const stage = target.querySelector('.program-cube-stage') || target;
    const cube = stage !== target;
    const layer = document.createElement('span');
    layer.className = `hover-sparkles hover-sparkles--${cube ? 'cube' : 'metal'}`;
    layer.setAttribute('aria-hidden', 'true');
    stage.append(layer);
    let timer = 0;
    let active = false;
    const stop = () => {
      active = false;
      clearTimeout(timer);
      layer.replaceChildren();
    };
    const emit = (delay = 0) => {
      const point = document.createElement('span');
      const pin = Math.random() < .35;
      point.className = `hover-sparkle${pin ? ' hover-sparkle--pin' : ''}`;
      // Give the raised cube a loose halo; catch the nameplate's bevels and grain.
      const angle = Math.random() * Math.PI * 2;
      const radius = 40 + Math.random() * 8;
      const edge = Math.random() < .7;
      const x = cube ? 50 + Math.cos(angle) * radius : 3 + Math.random() * 94;
      const y = cube ? 50 + Math.sin(angle) * radius : edge
        ? (Math.random() < .5 ? 8 + Math.random() * 12 : 80 + Math.random() * 12)
        : 24 + Math.random() * 52;
      point.style.left = `${x}%`;
      point.style.top = `${y}%`;
      point.style.setProperty('--spark-size', `${pin ? 3 + Math.random() * 2 : 7 + Math.random() * 6}px`);
      point.style.setProperty('--spark-duration', `${850 + Math.random() * 550}ms`);
      point.style.setProperty('--spark-delay', `${delay}ms`);
      point.style.setProperty('--spark-turn', `${-18 + Math.random() * 36}deg`);
      if (!cube) {
        const colors = ['#f5fcff', '#d3eeff', '#e4dfff'];
        point.style.setProperty('--spark-color', colors[Math.floor(Math.random() * colors.length)]);
      }
      point.addEventListener('animationend', () => point.remove(), { once: true });
      layer.append(point);
    };
    const sparkle = () => {
      if (!active) return;
      if (!trigger.matches(':hover')) { stop(); return; }
      emit();
      timer = window.setTimeout(sparkle, (cube ? 340 : 260) + Math.random() * 460);
    };
    // Use the stationary slot so card tilt and scaling do not flicker the effect.
    const trigger = target.closest('[data-tilt-slot]') || target;
    trigger.addEventListener('pointerenter', event => {
      if (event.pointerType !== 'mouse' || reducedMotion.matches || !finePointer.matches || document.hidden) return;
      stop();
      active = true;
      sparkle();
      emit(160);
    });
    trigger.addEventListener('pointerleave', stop);
    trigger.addEventListener('pointercancel', stop);
    return { stop };
  });
  const stopAll = () => controllers.forEach(controller => controller.stop());
  window.addEventListener('blur', stopAll);
  document.addEventListener('visibilitychange', () => { if (document.hidden) stopAll(); });
  reducedMotion.addEventListener('change', stopAll);
  finePointer.addEventListener('change', stopAll);
})();
