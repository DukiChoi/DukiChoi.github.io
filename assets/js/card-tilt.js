// 페이지 내 SVG의 foillight를 캐치 (없으면 graceful fallback)
const foilLight = document.getElementById('foilLight');

document.addEventListener('DOMContentLoaded', () => {
  const MAX_ROT = 10;   // 최대 기울기(deg)
  const SCALE   = 1.10; // 확대 배율 (비닐 느낌은 과한 확대 X)

  let activeCard = null;
  let rect = null;
  let rafId = null;
  let lastX = 0, lastY = 0;

  const recalc = el => { rect = el.getBoundingClientRect(); };

  const centerLight = el => {
    if (!foilLight || !rect) return;
    const cx = Math.round(rect.width / 2);
    const cy = Math.round(rect.height / 2);
    foilLight.setAttribute('x', String(cx));
    foilLight.setAttribute('y', String(cy));
    foilLight.setAttribute('z', '160'); // 높이감(130~180 조절)
  };

  const reset = el => {
    if (!el) return;
    el.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
    el.style.zIndex = 1;
    el.style.setProperty('--tx', '0px');
    el.style.setProperty('--ty', '0px');
    el.style.setProperty('--mx', '50%');
    el.style.setProperty('--my', '50%');
    el.style.setProperty('--shine-angle', '0deg');
    centerLight(el);
  };

  const update = () => {
    if (!activeCard || !rect) { rafId = null; return; }

    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const x  = lastX - rect.left;
    const y  = lastY - rect.top;

    // 3D 틸트 + 확대 (GPU 합성)
    const rotX = ((y - cy) / cy) * MAX_ROT;
    const rotY = ((x - cx) / cx) * MAX_ROT;
    activeCard.style.transform =
      `perspective(1000px) rotateX(${-rotX}deg) rotateY(${rotY}deg) scale(${SCALE})`;

    // 반짝임/하이라이트 변수
    activeCard.style.setProperty('--tx', `${(x - cx) * 0.06}px`);
    activeCard.style.setProperty('--ty', `${(y - cy) * 0.06}px`);
    activeCard.style.setProperty('--mx', `${x}px`);
    activeCard.style.setProperty('--my', `${y}px`);

    // 쉬엔(사선) 각도 - 필요 시 CSS에서 var(--shine-angle) 사용
    const angle = Math.atan2(y - cy, x - cx) * 180 / Math.PI;
    activeCard.style.setProperty('--shine-angle', `${angle}deg`);

    // SVG 점광원 위치 갱신 (비닐 반사)
    if (foilLight) {
      foilLight.setAttribute('x', String(Math.round(x)));
      foilLight.setAttribute('y', String(Math.round(y)));
      // foilLight.setAttribute('z', '160'); // z는 고정값이면 생략 가능
    }

    rafId = null;
  };

  // 카드별 이벤트 바인딩
  document.querySelectorAll('.card').forEach(card => {
    // 레이아웃 변동 시 rect 갱신
    const onResize = () => { if (activeCard === card) recalc(card); };
    window.addEventListener('resize', onResize);

    card.addEventListener('pointerenter', e => {
      activeCard = card;
      recalc(card);
      card.style.zIndex = 20;
      lastX = e.clientX;
      lastY = e.clientY;
      if (rafId == null) rafId = requestAnimationFrame(update);
    });

    card.addEventListener('pointermove', e => {
      if (activeCard !== card) return;
      lastX = e.clientX;
      lastY = e.clientY;
      if (rafId == null) rafId = requestAnimationFrame(update);
    }, { passive: true });

    const leave = () => {
      if (activeCard !== card) return;
      reset(card);
      activeCard = null;
      rect = null;
      if (rafId) { cancelAnimationFrame(rafId); rafId = null; }
    };

    card.addEventListener('pointerleave', leave);
    card.addEventListener('pointercancel', leave);
    card.addEventListener('pointerout', leave);
  });

  // 탭 전환/창 블러 등에서도 안전 리셋
  window.addEventListener('blur', () => { if (activeCard) reset(activeCard); });
});
