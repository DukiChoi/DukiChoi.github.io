---
lang: en
translation_key: profile
layout: home
permalink: /en/profile/
permalink_name: /Profile
title: Profile
nav_title: Profile
description: Embedded systems, research experience, and projects by Byungkeun Choi.
section: profile
js_file: /assets/js/card-tilt.js
js_files:
  - /assets/js/hover-sparkles.js
  - /assets/js/experience.js
css_file: /assets/css/home.css
---
<header class="page-heading">
  <p class="page-eyebrow">About</p>
  <h1>DukiChoi</h1>
  <p class="page-description">I develop embedded and IoT systems for biomedical measurement and research.</p>
</header>
<p class="home-intro">My projects span IMU and BLE devices, XR/VR experiments, and machine learning for signal analysis.</p>

{% include metal-banner.html %}

<section class="home-skills" aria-labelledby="skills-title">
  <h2 id="skills-title">Languages and tools</h2>
  {% assign current_year = site.time | date: '%Y' | plus: 0 %}
  <p class="skills-reference">As of <span data-experience-year>{{ current_year }}</span></p>
  <dl class="skills-list">
    {% for skill in site.data.skills %}
    <div>
      <dt>{{ skill.name }}</dt>
      <dd>Intermediate · <span data-start-year="{{ skill.start_year }}">{{ current_year | minus: skill.start_year | at_least: 0 }}</span> years <span class="skills-since">(since {{ skill.start_year }})</span></dd>
    </div>
    {% endfor %}
  </dl>
</section>

<section class="home-projects" aria-labelledby="projects-title">
    <h2 id="projects-title">Projects and research</h2>
    <ul class="cards">
    {% assign foil_styles = 'amazing-rare,holo,cosmos,radiant' | split: ',' %}
    {% for p in site.data.projects_en %}
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
                <dt><i class="fa-solid fa-users"></i> Contributors</dt>
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
                <dt><i class="fa-solid fa-user-gear"></i> Role</dt>
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
              <summary><i class="fa-solid fa-list-check"></i> Details</summary>
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
  <h2 id="documents-title">Career documents</h2>
  <p>See my <a href="{{ '/en/cv' | relative_url }}">CV</a> for academic and research experience, or my <a href="{{ '/en/resume' | relative_url }}">Résumé</a> for development experience and projects.</p>
</section>
