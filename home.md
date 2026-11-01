---
layout: home
permalink: /
permalink_name: /Home
title: Home
nav_title: Home
section: home
description: 직접 조작하는 시뮬레이터로 자료구조, 운영체제, 컴퓨터 구조와 전자공학의 동작 원리를 공부합니다.
css_file: /assets/css/learning-home.css
---
<header class="page-heading">
  <p class="page-eyebrow">컴퓨터 · 전자공학 학습 도구</p>
  <h1>직접 조작하며 배우는 동작 원리</h1>
  <p class="page-description">입력을 바꾸고 실행 과정을 따라가며, 교과서 속 개념이 어떤 결과를 만드는지 확인하세요.</p>
</header>
<p>자료구조부터 운영체제, 데이터베이스, 디지털 논리와 임베디드 통신까지. Tech Study는 설명과 시뮬레이터를 함께 보며 공부하는 공간입니다.</p>
<p><a class="learning-home-link" href="{{ '/theory/' | relative_url }}">전체 학습 자료 보기 →</a></p>

<section class="learning-section" aria-labelledby="featured-title">
  <h2 id="featured-title">여기서 시작해 보세요</h2>
  <div class="learning-grid">
    <article class="learning-card">
      <p class="learning-label">자료구조</p>
      <h3><a href="{{ '/theory/sorting/' | relative_url }}">같은 배열, 다른 정렬 과정</a></h3>
      <p>일곱 가지 정렬 알고리즘이 같은 배열을 정렬하는 과정을 비교합니다. 입력 배열을 바꿔 어떤 조건에서 차이가 커지는지 살펴보세요.</p>
      <a href="{{ '/theory/sorting/' | relative_url }}">정렬 비교 실험하기 →</a>
    </article>
    <article class="learning-card">
      <p class="learning-label">컴퓨터 구조</p>
      <h3><a href="{{ '/theory/cache/' | relative_url }}">메모리 주소는 캐시 어디에 들어갈까?</a></h3>
      <p>주소가 태그·인덱스·오프셋으로 나뉘는 과정을 확인합니다. 직접 사상, 집합 연관, 완전 연관 방식의 배치 차이를 비교해 보세요.</p>
      <a href="{{ '/theory/cache/' | relative_url }}">캐시 매핑 실험하기 →</a>
    </article>
    <article class="learning-card">
      <p class="learning-label">데이터베이스</p>
      <h3><a href="{{ '/theory/transaction-isolation/' | relative_url }}">동시에 실행하면 어떤 값을 읽을까?</a></h3>
      <p>두 트랜잭션을 단계별로 실행하고 격리 수준을 바꿔 보세요. Dirty Read, Non-repeatable Read, Phantom Read의 차이를 확인할 수 있습니다.</p>
      <a href="{{ '/theory/transaction-isolation/' | relative_url }}">트랜잭션 실험하기 →</a>
    </article>
  </div>
</section>

<section class="learning-section" aria-labelledby="subjects-title">
  <h2 id="subjects-title">분야별로 공부하기</h2>
  <div class="learning-grid learning-grid--subjects">
    {% assign subjects = site.pages | where: "folder_overview", true | where_exp: "entry", "entry.published != false" | sort: "title" %}
    {% for subject in subjects %}
    <article class="learning-card">
      <h3><a href="{{ subject.url | relative_url }}">{{ subject.title | escape }}</a></h3>
      <p>{{ subject.description | escape }}</p>
    </article>
    {% endfor %}
  </div>
</section>

<section class="learning-section" aria-labelledby="guide-title">
  <h2 id="guide-title">시뮬레이터로 공부하는 방법</h2>
  <ol class="learning-steps">
    <li>설명을 읽고, 실행하기 전에 결과를 먼저 예상해 보세요.</li>
    <li>단계별로 실행하며 상태와 결과가 어떻게 바뀌는지 관찰하세요.</li>
    <li>조건을 하나씩 바꿔 같은 실험을 반복하고 차이가 생기는 이유를 정리하세요.</li>
  </ol>
  <p>각 도구는 개념을 이해하기 위한 모델입니다. 실제 하드웨어와 소프트웨어의 동작은 구현과 설정에 따라 달라질 수 있으므로, 페이지에 설명된 조건과 한계를 함께 확인하세요.</p>
</section>
<section class="learning-section" aria-labelledby="author-title">
  <h2 id="author-title">만든 사람과 개발 프로젝트</h2>
  <p>임베디드 시스템과 IoT 개발·연구 경험은 <a href="{{ '/profile/' | relative_url }}">Profile</a>에서, 배포한 프로그램과 사용 안내는 <a href="{{ '/programs/' | relative_url }}">개발자의 삶</a>에서 확인할 수 있습니다.</p>
</section>
