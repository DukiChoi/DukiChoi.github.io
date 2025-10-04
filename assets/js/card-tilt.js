// assets/js/card-tilt.js
document.addEventListener('DOMContentLoaded', () => {
  const MAX_ROT = 10;   // 최대 기울기(deg)
  const SCALE   = 1.1;  // 확대 배율
  const IDLE_MS = 140;  // ★ ADD: 입력(터치/포인터) 정지 시 자동 원복 대기 시간(ms)
  const isTouch = matchMedia('(pointer: coarse)').matches; // 터치 기반인지 확인
  document.querySelectorAll('.card').forEach(card => {
    let rect = card.getBoundingClientRect();
    let rafId = null;
    let lastX = 0, lastY = 0;
    let activePointerId = null; // ← 터치/펜 추적용
    let idleTimer = null;       // ★ ADD: 유휴 타이머

    // 성능: 레이아웃 측정은 진입/리사이즈 시에만
    const recalc = () => { rect = card.getBoundingClientRect(); };
    window.addEventListener('resize', recalc);
    const clearIdle = () => {              // ★ ADD
      if (idleTimer) { clearTimeout(idleTimer); idleTimer = null; }
    };
    const scheduleIdleReset = () => {      // ★ ADD
      clearIdle();
      idleTimer = setTimeout(() => { resetVars(); }, IDLE_MS);
    };
    
    const resetVars = () => {
      clearIdle(); // ★ ADD: 리셋 시 유휴 타이머도 함께 정리
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
      card.style.zIndex = 1;
      card.style.setProperty('--tx', '0px');
      card.style.setProperty('--ty', '0px');
      card.style.setProperty('--mx', '50%');
      card.style.setProperty('--my', '50%');
      card.style.setProperty('--shine-angle', '0deg');
      card.classList.remove('is-hover'); // ← 터치 대체 hover 해제
      activePointerId = null;            // ★ ADD: 포인터 상태도 정리
    };

    const update = () => {
      // 3D 틸트 + 확대
      const scaleVal = isTouch ? 1 : SCALE;   // 터치면 1, 아니면 1.1
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      const x  = lastX - rect.left;
      const y  = lastY - rect.top;

      // 3D 회전량
      const rotX = ((y - cy) / cy) * MAX_ROT;
      const rotY = ((x - cx) / cx) * MAX_ROT;

      // 3D 틸트 + 확대(합성 단계)
      card.style.transform =
        `perspective(1000px) rotateX(${-rotX}deg) rotateY(${rotY}deg) scale(${scaleVal})`;

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

    // ===== 마우스 =====
    card.addEventListener('mouseenter', () => {
      recalc();
      card.style.zIndex = 20; // 겹침 방지
      card.classList.add('is-hover'); // 데스크톱도 동일 클래스 사용
    });

    card.addEventListener('mouseleave', () => {
      lastX = lastY = 0;
      resetVars();
    });

    // 공통 포인터 이동(마우스/터치/펜)
    // 공통 포인터 이동
    card.addEventListener('pointermove', (e) => {
      // ✨ 인터랙티브 요소 드래그 중이면 틸트 건너뜀
      if (e.target.closest('summary, a, button, input, textarea, select, label, details, [data-no-tilt]')) {
        return;
      }
      if (activePointerId !== null && e.pointerId !== activePointerId) return;
      lastX = e.clientX;
      lastY = e.clientY;
      if (rafId == null) rafId = requestAnimationFrame(update);
    }, { passive: true });
    
    // 포인터 시작
    card.addEventListener('pointerdown', (e) => {
      // ✨ 클릭 시작이 인터랙티브면 기본 동작만 수행(틸트/캡처 X)
      if (e.target.closest('summary, a, button, input, textarea, select, label, details, [data-no-tilt]')) {
        activePointerId = null;
        return;
      }
    
      recalc();
      card.style.zIndex = 20;
      card.classList.add('is-hover');
      lastX = e.clientX;
      lastY = e.clientY;
      if (rafId == null) rafId = requestAnimationFrame(update);
    
      // (옵션) 탭 순간 반짝임
      card.style.setProperty('--gloss-boost', '1');
      setTimeout(() => card.style.setProperty('--gloss-boost', '0'), 160);
    
      // ✨ 터치일 때만 캡처/추적/idle 리셋
      if (isTouch) {
        activePointerId = e.pointerId;
        try { card.setPointerCapture(e.pointerId); } catch(_) {}
        scheduleIdleReset();
      }
    });
    
    const endPointer = (e) => {
      // ✨ 터치일 때만 포인터 종료 처리(PC 클릭 방해 금지)
      if (!isTouch) return;
      if (e.pointerId !== activePointerId) return;
      try { card.releasePointerCapture(e.pointerId); } catch(_) {}
      activePointerId = null;
      resetVars();
    };
    card.addEventListener('pointerup', endPointer);
    card.addEventListener('pointercancel', endPointer);
    // ★ ADD: 포인터가 카드 밖으로 나가면(모바일에서도 종종 발생) 안전 리셋
    card.addEventListener('pointerleave', resetVars);

    // ★ ADD: 스크롤/탭 전환 등 상호작용 중단 상황에서도 안전 리셋
    window.addEventListener('scroll', resetVars, { passive: true });
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) resetVars();
    });
    window.addEventListener('blur', resetVars)
  });
});
