// assets/js/card-tilt.js
document.addEventListener('DOMContentLoaded', () => {
  const MAX_ROT = 10;      // 기울기 세기
  const SCALE   = 1.2;     // 확대 배율

  const cards = Array.from(document.querySelectorAll('.card'));
  let activeCard = null;    // 현재 활성 카드
  let rafId = null;
  let lastX = 0, lastY = 0;

  const resetVars = (el) => {
    if (!el) return;
    el.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
    el.style.setProperty('--tx', '0px');
    el.style.setProperty('--ty', '0px');
    el.style.setProperty('--mx', '50%');
    el.style.setProperty('--my', '50%');
    el.style.setProperty('--shine-angle', '0deg');
    el.style.zIndex = 1;
  };

  const recalc = (el) => el.getBoundingClientRect();

  const update = () => {
    if (!activeCard) { rafId = null; return; }
    const rect = recalc(activeCard);
    const cx = rect.width / 2, cy = rect.height / 2;
    const x  = lastX - rect.left, y = lastY - rect.top;

    const rotX = ((y - cy) / cy) * MAX_ROT;
    const rotY = ((x - cx) / cx) * MAX_ROT;

    activeCard.style.transform =
      `perspective(1000px) rotateX(${-rotX}deg) rotateY(${rotY}deg) scale(${SCALE})`;

    // 광원/글로시 변수
    activeCard.style.setProperty('--tx', `${(x - cx) * 0.06}px`);
    activeCard.style.setProperty('--ty', `${(y - cy) * 0.06}px`);
    activeCard.style.setProperty('--mx', `${x}px`);
    activeCard.style.setProperty('--my', `${y}px`);

    const angle = Math.atan2(y - cy, x - cx) * 180 / Math.PI;
    activeCard.style.setProperty('--shine-angle', `${angle}deg`);

    rafId = null;
  };

  // 카드마다 포인터 이벤트 바인딩
  cards.forEach(card => {
    // 카드에 들어올 때: 이전 카드 즉시 초기화 + 활성 전환
    card.addEventListener('pointerenter', (e) => {
      if (activeCard && activeCard !== card) resetVars(activeCard);
      activeCard = card;
      activeCard.style.zIndex = 20;

      // 첫 프레임에서 깜빡임 방지: 센터로 초기화 후 바로 업데이트
      resetVars(activeCard);
      lastX = e.clientX;
      lastY = e.clientY;
      if (rafId == null) rafId = requestAnimationFrame(update);
    });

    // 이동: 활성 카드만 갱신
    card.addEventListener('pointermove', (e) => {
      if (activeCard !== card) return;          // 다른 카드면 무시
      lastX = e.clientX;
      lastY = e.clientY;
      if (rafId == null) rafId = requestAnimationFrame(update);
    }, { passive: true });

    // 카드에서 나갈 때: 그 카드만 초기화하고 비활성
    const leave = () => {
      if (activeCard === card) {
        resetVars(card);
        activeCard = null;
      } else {
        resetVars(card); // 안전망
      }
    };
    card.addEventListener('pointerleave', leave);
    card.addEventListener('pointerout', leave);
    card.addEventListener('pointercancel', leave);
  });

  // 창/스크롤 변화 시 좌표 오차 줄이기(필요 최소)
  let scrollRaf = null;
  window.addEventListener('scroll', () => {
    if (scrollRaf == null) {
      scrollRaf = requestAnimationFrame(() => { scrollRaf = null; if (activeCard) update(); });
    }
  }, { passive: true });

  window.addEventListener('resize', () => { if (activeCard) update(); }, { passive: true });
});
