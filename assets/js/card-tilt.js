// assets/js/card-tilt.js
document.addEventListener('DOMContentLoaded', () => {
  const MAX_ROT = 10;     // 최대 기울기(deg)
  const SCALE   = 1.2;    // 확대 배율
  let scrollRaf = null;

  document.querySelectorAll('.card').forEach(card => {
    let rect = card.getBoundingClientRect();
    let rafId = null;
    let lastX = 0, lastY = 0;

    const recalc = () => { rect = card.getBoundingClientRect(); };

    // ▶ 초기화 (센터로 광원/이동값 리셋)
    const resetVars = () => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
      card.style.setProperty('--tx', '0px');
      card.style.setProperty('--ty', '0px');
      card.style.setProperty('--mx', '50%');
      card.style.setProperty('--my', '50%');
      card.style.setProperty('--shine-angle', '0deg');
      card.style.zIndex = 1;
    };

    const update = () => {
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      const x  = lastX - rect.left;
      const y  = lastY - rect.top;

      const rotX = ((y - cy) / cy) * MAX_ROT;
      const rotY = ((x - cx) / cx) * MAX_ROT;

      card.style.transform =
        `perspective(1000px) rotateX(${-rotX}deg) rotateY(${rotY}deg) scale(${SCALE})`;

      // 빛/글로시 위치
      card.style.setProperty('--tx', `${(x - cx) * 0.06}px`);
      card.style.setProperty('--ty', `${(y - cy) * 0.06}px`);
      card.style.setProperty('--mx', `${x}px`);
      card.style.setProperty('--my', `${y}px`);

      // 무지개 결 각도
      const angle = Math.atan2(y - cy, x - cx) * 180 / Math.PI;
      card.style.setProperty('--shine-angle', `${angle}deg`);

      rafId = null;
    };

    // ✅ pointerenter: 버블 없음, 안정적
    card.addEventListener('pointerenter', (e) => {
      recalc();             // 위치 재계산
      resetVars();          // 이전 카드 값 잔상 방지
      card.style.zIndex = 20;
      lastX = e.clientX;
      lastY = e.clientY;
      if (rafId == null) rafId = requestAnimationFrame(update);
    });

    // ✅ pointermove: rAF 스로틀
    card.addEventListener('pointermove', (e) => {
      lastX = e.clientX;
      lastY = e.clientY;
      if (rafId == null) rafId = requestAnimationFrame(update);
    }, { passive: true });

    // ✅ pointerleave/out/cancel: 어떤 경우에도 리셋
    const leave = () => resetVars();
    card.addEventListener('pointerleave', leave);
    card.addEventListener('pointerout', leave);
    card.addEventListener('pointercancel', leave);

    // 창 크기/스크롤 변화로 rect 변할 때
    window.addEventListener('resize', recalc, { passive: true });
    window.addEventListener('scroll', () => {
      if (scrollRaf == null) {
        scrollRaf = requestAnimationFrame(() => {
          recalc();
          scrollRaf = null;
        });
      }
    }, { passive: true });
  });
});
