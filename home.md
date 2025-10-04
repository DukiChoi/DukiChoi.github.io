---
layout: home
permalink: /
permalink_name: /Home
title: Home
js_file: /assets/js/card-tilt.js
---
<script type="text/javascript" src="{{ page.js_file | relative_url }}"></script>
<section class="hero">
  <div class="hero__text">
    <h1>About DukiChoi</h1>
    <p class="intro">안녕하세요. 개발자 <strong>DukiChoi</strong>입니다. 임베디드 시스템, IoT, 바이오 신호처리 기반 연구(Embedded · XR/VR · IMU/BLE · ML)와 다양한 임베디드 프로젝트를 수행해 왔습니다.</p>
  </div>
  <!-- <div class="hero__research badge"> -->
    <!-- <i class="fa-solid fa-microscope"></i> -->
    
  <!-- /div -->
</section>

<hr class="section-sep"/>

# 연구분야
- 임베디드 시스템 및 IoT 기반 바이오 신호처리

# 컴퓨터 활용능력
- **C++, C#, Arduino, Java**  
  · 활용수준: 중급  
  · 사용기간: 4년
- **Python, Matlab**  
  · 활용수준: 중급  
  · 사용기간: 6년
- **공학용 KiCAD**  
  · 활용수준: 중급  
  · 사용기간: 2년

<hr class="section-sep"/>

<section class="hero">
  <div class="hero__text">
    <h1>Projects & Research</h1>
    <ul class="cards">
    {% for p in site.data.projects %}
      <li class="card card--holo">
        <span class="foil-layer"></span>
        <header class="card__head">
          <h3 class="card__title">
            {{ p.name }}
          </h3>
          {% if p.period %}
            <span class="badge badge--ghost"><i class="fa-regular fa-calendar"></i> {{ p.period }}</span>
          {% endif %}
        </header>
    
        {% if p.summary %}
          <p class="card__summary">{{ p.summary }}</p>
        {% endif %}
    
        <dl class="meta">
          {% if p.participants %}
            <div class="meta__row">
              <dt><i class="fa-solid fa-users"></i> 참여자</dt>
              <dd>
                {% for person in p.participants %}
                  {% if person.link %}
                    <a href="{{ person.link }}" target="_blank" rel="noopener" class="gh-link" title="{{ person.name }}">
                      <i class="fab fa-github"></i>
                    </a>
                  {% else %}
                    <span>{{ person.name }}</span>
                  {% endif %}
                {% endfor %}
              </dd>
            </div>
          {% endif %}
          {% if p.role %}
            <div class="meta__row">
              <dt><i class="fa-solid fa-user-gear"></i> 역할</dt>
              <dd>{{ p.role }}</dd>
            </div>
          {% endif %}
          {% if p.stack %}
            <div class="meta__row">
              <dt><i class="fa-solid fa-microchip"></i> Stack</dt>
              <dd>{{ p.stack }}</dd>
            </div>
          {% endif %}
        </dl>
    
        {% if p.details %}
          <details class="details">
            <summary><i class="fa-solid fa-list-check"></i> 상세 보기</summary>
            <ul class="details__list">
              {% for d in p.details %}
                <li>{{ d }}</li>
              {% endfor %}
            </ul>
          </details>
        {% endif %}
    
        <footer class="card__foot">
          {% if p.link %}
            <a class="btn btn--github" href="{{ p.link }}" target="_blank" rel="noopener">
              <i class="fab fa-github"></i> GitHub
            </a>
          {% endif %}
        </footer>
        <div class="card__shine" aria-hidden="true"></div>
        <div class="card__glare" aria-hidden="true"></div>
      </li>
    {% endfor %}
    </ul>
  </div>
</section>




<style>
  
