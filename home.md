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
.card{
  position: relative;
  overflow: hidden;
  border:1px solid var(--line); border-radius:16px; padding:18px 18px 16px;
  background: var(--card); /* 어두운 배경 유지: screen 블렌드가 살아남 */
  box-shadow: 0 1px 0 rgba(0,0,0,.15);
  display:flex; flex-direction:column; gap:.75rem;

  isolation: isolate;             /* ✅ 블렌딩 누수 방지 (중요) */
  backface-visibility: hidden;
  will-change: transform;
  transform: translateZ(0);
  transition: box-shadow .2s ease, background .2s ease;
}

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
.card:hover{
  background: var(--card-raise);
  box-shadow: 0 14px 28px rgba(0,0,0,.38);
  z-index: 10;
}

/* ::after = 마우스 따라다니는 스펙큘러 하이라이트 (상위 레이어) */
.card::after{
  content:"";
  position:absolute; inset:0; border-radius: inherit;
  pointer-events:none;
  z-index: 2;
  mix-blend-mode: screen;
  background: radial-gradient(circle at var(--mx,50%) var(--my,50%),
              rgba(255,255,255,.40), rgba(255,255,255,0) 55%);
  opacity: 0;                                       /* 기본은 숨김 */
  transform: translate3d(var(--tx,0), var(--ty,0), 0) scale(1.02);
  transition: opacity .15s ease, transform .15s ease;
}
.card:hover::after{ opacity: 1; }

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

/* 비닐 + 무지개 반사 레이어 */
.card .foil-layer {
  position:absolute;
  inset:0;
  border-radius:inherit;
  pointer-events:none;
  z-index:2;

  /* 대각선으로 무지개 흐르게 */
  background:
    linear-gradient(120deg,
      rgba(255,0,64,0.25) 0%,
      rgba(255,160,0,0.25) 15%,
      rgba(255,235,0,0.25) 30%,
      rgba(0,255,128,0.25) 50%,
      rgba(0,200,255,0.25) 70%,
      rgba(160,0,255,0.25) 85%,
      rgba(255,0,64,0.25) 100%);

  background-size: 200% 200%;
  background-position: center;

  /* blend 전략 수정 */
  mix-blend-mode: color-dodge;  /* screen → color-dodge (회색 제거) */
  filter: brightness(1.1) contrast(1.2) saturate(1.4);

  opacity: .15;
  transform: rotate(0deg) scale(1.02);
  transition: opacity .2s ease, transform .2s ease;
}
.card:hover .foil-layer {
  opacity:.28;
}

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

/* ==== STRONG HOLO: SHINE ==== */
.card .card__shine{
  --scanlines-space: 1px;
  --scanlines-light: #777;
  --scanlines-dark: #000;
  --bars: 2.5%;
  --bar-color: hsla(0,0%,85%,1);
  --bar-bg: hsla(0,0%,0%,0.2);

  /* clip-path 필요하면 inset(0 round 16px) 등으로 대체 */
  /* clip-path: inset(0 round 16px); */

  background-image:
    repeating-linear-gradient(110deg,
      var(--violet), var(--blue), var(--green), var(--yellow), var(--red),
      var(--violet), var(--blue), var(--green), var(--yellow), var(--red),
      var(--violet), var(--blue), var(--green), var(--yellow), var(--red)
    ),
    repeating-linear-gradient(90deg,
      var(--scanlines-dark) 0 calc(var(--scanlines-space)*2),
      var(--scanlines-light) calc(var(--scanlines-space)*2) calc(var(--scanlines-space)*4)
    );

  background-position:
    calc(((50% - var(--background-x,50%)) * 3.6) + 50%)
    calc(((50% - var(--background-y,50%)) * 4.8) + 50%),
    center center;

  /* 스펙트럼을 더 과하게 */
  background-size: 600% 600%, cover;

  /* 회색 끼 제거: screen이 overlay보다 훨씬 투명/선명 */
  background-blend-mode: screen;

  /* 채도/대비 상향 */
  filter: brightness(1.15) contrast(1.25) saturate(1.6);

  /* 더 강렬한 컬러 홀로그램 */
  mix-blend-mode: color-dodge;
  opacity: .22; /* 강도 스위치: 0.16~0.30 사이로 조절 */
}

