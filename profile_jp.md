---
lang: ja
translation_key: profile
layout: home
permalink: /ja/profile/
permalink_name: /Profile
title: Profile
nav_title: Profile
description: Byungkeun Choiの組み込み開発、研究経験、プロジェクトを紹介します。
section: profile
js_file: /assets/js/card-tilt.js
js_files:
  - /assets/js/hover-sparkles.js
  - /assets/js/experience.js
css_file: /assets/css/home.css
---
<header class="page-heading">
  <p class="page-eyebrow">プロフィール</p>
  <h1>DukiChoi</h1>
  <p class="page-description">生体計測と研究のための組み込みシステム・IoTシステムを開発しています。</p>
</header>
<p class="home-intro">IMU・BLEデバイス、XR/VR実験、機械学習による信号解析などに取り組んでいます。</p>

{% include metal-banner.html %}

<section class="home-skills" aria-labelledby="skills-title">
  <h2 id="skills-title">言語とツール</h2>
  {% assign current_year = site.time | date: '%Y' | plus: 0 %}
  <p class="skills-reference">基準年：<span data-experience-year>{{ current_year }}</span></p>
  <dl class="skills-list">
    {% for skill in site.data.skills %}
    <div>
      <dt>{{ skill.name }}</dt>
      <dd>中級・ <span data-start-year="{{ skill.start_year }}">{{ current_year | minus: skill.start_year | at_least: 0 }}</span>年 <span class="skills-since">（{{ skill.start_year }}年から）</span></dd>
    </div>
    {% endfor %}
  </dl>
</section>

<section class="home-projects" aria-labelledby="projects-title">
    <h2 id="projects-title">プロジェクトと研究</h2>
    <ul class="cards">
    {% assign foil_styles = 'amazing-rare,holo,cosmos,radiant' | split: ',' %}
    {% for p in site.data.projects_jp %}
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
                <dt><i class="fa-solid fa-users"></i> 参加者</dt>
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
                <dt><i class="fa-solid fa-user-gear"></i> 担当</dt>
                <dd>{{ p.role }}</dd>
              </div>
            {% endif %}
            {% if p.stack %}
              <div class="meta__row">
                <dt><i class="fa-solid fa-microchip"></i> 技術</dt>
                <dd>{{ p.stack }}</dd>
              </div>
            {% endif %}
          </dl>

          {% if p.details %}
            <details class="details">
              <summary><i class="fa-solid fa-list-check"></i> 詳細</summary>
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

<section class="home-documents" aria-labelledby="documents-title">
  <h2 id="documents-title">経歴資料</h2>
  <p>学歴・研究歴は<a href="{{ '/ja/cv' | relative_url }}">CV</a>、開発経験とプロジェクトは<a href="{{ '/ja/resume' | relative_url }}">レジュメ</a>をご覧ください。</p>
</section>
