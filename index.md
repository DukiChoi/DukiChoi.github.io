---
layout: home
permalink: /
permalink_name: /home
title: DukiChoi

detail_image: assets/강아지 부르르르.gif

---

# Byungkeun Choi
## 자기소개
  안녕하세요 개발자 DukiChoi입니다.
## Projects & Research

<ul class="cards">
{% for p in site.data.projects %}
  <li class="card">
    <h3>
      {% if p.link %}
      <a href="{{ p.link }}" target="_blank" rel="noopener">{{ p.name }}</a>
      {% else %}
      {{ p.name }}
      {% endif %}
    </h3>
    <p>{{ p.summary }}</p>
    <p class="meta">{{ p.stack }}</p>
  </li>
{% endfor %}
</ul>

## Links
- [GitHub 전체](https://github.com/DukiChoi)
- [Publications](/publications)
- [CV](/cv)
