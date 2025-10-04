// assets/js/card-tilt.js
document.addEventListener('DOMContentLoaded', () => {
  const MAX_ROT = 10;     // 최대 기울기(deg)
  const SCALE   = 1.1;    // 확대 배율
  const SMOOTH  = 0.18;   // 포인터 보간 (0~1, 값이 클수록 더 부드럽게)

  document.querySelectorAll('.card').forEach(card => {
    let rect = card.getBoundingClientRect();

    // 내부 상태(부드러운 보간을 위해 실제 좌표와 표시 좌표 분리)
    let rawX = 0, rawY = 0;
    let visX = 0, visY = 0;

    let rafId = null;

    const recalc = () => { rect = card.getBoundingClientRect(); };

    const resetVisuals = () => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
      card.style.zIndex = 1;

      // 카드 효과용 CSS 변수 초기화
      card.style.setProperty('--tx', '0px');
      card.style.setProperty('--ty', '0px');
      card.style.setProperty('--mx', '50%');
      card.style.setProperty('--my', '50%');
      card.style.setProperty('--shine-angle', '0deg');
      card.style.removeProperty('--pointer-x');
      card.style.removeProperty('--pointer-y');

      // ink 반짝임 계수도 리셋
      card.removeAttribute('data-ink');
      card.style.removeProperty('--ink');
    };

    window.addEventListener('resize', recalc);

    card.addEventListener('mouseenter', () => {
      recalc();
      card.style.zIndex = 20; // 겹침 우선
    });

    card.addEventListener('mouseleave', () => {
      resetVisuals();
    });

    const update = () => {
      // 보간으로 부드럽게
      visX += (rawX - visX) * SMOOTH;
      visY += (rawY - visY) * SMOOTH;

      const cx = rect.left + rect.width  / 2;
      const cy = rect.top  + rect.height / 2;

      const lx = visX - rect.left;   // local x
      const ly = visY - rect.top;    // local y

      // 3D 회전량
      const rotX = ((ly - rect.height / 2) / (rect.height / 2)) * MAX_ROT;
      const rotY = ((lx - rect.width  / 2) / (rect.width  / 2)) * MAXROT;

      // 3D 틸트 + 확대
      card.style.transform =
        `perspective(1000px) rotateX(${-rotX}deg) rotateY(${rotY}deg) scale(${SCALE})`;

      // 하이라이트/광원 위치 변수 (px)
      card.style.setProperty('--mx', `${lx}px`);
      card.style.setProperty('--my', `${ly}px`);

      // 반짝임 텍스처 이동량 (px) — 과하지 않게 살짝
      card.style.setProperty('--tx', `${(lx - rect.width/2) * 0.06}px`);
      card.style.setProperty('--ty', `${(ly - rect.height/2) * 0.06}px`);

      // conic-gradient용 포인터 좌표(%) — 무지개 오로라 중심이 따라다님
      const px = (lx / rect.width)  * 100;
      const py = (ly / rect.height) * 100;
      card.style.setProperty('--pointer-x', `${px}%`);
      card.style.setProperty('--pointer-y', `${py}%`);

      // 무지개 결 각도 (마우스 각도에 맞춰 회전감)
      const angle = Math.atan2(ly - rect.height/2, lx - rect.width/2) * 180 / Math.PI;
      card.style.setProperty('--shine-angle', `${angle}deg`);

      // 텍스트 반짝임(가독성) 계수: 중앙에 가까울수록 1에 근접
      const dx = lx - rect.width/2;
      const dy = ly - rect.height/2;
      const dist = Math.sqrt(dx*dx + dy*dy);
      const maxR = Math.hypot(rect.width/2, rect.height/2);
      const ink = Math.max(0, 1 - dist / maxR);   // 0~1
      card.setAttribute('data-ink', '1');
      card.style.setProperty('--ink', ink.toFixed(3));

      rafId = null; // 다음 프레임 예약 가능
    };

    // pointermove로 좌표 갱신(터치/펜 포함)
    card.addEventListener('pointermove', (e) => {
      rawX = e.clientX;
      rawY = e.clientY;
      if (rafId == null) rafId = requestAnimationFrame(update);
    }, { passive: true });
  });
});