.card .card__shine:before{
  content:"";
  position:absolute; inset:0; border-radius:inherit; pointer-events:none;

  background-image:
    repeating-linear-gradient(90deg,
      var(--bar-bg) calc(var(--bars)*1.8),
      var(--bar-color) calc(var(--bars)*2.8),
      transparent calc(var(--bars)*3.2),
      var(--bar-color) calc(var(--bars)*3.8),
      transparent calc(var(--bars)*5),
      transparent calc(var(--bars)*12)
    ),
    repeating-linear-gradient(90deg,
      transparent calc(var(--bars)*1.8),
      var(--bar-color) calc(var(--bars)*2.6),
      transparent calc(var(--bars)*3.2),
      var(--bar-color) calc(var(--bars)*3.8),
      transparent calc(var(--bars)*5),
      transparent calc(var(--bars)*9)
    );

  background-position:
    calc((((50% - var(--background-x,50%)) * 2.2) + 50%) + ((var(--background-y,50%) - 50%) * .6)) var(--background-x,50%),
    calc((((50% - var(--background-x,50%)) * -1.2) + 50%) - ((var(--background-y,50%) - 50%) * .9)) var(--background-y,50%);

  background-size: 250% 250%, 250% 250%;
  background-blend-mode: screen;
  filter: brightness(1.2) contrast(1.15) saturate(1.4);
  mix-blend-mode: screen;   /* hard-light → screen 으로 투명감 업 */
  opacity:.22;              /* 0.16~0.28 범위에서 취향 조정 */
}

.card .card__shine:after{
  content:"";
  position:absolute; inset:0; border-radius:inherit; pointer-events:none;

  /* 검은 비네팅을 거의 제거 → 잿빛/불투명 느낌 감소 */
  background-image: radial-gradient(
    farthest-corner circle at var(--pointer-x,50%) var(--pointer-y,50%),
    rgba(255,255,255,.85) 0%,
    rgba(255,255,255,.15) 28%,
    rgba(255,255,255,0) 65%
  );
  background-position:center center;
  background-size:cover;

  /* luminosity → color-dodge 로 컬러 살리고 투명하게 */
  mix-blend-mode: color-dodge;
  filter: brightness(1) contrast(1.1) saturate(1.2);
  opacity:.28; /* 0.18~0.35 */
}

@media (max-width: 900px){
  .card .card__shine{ --scanlines-space:.5px; opacity:.18; }
}


/* ============ GLARE LAYERS (모든 카드) ============ */

/* ==== STRONG HOLO: GLARE (더 투명/깨끗) ==== */
.card .card__glare{
  opacity:.42;                /* 0.3~0.55: 전체 광택 양 */
  filter: brightness(1) contrast(1.1);
  mix-blend-mode: screen;     /* overlay → screen: 회색 끼 제거 */
}

.card .card__glare:after{
  content:"";
  position:absolute; inset:0; border-radius:inherit; pointer-events:none;

  /* 중심은 밝게, 바깥은 투명하게 → 뿌연 막 제거 */
  background-image: radial-gradient(
    circle at var(--pointer-x,50%) var(--pointer-y,50%),
    rgba(255,255,255,.55) 0%,
    rgba(255,255,255,.18) 24%,
    rgba(255,255,255,0) 60%
  );

  mix-blend-mode: screen;     /* overlay → screen */
  filter: brightness(1.05) contrast(1.1);
  opacity:.9;                 /* 0.6~1.0: 스팟 강도 */
}
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
