---
layout: default
permalink: /
permalink_name: /home
title: DukiChoi
---

<section class="hero">
  <div class="hero__text">
    <h1>Byungkeun Choi</h1>
    <p class="subtitle">Embedded · XR/VR · IMU/BLE · ML</p>
    <p class="intro">안녕하세요. 개발자 <strong>DukiChoi</strong>입니다. 임베디드 시스템, IoT, 바이오 신호처리 기반 연구와 프로젝트를 수행해 왔습니다.</p>
  </div>
</section>

<hr class="section-sep"/>

## 전공
- 연구분야: 임베디드 시스템 및 IoT 기반 바이오 신호처리

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
      {% if p.role %}
        <div class="meta__row">
          <dt><i class="fa-solid fa-user-gear"></i> 역할</dt>
          <dd>{{ p.role }}</dd>
        </div>
      {% endif %}
      {% if p.participants %}
        <div class="meta__row">
          <dt><i class="fa-solid fa-users"></i> 참여자</dt>
          <dd>{{ p.participants }}</dd>
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
        <a class="btn btn--ghost" href="{{ p.link }}" target="_blank" rel="noopener">
          <i class="fab fa-github"></i> GitHub
        </a>
      {% endif %}
    </footer>
  </li>
{% endfor %}
</ul>

<style>
/* ====== Hero ====== */
.hero { margin: 1.5rem 0 0.5rem; }
.hero__text h1 { font-size: 2rem; margin: 0; line-height: 1.2; }
.subtitle { margin: .25rem 0 .5rem; opacity:.8 }
.intro { margin: .5rem 0 1rem; }
.cta { display:flex; gap:.5rem; flex-wrap:wrap; }
.btn {
  display:inline-flex; align-items:center; gap:.5rem;
  padding:.5rem .8rem; border:1px solid #e3e3e3; border-radius:.6rem;
  text-decoration:none; font-size:.95rem; transition:all .2s ease;
}
.btn:hover { background:#f5f5f5; }
.btn--primary { border-color:#222; background:#111; color:#fff; }
.btn--primary:hover { background:#222; color:#fff; }
.btn--ghost { border-color:#ddd; color:inherit; }
.btn--github { border-color:#333; background:#333; color:#fff; }
.btn--github:hover { background:#000; }
.btn i { font-size:1rem; }
.section-sep { margin: 1.25rem 0 1rem; border:0; border-top:1px solid #eee; }

/* ====== Cards grid ====== */
.cards{
  list-style:none; padding:0; margin:0;
  display:grid; gap:14px;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
}
.card{
  border:1px solid #eee; border-radius:14px; padding:14px;
  background:#fff; box-shadow: 0 1px 0 rgba(0,0,0,.02);
  display:flex; flex-direction:column; gap:.6rem;
  transition:transform .15s ease, box-shadow .15s ease;
}
.card:hover{
  transform: translateY(-4px);
  box-shadow: 0 4px 12px rgba(0,0,0,.08);
}
.card__head{ display:flex; gap:.5rem; align-items:flex-start; justify-content:space-between; }
.card__title{ font-size:1.05rem; margin:0; }
.card__title a{ text-decoration:none; }
.card__title a:hover{ text-decoration:underline; }
.badge{
  font-size:.8rem; padding:.2rem .5rem; border-radius:.5rem; white-space:nowrap;
  border:1px solid transparent;
}
.badge--ghost{ border-color:#e6e6e6; background:#fafafa; color:#444; }
.card__summary{ margin:.2rem 0 .2rem; color:#444; }

/* ====== Meta rows ====== */
.meta{ margin:0; }
.meta__row{ display:flex; gap:.6rem; margin:.2rem 0; }
.meta__row dt{ width:88px; color:#666; font-weight:600; }
.meta__row dd{ margin:0; color:#333; }

/* ====== Details (collapsible) ====== */
.details summary{
  cursor:pointer; user-select:none; padding:.3rem .4rem; border-radius:.4rem;
  display:inline-flex; align-items:center; gap:.4rem;
  border:1px dashed #e0e0e0; background:#fcfcfc; font-weight:600;
}
.details[open] summary{ background:#f7f7f7; }
.details summary i { transition: transform .2s ease; }
.details[open] summary i { transform: rotate(90deg); }
.details__list{ margin:.4rem 0 0 .8rem; }
.details__list li{ margin:.2rem 0; }

/* ====== Card foot ====== */
.card__foot{ margin-top:.2rem; display:flex; gap:.5rem; flex-wrap:wrap; }
</style>