/* ====== Color System (다크 + 블루 포인트) ====== */
:root{
  --bg:#121212;         /* 페이지 전체 배경 */
  --card:#1E1E1E;       /* 카드 배경 */
  --card-raise:#2A2A2A; /* 카드 hover 배경 */
  --text:#EAEAEA;       /* 기본 텍스트 */
  --muted:#9C9C9C;      /* 보조 텍스트 */
  --line:#2C2C2C;       /* 테두리 */
  --accent:#5CC9F5;     /* 포인트 블루 */
  --violet:#b069ff; 
  --blue:#5cc9f5; 
  --green:#47f58a; 
  --yellow:#ffe66b; 
  --red:#ff6b6b;
}

/* ====== Style ====== */
.about-title {
  font-weight: 900;   /* bold 강조 */
}
.cards li::before {
  content: none !important;
}
  
/* ====== Hero ====== */
.hero{ margin: 1.5rem 0 .5rem; }
.hero__text h1{
  font-size:2.3rem; font-weight:800; margin:0 0 .5rem;
  background: linear-gradient(90deg, #5CC9F5, #82DFFF);
  -webkit-background-clip:text; -webkit-text-fill-color:transparent;
}
.subtitle{ margin:.15rem 0 .35rem; color:var(--muted); }
.intro{ margin:.4rem 0 .9rem; color:var(--text); font-size:1rem; line-height:1.6; }
.cta{ display:flex; gap:.6rem; flex-wrap:wrap; }

/* ====== Buttons ====== */
.btn{
  display:inline-flex; align-items:center; gap:.5rem;
  padding:.55rem .9rem; border:1px solid var(--line); border-radius:.6rem;
  text-decoration:none; font-size:.95rem; transition:all .2s ease;
  color:var(--text); background:transparent;
}
.btn:hover{ background:#1d1d1d; }
.btn--primary{ border-color:#2f2f2f; background:#0f0f0f; }
.btn--primary:hover{ background:#121212; }
.btn--ghost{ border-color:var(--line); }
.btn--github{
  border-color:#333; background:#2b2b2b; color:#fff;
}
.btn--github:hover{
  background:var(--accent); border-color:var(--accent); color:#111;
}
.btn i{ font-size:1rem; }

.section-sep{ margin:1.25rem 0 1rem; border:0; border-top:1px solid var(--line); }




/* ========================================================================================================*/
/* ====== Cards grid (카드 모션 관리) ====== */
.cards{
  list-style:none; padding:0; margin:0;
  display:grid; gap:40px;
  grid-template-columns: repeat(2, minmax(400px, 1fr));
  justify-content: center; /* 전체 그리드 자체를 가운데로 */
  overflow: visible;                /* 확대 시 잘림 방지 */
}
  
/* 모바일에선 조금 줄이기 (선택) */
@media (max-width: 640px){
  .cards{
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 28px;
  }
}
/* 어두운 카드 위에 아주 옅은 실버 금속 결 */
.card{
  touch-action: pan-y;
  position: relative;
  overflow: hidden;
  border:1px solid var(--line); border-radius:16px; padding:18px 18px 16px;

  /* 🔵 베이스에 아주 옅은 블루 기운 추가 */
  background:
    linear-gradient(180deg, rgba(40,60,90,0.10), rgba(0,0,0,0) 60%),
    var(--card);

  /* 금속 결 라인(아주 얕게) */
  background-image:
    linear-gradient(180deg,
      rgba(255,255,255,0.06) 0%,
      rgba(255,255,255,0.00) 30%,
      rgba(255,255,255,0.05) 55%,
      rgba(255,255,255,0.00) 100%),
    repeating-linear-gradient(90deg,
      rgba(255,255,255,0.03) 0 2px,
      rgba(0,0,0,0.03) 2px 4px);
  background-blend-mode: soft-light, normal;

  box-shadow: 0 1px 0 rgba(0,0,0,.15);
  display:flex; flex-direction:column; gap:.75rem;

  isolation: isolate;
  backface-visibility: hidden;
  will-change: transform;
  transform: translateZ(0);
  transition: box-shadow .2s ease, background .2s ease;
}


/* 기존 :hover 의존 코드를 .is-hover 로도 동작하게 */
.card.is-hover { background: var(--card-raise); box-shadow: 0 14px 28px rgba(0,0,0,.38); z-index:10; }
.card.is-hover::after { opacity: 1; }                  /* 하이라이트 */
.card.is-hover .gloss-layer { opacity: .20; }          /* 글로스 */
.card.is-hover .foil-layer { opacity: .22; }           /* 포일(있다면) */

.card__shine,
.card__glare{
  position:absolute;
  inset:0;
  border-radius:inherit;
  pointer-events:none;
  z-index:1;
}
.card__glare{ z-index:2; }
  
/* 카드 안의 실제 콘텐츠는 맨 위 + 블렌드 무효화 */
.card > * {
  position: relative;
  z-index: 3;
  mix-blend-mode: normal;
}
/* .card:hover{
  background: var(--card-raise);
  box-shadow: 0 14px 28px rgba(0,0,0,.38);
  z-index: 10;
} */
@media (hover: hover) and (pointer: fine) {
  .card:hover {
    background: var(--card-raise);
    box-shadow: 0 14px 28px rgba(0,0,0,.38);
    z-index: 10;
  }
  .card:hover::after { opacity: 1; }
}
/* ::after = 마우스 따라다니는 스펙큘러 하이라이트 (상위 레이어) */
.card::after{
  content:"";
  position:absolute; inset:0; border-radius: inherit;
  pointer-events:none;
  z-index: 2;
  mix-blend-mode: screen;

  /* 🔵 완전한 순백 → 살짝 청백으로 조정 + 강도 하향 */
  background: radial-gradient(circle at var(--mx,50%) var(--my,50%),
              rgba(190,220,255,.32), rgba(255,255,255,0) 55%);
  opacity: 0;
  transform: translate3d(var(--tx,0), var(--ty,0), 0) scale(1.02);
  transition: opacity .15s ease, transform .15s ease;
}
@media (hover: hover) and (pointer: fine) {
  .card:hover::after{ opacity: .9; }   /* 데스크톱에서만 */
}
.card.is-hover::after{ opacity: .9; }  /* 터치/JS 경로 */


/* (옵션) 브라우저별 테셀레이션 아티팩트 완화 */
.card { outline: 1px solid rgba(0,0,0,0); }



/* ====== Card header ====== */
.card__head{ display:flex; flex-direction:column; gap:.45rem; }

.card__title {
  font-size: 1.6rem;
  font-weight: 800;       /* 더 두껍게 */
  color: #fff;            /* 기본 흰색 */
  text-shadow: 0 1px 2px rgba(0,0,0,0.6); /* 대비 강화 */
}

.card__title:hover {
  color: var(--accent);        /* 사이트 테마 하늘색 */
}


.badge{
  align-self:flex-start;
  font-size:.85rem; padding:.3rem .65rem; border-radius:.6rem;
  border:1px solid var(--accent); background:#1A1A1A; color:var(--accent);
  display:inline-flex; align-items:center; gap:.35rem;
}
.badge i{ font-size:.9rem; }

/* ====== Text blocks ====== */
.card__summary{ margin:.15rem 0 .2rem; color:var(--muted); font-size:.95rem; line-height:1.6; }
.meta{ margin:.2rem 0 0; }
.meta__row{ display:flex; gap:.6rem; margin:.18rem 0; }
.meta__row dt{ width:88px; color:var(--muted); font-weight:600; font-size:.85rem; }
.meta__row dd{ margin:0; color:var(--text); font-size:.9rem; }

/* ====== Details (collapsible) ====== */
.details summary{
  cursor:pointer; user-select:none; padding:.4rem .55rem; border-radius:.5rem;
  display:inline-flex; align-items:center; gap:.45rem;
  border:1px dashed var(--line); background:#1a1a1a; font-weight:600; color:var(--text);
}
.details[open] summary{ background:#202020; }
.details summary i{ transition: transform .2s ease; }
.details[open] summary i{ transform: rotate(90deg); }
.details__list{ margin:.45rem 0 0 .9rem; color:var(--text); }
.details__list li{ margin:.22rem 0; font-size:.95rem; line-height:1.55; }

/* ====== Card foot ====== */
.card__foot{ margin-top:.1rem; display:flex; gap:.5rem; flex-wrap:wrap; }
  
/* ====== Github Icons ====== */
.gh-link {
  margin-right: .4rem;
  color: var(--accent);
  font-size:1.1rem;
}
.gh-link:hover {
  opacity:.8;
}
  
/* ====== Links tint ====== */
a{ color:var(--accent); }
a:hover{ color:#82DFFF; }

/* ===========================
   HOLO 레이어 (포켓몬 카드 느낌)
   =========================== */

/* 메탈릭 블루 계열 포일 */
/* 파란 메탈 포일(컬러 존재감↑) */
.card .foil-layer {
  position:absolute; inset:0; border-radius:inherit; pointer-events:none; z-index:2;

  background:
    radial-gradient(120% 120% at 20% 10%, rgba(80,150,255,0.32), rgba(0,0,0,0) 55%),
    linear-gradient(135deg, rgba(160,190,255,0.24), rgba(200,220,255,0.12) 40%, rgba(120,160,230,0.30));
  background-size: 160% 160%, 180% 180%;
  background-position: center;

  /* 🔵 파란 틴트를 ‘빛으로 더하는’ 합성 */
  mix-blend-mode: color-dodge;           /* (대안) plus-lighter */
  filter: brightness(1.18) contrast(1.12) saturate(1.45);

  opacity: .30;                           /* 존재감 상향 */
  transform: scale(1.02);
  transition: opacity .2s ease, transform .2s ease, filter .2s ease;
}
.card.is-hover .foil-layer { opacity:.38; filter: brightness(1.22) contrast(1.12) saturate(1.55); }


/* (선택) 아주 옅은 무지개 결을 바닥에 한 겹 – 과하면 빼세요 */
.card .holo-layer{
  position:absolute; inset:0; z-index:1; pointer-events:none; border-radius:inherit;
  mix-blend-mode: screen;
  background:
    repeating-conic-gradient(from 0deg at 50% 50%,
      rgba(255,0,80,.035) 0 12deg,
      rgba(255,157,0,.035) 12deg 24deg,
      rgba(255,230,0,.035) 24deg 36deg,
      rgba(60,255,0,.035) 36deg 48deg,
      rgba(0,255,213,.035) 48deg 60deg,
      rgba(0,123,255,.035) 60deg 72deg,
      rgba(154,0,255,.035) 72deg 84deg),
    linear-gradient(135deg, rgba(255,255,255,.08), rgba(255,255,255,0) 40%);
  filter: saturate(1.05) brightness(1.02);
  opacity:.14;
  transform: rotate(8deg) scale(1.03);
}

/* 하이라이트(광원 반사점) */
  
.card .gloss-layer{
  position:absolute; inset:0; border-radius:inherit; z-index:2; pointer-events:none;
  mix-blend-mode: screen;
  background: radial-gradient(circle at var(--mx,50%) var(--my,50%),
              rgba(255,255,255,.10), rgba(255,255,255,0) 25%);
  opacity:.12;                          /* 기본도 아주 살짝 보이게 */
  transform: translate3d(var(--tx,0), var(--ty,0), 0) scale(1.02);
  transition: opacity .12s ease, transform .12s ease;
}
.card:hover .gloss-layer{ opacity:.20; }

  
/* ----------------------------------------- 글씨 ---------------------------------------- */

/* 빛 근처에서 더 어둡게 보이도록 섀도우 가중(—ink 0~1) */
.ink-reactive {
  color: #f5f5f5;
  /* 기본 가독성 섀도우 */
  text-shadow:
    0 1px 1px rgba(0,0,0,.30),
    0 0 1px rgba(0,0,0,.20);
  transition: color .15s ease, text-shadow .12s ease;
}

/* 하이라이트 근접도( --ink: 0~1 )에 따라 살짝 반짝임 */
.card[data-ink] .card__title,
.card[data-ink] .card__summary {
  /* 중앙에 가까울수록 은은한 광택/윤곽 강화 */
  text-shadow:
    0 1px 1px rgba(0,0,0, calc(.28 + .20*var(--ink,0))),
    0 0 4px rgba(255,255,255, calc(.05*var(--ink,0))),
    0 0 10px rgba(92,201,245,  calc(.12*var(--ink,0))); /* 테마 하늘색 살짝 */
}

/* details 영역 기본 색 고정(항상 또렷) */
.details summary,
.details__list li,
.meta dt, .meta dd, .card__summary {
  color: #f2f2f2;
}

/* summary hover 시 색상 변경 */
.card__summary {
  color: #f2f2f2;
  transition: color .2s ease;
}
.card__summary:hover {
  color: var(--accent);        /* 사이트 테마 하늘색 */
}

/* details 내부 리스트 항목 hover 시 */
.details__list li {
  transition: color .2s ease;
}
.details__list li:hover {
  color: #ff9d00;   /* ✅ 주황색 강조 (제목처럼) */
}

/* ============ SHINE LAYERS (모든 카드) ============ */

/* 아주 은은한 무지개 오로라 (포켓몬 카드 느낌, 과하지 않게) */
/* 은빛+무지개 결 (아주 옅게) */
/* 은빛 광택 (metal shine) */
.card .card__shine {
  position:absolute; inset:0; border-radius:inherit; pointer-events:none;
  z-index:1;
  mix-blend-mode: overlay;
  background: conic-gradient(
    from var(--shine-angle, 0deg) at var(--mx,50%) var(--my,50%),
    rgba(200,220,255,0.15) 0%,
    rgba(240,245,255,0.08) 40%,
    rgba(180,200,230,0.18) 80%,
    rgba(200,220,255,0.15) 100%
  );
  opacity:.15;
  filter: blur(10px) brightness(1.1);
  transition: opacity .18s ease, filter .18s ease;
}
.card.is-hover .card__shine {
  opacity:.22; 
  filter: blur(10px) brightness(1.2);
}

/* 반짝 스팟 하이라이트 */
.card .card__glare {
  position:absolute; inset:0; border-radius:inherit; pointer-events:none;
  z-index:2;
  mix-blend-mode: screen;
  background: radial-gradient(circle at var(--mx,50%) var(--my,50%),
              rgba(255,255,255,.28) 0%,
              rgba(200,220,255,.15) 20%,
              rgba(255,255,255,0) 50%);
  opacity:.18;
  transition: opacity .15s ease, transform .12s ease;
}
.card.is-hover .card__glare { opacity:.30; }

</style>

<!-- inline defs: 페이지에 1번만 -->
<svg width="0" height="0" style="position:absolute">
  <!-- 좌표계를 픽셀 기준으로 고정 -->
  <filter id="foilSpec"
          x="0" y="0" width="100%" height="100%"
          filterUnits="userSpaceOnUse"       <!-- ✅ 픽셀 좌표 -->
          primitiveUnits="userSpaceOnUse"    <!-- ✅ 픽셀 좌표 -->
          color-interpolation-filters="sRGB">
    <!-- 매끈한 비닐: 저주파/저옥타브 -->
    <feTurbulence type="turbulence"
                  baseFrequency="0.015 0.12"
                  numOctaves="1"
                  seed="3"
                  result="warp"/>
    <feGaussianBlur in="warp" stdDeviation="0.6" result="bump"/>
    <feSpecularLighting in="bump"
                        surfaceScale="3"
                        specularConstant="0.75"
                        specularExponent="24"
                        lighting-color="#ffffff"
                        result="spec">
      <!-- 이 x/y를 JS에서 카드 내부 픽셀로 업데이트 -->
      <fePointLight id="foilLight" x="0" y="0" z="160"/>
    </feSpecularLighting>
    <feComposite in="spec" in2="SourceAlpha" operator="over" result="final"/>
  </filter>
</svg>
