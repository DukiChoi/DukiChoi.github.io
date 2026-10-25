---
layout: home
permalink: /
permalink_name: /Home
title: Home
section: home
js_file: /assets/js/card-tilt.js
js_files:
  - /assets/js/hover-sparkles.js
  - /assets/js/experience.js
css_file: /assets/css/home.css
---
<header class="page-heading">
  <p class="page-eyebrow">소개</p>
  <h1>DukiChoi</h1>
  <p class="page-description">생체 계측 연구 관련 임베디드 시스템과 IoT 시스템을 연구 개발하였습니다.</p>
</header>
<p class="home-intro">IMU 센서와 BLE를 활용한 기기 개발부터 XR/VR 실험, 머신러닝을 이용한 신호 분석까지 다양한 프로젝트에 참여했습니다.</p>

{% include metal-banner.html %}

<section class="home-skills" aria-labelledby="skills-title">
  <h2 id="skills-title">사용 언어와 도구</h2>
  {% assign current_year = site.time | date: '%Y' | plus: 0 %}
  <p class="skills-reference"><span data-experience-year>{{ current_year }}</span>년 기준</p>
  <dl class="skills-list">
    {% for skill in site.data.skills %}
    <div>
      <dt>{{ skill.name }}</dt>
      <dd>{{ skill.level }} · 사용 기간 <span data-start-year="{{ skill.start_year }}">{{ current_year | minus: skill.start_year | at_least: 0 }}</span>년 <span class="skills-since">({{ skill.start_year }}년부터)</span></dd>
    </div>
    {% endfor %}
  </dl>
</section>

<section class="home-projects" aria-labelledby="projects-title">
    <h2 id="projects-title">프로젝트와 연구</h2>
    <ul class="cards">
    {% assign foil_styles = 'amazing-rare,holo,cosmos,radiant' | split: ',' %}
    {% for p in site.data.projects %}
      {% assign foil_row = forloop.index0 | divided_by: 2 | modulo: 4 %}
      <li class="card-slot">
        <article class="card card--holo" data-foil="{{ foil_styles[foil_row] }}">
          <span class="card__metal" aria-hidden="true"></span>
          <span class="foil-layer" aria-hidden="true"></span>
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
        </article>
      </li>
    {% endfor %}
    </ul>
</section>
