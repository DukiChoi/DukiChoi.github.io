// assets/js/card-tilt.js
document.addEventListener('DOMContentLoaded', () => {
  const MAX_ROT = 10;   // 최대 기울기 (deg)
  const SCALE   = 1.2;  // 확대 배율
  let rafId = null;

  document.querySelectorAll('.card').forEach(card => {
    let lastEvent = null;

    const update = () => {
      if (!lastEvent) return;
      const rect = card.getBoundingClientRect();
      const x = lastEvent.clientX - rect.left;
      const y = lastEvent.clientY - rect.top;
      const cx = rect.width / 2;
      const cy = rect.height / 2;

      const rotX = ((y - cy) / cy) * MAX_ROT;  // 상하
      const rotY = ((x - cx) / cx) * MAX_ROT;  // 좌우

      // 카드 자체에 perspective 포함
      card.style.transform = `perspective(1000px) rotateX(${-rotX}deg) rotateY(${rotY}deg) scale(${SCALE})`;
      // 반짝임 위치(선택): CSS 변수로 넘김
      card.style.setProperty('--mx', `${x}px`);
      card.style.setProperty('--my', `${y}px`);

      rafId = null;
    };

    card.addEventListener('mouseenter', () => {
      card.style.zIndex = 20; // 위로
    });

    card.addEventListener('mousemove', (e) => {
      lastEvent = e;
      if (rafId == null) rafId = requestAnimationFrame(update);
    });

    card.addEventListener('mouseleave', () => {
      lastEvent = null;
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
      card.style.zIndex = 1;
    });
  });
});
