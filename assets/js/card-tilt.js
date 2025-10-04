// assets/js/card-tilt.js
document.addEventListener('DOMContentLoaded', () => {
  const MAX_ROT = 10;   // 기울기
  const SCALE   = 1.2; // 확대(너무 크면 성능↓)

  document.querySelectorAll('.card').forEach(card => {
    let rect = card.getBoundingClientRect();
    let rafId = null;
    let lastX = 0, lastY = 0;

    // 성능: layout 측정은 진입/리사이즈에만
    const recalc = () => { rect = card.getBoundingClientRect(); };
    window.addEventListener('resize', recalc);
    card.addEventListener('mouseenter', () => { recalc(); card.style.zIndex = 20; });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
      card.style.zIndex = 1;
      card.style.setProperty('--tx', '0px');
      card.style.setProperty('--ty', '0px');
      card.style.setProperty('--mx', '50%');
      card.style.setProperty('--my', '50%');
    });

    const update = () => {
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      const x = lastX - rect.left;
      const y = lastY - rect.top;

      const rotX = ((y - cy) / cy) * MAX_ROT;
      const rotY = ((x - cx) / cx) * MAX_ROT;

      // transform만 갱신 → 합성 단계에서 처리 (빠름)
      card.style.transform =
        `perspective(1000px) rotateX(${-rotX}deg) rotateY(${rotY}deg) scale(${SCALE})`;

      // 광원 이동: 배경좌표 대신 '변환'에 쓸 변수만 세팅 (repaint 줄이기)
      card.style.setProperty('--tx', `${(x - cx) * 0.06}px`);
      card.style.setProperty('--ty', `${(y - cy) * 0.06}px`);
      // 필요하면 하이라이트 중심도 같이 이동
      card.style.setProperty('--mx', `${x}px`);
      card.style.setProperty('--my', `${y}px`);
      rafId = null;
    };

    // mousemove 대신 pointermove (터치/펜 포함, 일부 환경에서 더 효율적)
    card.addEventListener('pointermove', (e) => {
      lastX = e.clientX;
      lastY = e.clientY;
      if (rafId == null) rafId = requestAnimationFrame(update);
    }, { passive: true });
  });
});
