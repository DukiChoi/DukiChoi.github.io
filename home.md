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
        <header class="card__head">
          <h3 class="card__title">
            {% if p.link %}
              <a href="{{ p.link }}" target="_blank" rel="noopener">{{ p.name }}</a>
            {% else %}
              {{ p.name }}
            {% endif %}
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
  display:grid; gap:28px;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  overflow: visible;                /* 확대 시 잘림 방지 */
}
/* 모바일에선 조금 줄이기 (선택) */
@media (max-width: 640px){
  .cards{ gap: 20px; }
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
/* 카드 안의 실제 콘텐츠는 맨 위 */
.card > * { position: relative; z-index: 3; }

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
.card__title{
  font-size:1.3rem; font-weight:700; margin:0; line-height:1.3;
}
.card__title a{ color:#fff; text-decoration:none; }
.card__title a:hover{ text-decoration:underline; text-underline-offset:3px; }

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

.card{ position:relative; overflow:hidden; isolation:isolate; }
.card > *{ position:relative; z-index:3; }

/* 무지개 */
.card .holo-layer{
  position:absolute; inset:0; border-radius:inherit; z-index:1; pointer-events:none;
  mix-blend-mode:screen;
  background:
    conic-gradient(from 0deg at 50% 50%,
      #ff0040,#ff9d00,#ffe600,#3cff00,#00ffd5,#007bff,#9a00ff,#ff0040),
    linear-gradient(135deg, rgba(255,255,255,.25), rgba(255,255,255,0) 60%);
  background-size:200% 200%, 150% 150%;
  filter:saturate(1.35) brightness(1.06);
  opacity:.42;
  transform:rotate(5deg) scale(1.04);
  animation:holo-shift 12s linear infinite;
}

/* 하이라이트 */
.card .gloss-layer{
  position:absolute; inset:0; border-radius:inherit; z-index:2; pointer-events:none;
  mix-blend-mode:screen;
  background:radial-gradient(circle at var(--mx,50%) var(--my,50%),
             rgba(255,255,255,.45), rgba(255,255,255,0) 55%);
  opacity:.2;
  transform:translateZ(0) scale(1.02);
  transition:opacity .15s ease, transform .15s ease;
}
.card:hover .gloss-layer{ opacity:.36; }

@keyframes holo-shift{
  0%{ background-position:0% 0%, 0% 0%; }
  100%{ background-position:200% 200%, 120% 120%; }
}

  
</style>

