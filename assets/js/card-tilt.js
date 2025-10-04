// assets/js/card-tilt.js
document.addEventListener('DOMContentLoaded', () => {
  const MAX_ROT = 10;   // 최대 기울기(deg)
  const SCALE   = 1.1;  // 확대 배율

  document.querySelectorAll('.card').forEach(card => {
    let rect = card.getBoundingClientRect();
    let rafId = null;
    let lastX = 0, lastY = 0;

    // 성능: 레이아웃 측정은 진입/리사이즈 시에만
    const recalc = () => { rect = card.getBoundingClientRect(); };
    window.addEventListener('resize', recalc);

    card.addEventListener('mouseenter', () => {
      recalc();
      card.style.zIndex = 20; // 겹침 방지
    });

    card.addEventListener('mouseleave', () => {
      lastX = lastY = 0;
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
      card.style.zIndex = 1;

      // 홀로/반짝임 변수 초기화
      card.style.setProperty('--tx', '0px');
      card.style.setProperty('--ty', '0px');
      card.style.setProperty('--mx', '50%');
      card.style.setProperty('--my', '50%');
      card.style.setProperty('--shine-angle', '0deg');
    });

    const update = () => {
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      const x  = lastX - rect.left;
      const y  = lastY - rect.top;

      // 3D 회전량
      const rotX = ((y - cy) / cy) * MAX_ROT;
      const rotY = ((x - cx) / cx) * MAX_ROT;

      // 3D 틸트 + 확대(합성 단계)
      card.style.transform =
        `perspective(1000px) rotateX(${-rotX}deg) rotateY(${rotY}deg) scale(${SCALE})`;

      // 반짝임 레이어 이동(페인트 최소화: transform만 변경)
      card.style.setProperty('--tx', `${(x - cx) * 0.06}px`);
      card.style.setProperty('--ty', `${(y - cy) * 0.06}px`);
      // 하이라이트 중심
      card.style.setProperty('--mx', `${x}px`);
      card.style.setProperty('--my', `${y}px`);

      // 🌈 무지개 결 각도(포켓몬 holo 느낌용)
      const angle = Math.atan2(y - cy, x - cx) * 180 / Math.PI;
      card.style.setProperty('--shine-angle', `${angle}deg`);

      rafId = null;
    };

    // mousemove 대신 pointermove (터치/펜 포함)
    card.addEventListener('pointermove', (e) => {
      lastX = e.clientX;
      lastY = e.clientY;
      if (rafId == null) rafId = requestAnimationFrame(update);
    }, { passive: true });
  });
});
