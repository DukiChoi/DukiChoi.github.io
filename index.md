---
layout: default
permalink: /
permalink_name: /home
title: DukiChoi

---

<section class="hero">
  <div class="hero__text">
    <h1>Byungkeun Choi</h1>
    <p class="intro">안녕하세요. 개발자 <strong>DukiChoi</strong>입니다. 임베디드 시스템, IoT, 바이오 신호처리 기반 연구(Embedded · XR/VR · IMU/BLE · ML)와 다양한 임베디드 프로젝트를 수행해 왔습니다.</p>
  </div>
  <!-- <div class="hero__research badge"> -->
    <!-- <i class="fa-solid fa-microscope"></i> -->
    
  <!-- /div -->
</section>

<hr class="section-sep"/>

## 연구분야
- 임베디드 시스템 및 IoT 기반 바이오 신호처리

## 컴퓨터 활용능력
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

## Projects & Research

<ul class="cards">
{% for p in site.data.projects %}
  <li class="card">
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
          <dd>{{ p.participants }}</dd>
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



<style>
/* ====== Base (다크 그레이 톤) ====== */
:root{
  --bg:#161616;         /* 페이지 배경 */
  --card:#202020;       /* 카드 배경 */
  --card-raise:#262626; /* hover 시 */
  --text:#E8E8E8;       /* 기본 텍스트 */
  --muted:#B9B9B9;      /* 보조 텍스트 */
  --line:#2A2A2A;       /* 구분선/테두리 */
  --accent:#9AE66E;     /* 포인트(선명한 연두) */
}
/* body{ background:var(--bg); color:var(--text); } */

/* ====== Hero ====== */
.hero{ margin: 1.25rem 0 .25rem; }
.hero__text h1{ font-size:2.15rem; margin:0 0 .25rem; line-height:1.15; }
.subtitle{ margin:.15rem 0 .35rem; color:var(--muted); }
.intro{ margin:.35rem 0 .8rem; color:var(--text); }
.cta{ display:flex; gap:.5rem; flex-wrap:wrap; }

.btn{
  display:inline-flex; align-items:center; gap:.5rem;
  padding:.5rem .85rem; border:1px solid var(--line); border-radius:.6rem;
  text-decoration:none; font-size:.95rem; transition:all .2s ease;
  color:var(--text); background:transparent;
}
.btn:hover{ background:#1d1d1d; }
.btn--primary{ border-color:#2f2f2f; background:#0f0f0f; }
.btn--primary:hover{ background:#121212; }
.btn--ghost{ border-color:var(--line); }
.btn--github{ border-color:#2b2b2b; background:#2b2b2b; }
.btn--github:hover{ background:#1a1a1a; }
.btn i{ font-size:1rem; }

.section-sep{ margin:1rem 0 .8rem; border:0; border-top:1px solid var(--line); }

/* ====== Cards grid ====== */
.cards{
  list-style:none; padding:0; margin:0;
  display:grid; gap:16px;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
}
.card{
  border:1px solid var(--line); border-radius:16px; padding:16px 16px 14px;
  background:var(--card); box-shadow: 0 1px 0 rgba(0,0,0,.12);
  display:flex; flex-direction:column; gap:.7rem;
  transition:transform .15s ease, box-shadow .15s ease, background .15s ease;
}
.card:hover{
  transform: translateY(-3px);
  background:var(--card-raise);
  box-shadow: 0 10px 24px rgba(0,0,0,.25);
}

/* ====== Card header ====== */
.card__head{ display:flex; flex-direction:column; gap:.45rem; }
.card__title{ font-size:1.2rem; line-height:1.25; margin:0; letter-spacing:.1px; }
.card__title a{ color:var(--text); text-decoration:none; }
.card__title a:hover{ text-decoration:underline; text-underline-offset:3px; }

.badge{
  align-self:flex-start;
  font-size:.82rem; padding:.28rem .6rem; border-radius:.6rem;
  border:1px solid var(--line); background:#1A1A1A; color:var(--muted);
  display:inline-flex; align-items:center; gap:.35rem;
}
.badge i{ font-size:.9rem; }

/* ====== Text blocks ====== */
.card__summary{ margin:.1rem 0 .15rem; color:var(--muted); font-size:.95rem; line-height:1.55; }
.meta{ margin:.2rem 0 0; }
.meta__row{ display:flex; gap:.6rem; margin:.18rem 0; }
.meta__row dt{ width:84px; color:var(--muted); font-weight:600; font-size:.9rem; }
.meta__row dd{ margin:0; color:var(--text); font-size:.95rem; }

/* ====== Details (collapsible) ====== */
.details summary{
  cursor:pointer; user-select:none; padding:.35rem .5rem; border-radius:.5rem;
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

/* ====== Links tint ====== */
a{ color:var(--accent); }
a:hover{ opacity:.9; }
</style>
