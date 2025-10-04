// assets/js/card-tilt.js
const MAX_ROT = 10;     // 최대 기울기 각도
const SCALE   = 1.2;    // 확대 배율 (2배 원하면 2로)
let rafId = null;

document.querySelectorAll(".card").forEach(card => {
  let lastEvent = null;

  const update = () => {
    if (!lastEvent) return;
    const rect = card.getBoundingClientRect();
    const x = lastEvent.clientX - rect.left;
    const y = lastEvent.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;

    const rotX = ((y - cy) / cy) * MAX_ROT;   // 상하
    const rotY = ((x - cx) / cx) * MAX_ROT;   // 좌우

    // 기울기 + 확대
    card.style.transform = `rotateX(${-rotX}deg) rotateY(${rotY}deg) scale(${SCALE})`;
    // 반짝임 위치 (CSS 변수)
    card.style.setProperty("--mx", `${x}px`);
    card.style.setProperty("--my", `${y}px`);

    rafId = null;
  };

  card.addEventListener("mouseenter", () => {
    card.style.zIndex = 20;            // 위로 띄우기
  });

  card.addEventListener("mousemove", (e) => {
    lastEvent = e;
    if (rafId == null) rafId = requestAnimationFrame(update);
  });

  card.addEventListener("mouseleave", () => {
    lastEvent = null;
    card.style.transform = "rotateX(0) rotateY(0) scale(1)";
    card.style.zIndex = 1;
    // 반짝임 숨김은 CSS :hover에서 처리
  });
});
