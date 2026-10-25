<img src="assets/theme_logo.svg" class="detail_header">

# jekyll-shell-theme

## 변경 내역

### 2026-10-22 (한국 시간)

- **공통 화면:** 이론 자료를 기준으로 페이지 서식을 통일하고 Pretendard 글꼴을 적용했습니다. 왼쪽 위 해·초승달 스위치로 라이트/다크 모드를 전환하며, 선택한 모드를 브라우저에 저장합니다. 공통 상단 메뉴는 두 모드 모두 파란 배경을 사용합니다.
- **홈 카드:** 줄마다 Amazing Rare → Holofoil Rare → Cosmos → Radiant 효과를 적용했습니다. 첫 줄의 반짝이는 입자, 세로 반사광, 원형 무늬, 다이아몬드 질감을 구분하고 기존 회전 방향과 최대 20도 기울기를 유지했습니다. 라이트 모드는 회색 배경과 짙은 파란 카드, 선명한 홀로그램 색으로 대비를 높였습니다.
- **사용 경력:** 언어·도구별 시작 연도를 `_data/skills.yml`로 분리했습니다. 현재 연도에 맞춰 사용 기간을 자동 계산하고 시작 연도와 기준 연도를 함께 표시합니다.
- **이론 자료:** 전가산기·2비트 가산기·링 발진기·메모리 강의와 시뮬레이션을 추가했습니다. 전체 자료 → 디지털 회로 → 글 순서의 트리를 접고 펼칠 수 있으며, 다른 글을 열어도 메뉴와 브라우저 탭 이름은 이론 자료로 유지됩니다. 본문 표현과 자동 재생 버튼 문구도 정리했습니다.
- **프로그램 목록:** `/programs/` 목록과 개별 소개 페이지 구조를 추가하고 홈 배너에 테두리를 적용했습니다. 예시 프로그램 대신 실제 Market Peek 소개 페이지를 등록했습니다.
- **프로그램 배너:** 홈의 Program 배너를 움직임 없는 은색 금속 질감으로 바꿨습니다. 프로그램별 배너에는 서로 다른 색과 반사 무늬를 가진 홀로그램 10종을 마련하고 마우스·터치 기울기를 적용했습니다. `/admin/program-styles/`에서 전부 미리 보고 CMS 또는 `banner_style`로 선택할 수 있습니다.
- **모바일 카드 반응:** 마우스 입력만 받던 조건을 수정했습니다. 홈 카드와 프로그램별 배너를 손가락으로 누르고 좌우로 움직이면 기울기와 반사광이 따라옵니다. 손을 떼면 원위치로 돌아오며, 세로 스크롤·확대 제스처·링크 터치는 그대로 사용할 수 있습니다. 기기의 동작 줄이기 설정도 따릅니다.
- **큐브 앱과 무작위 배너:** BLE Smart Cube를 프로그램 목록에 추가하고 기존 [공개 소개·다운로드 페이지](https://github.com/DukiChoi/BLESmartCube)로 바로 연결했습니다. Market Peek와 큐브 배너는 목록을 열 때마다 서로 다른 스타일을 무작위로 받습니다. 같은 탭에서는 직전 스타일을 피하고, 보고 있는 동안에는 배정을 유지합니다.
- **Market Peek 소개:** `https://duki-programming.github.io/market-peek/`의 독립 사이트에서 한국어·영어 소개와 다운로드를 제공합니다. 기존 `/programs/market-peek/` 주소는 새 사이트로 자동 이동합니다.
- **버전별 다운로드:** 공개 배포 전용 저장소 [Market-Peek-releases](https://github.com/DukiChoi/Market-Peek-releases)에 [v1.0.0](https://github.com/DukiChoi/Market-Peek-releases/releases/tag/v1.0.0)을 게시했습니다. EXE·7z·SHA256SUMS.txt를 첨부하고 소개 페이지에 현재 버전과 전체 버전 목록을 연결했습니다. 프로그램 소스 저장소는 비공개로 유지했습니다.
- **본인용 글쓰기:** `/admin/` 진입 화면과 Pages CMS 설정을 추가했습니다. GitHub 인증을 통해 이론 자료·프로그램 소개·이미지를 관리하도록 구성했으며, 최초 GitHub App 연결은 계정 소유자가 진행해야 합니다. 공개 저장소에서는 게시를 끈 글도 파일 자체는 공개된다는 점을 안내했습니다.
- **페이지 정리:** Readme·Preview·Hello 페이지를 비활성화하고 CV·Resume은 저장소의 PDF를 표시하도록 바꿨습니다. 일반 페이지의 문장도 자연스럽게 다듬었습니다.
- **미리보기와 검증:** Jekyll 실행용 Gemfile과 VS Code 미리보기 안내를 추가했습니다. Jekyll 빌드, 모바일 화면, 테마 전환, 카드 반응, 자료 트리, CMS 저장 형식을 확인했습니다. 공개 다운로드의 익명 접근과 파일 해시 일치, GitHub Pages 배포도 확인했습니다.

초기 기능 변경 커밋: [`94e4d90`](https://github.com/DukiChoi/DukiChoi.github.io/commit/94e4d903b849d92e8a9392b897e0354b7908c4ad)

## 원본 테마 소개

**Jekyll Shell Theme** is a light-weight customizable one-column jekyll theme that gives off:

- Hackery Vibes
- Shell Nostalgia
- Code, code and more code

See an example of this theme in action on the [theme's official site](https://tareqdandachi.github.io/jekyll-shell-theme).

## Installation

### Gem-based method

Add this line to your Jekyll site's `Gemfile`:

```ruby
gem "jekyll-shell-theme"
```

And add this line to your Jekyll site's `_config.yml`:

```yaml
theme: jekyll-shell-theme
```

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install jekyll-shell-theme

### Remote theme method

Make sure your `Gemfile` contains the `github-pages` gem and **not** the `jekyll-shell-theme` gem.

Then add `remote_theme: "tareqdandachi/jekyll-shell-theme"` to your `_config.yml` file.
*Remove* any other `theme:` or `remote_theme:` entry.

*For an example of what a config file could look like, look at [example-config.yml](https://github.com/tareqdandachi/jekyll-shell-theme/blob/master/example-config.yml)*

## Usage

TODO: Write usage instructions here. Describe your available layouts, includes, sass and/or assets.

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/tareqdandachi/jekyll-shell-theme. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## Development

Everyone is welcome to fork this repo and modify the code. To set up your environment to develop this theme, run `bundle install`.

To test the theme, run `bundle exec jekyll serve` and open your browser at `http://localhost:4000`. This starts a Jekyll server using the theme. Add pages, documents, data, etc. like normal to test the theme's contents. As you make modifications to your theme and to your content, your site will regenerate and you should see the changes in the browser after a refresh, just like normal.

### VS Code에서 미리보기

프로젝트 폴더의 터미널에서 실행합니다. Ruby와 Bundler가 필요합니다.

```sh
bundle config set --local path .bundle/gems
bundle install
bundle exec jekyll serve --host 127.0.0.1 --port 4000 --livereload
```

Ubuntu/WSL에서 명령 이름이 `bundle3.2`인 경우 위 명령의 `bundle`을 `bundle3.2`로 바꿉니다.
VS Code에서 `Ctrl+Shift+P` → `Simple Browser: Show`를 실행하고 `http://localhost:4000`을 입력합니다.
`md`, `_data/*.yml`, CSS, JavaScript 변경은 자동으로 다시 빌드됩니다. `_config.yml` 변경 시에는 서버를 재시작합니다.

Home 카드의 스타일은 `assets/css/home.css`, 마우스·터치 반응은 `assets/js/card-tilt.js`, 프로젝트 내용은 `_data/projects.yml`에서 수정합니다.
카드 줄마다 Amazing Rare → Holofoil Rare → Cosmos → Radiant 효과가 순서대로 반복됩니다. 첫 줄은 항상 Amazing Rare이며, 한 열로 바뀌는 모바일에서도 줄 단위로 순환합니다.
Holofoil Rare는 세로 반사광이 움직이는 효과이며, 각 효과의 빛에는 선명한 청록·보라·분홍 계열을 사용합니다. 라이트 모드 홈은 회색 배경과 짙은 사파이어 블루 카드, 밝은 글씨로 구분합니다. 다크 모드는 기존의 어두운 남색 바탕을 유지합니다.
반사 질감은 [Pokémon Cards CSS Holographic Effect](https://poke-holo.simey.me/)를 시각적으로 참고해 만든 CSS와 로컬 SVG(`assets/textures/`)로 표현합니다.
모바일에서는 카드를 누른 채 좌우로 움직이면 반응합니다. 위아래로 밀면 페이지가 스크롤되며, 손을 떼면 카드가 원위치로 돌아옵니다. 운영체제에서 동작 줄이기를 켜면 기울기 효과를 끕니다.

사용 언어와 도구는 `_data/skills.yml`의 `name`, `level`, `start_year`에서 관리합니다.
사용 기간은 현재 연도에서 시작 연도를 빼서 계산하고 기준 연도를 함께 표시합니다. 2026년 기준 시작 연도는 각각 2021년, 2019년, 2024년으로, 사용 기간은 5년, 7년, 2년입니다.
`assets/js/experience.js`가 방문 시와 탭 복귀 시에도 갱신하므로 해가 바뀌어도 사이트를 다시 빌드할 필요가 없습니다.

### 웹에서 글 작성하기

웹에서 글을 작성하려면 사이트 하단의 **글쓰기** 또는 `/admin/`을 엽니다. [Pages CMS](https://app.pagescms.org/DukiChoi/DukiChoi.github.io/master)에서 GitHub 계정으로 로그인합니다.
처음에는 GitHub App 연결 화면에서 **Only select repositories → DukiChoi.github.io**만 선택하고, `master` 브랜치를 엽니다.
**이론 자료 글**은 `_theory/`, **프로그램 소개**는 `_programs/`, 업로드한 이미지는 `assets/uploads/`에 저장됩니다.
제목·분류·본문·사진을 편집하고 저장하면 GitHub Pages가 다시 배포합니다. CMS의 필드와 미디어 설정은 `.pages.yml`에서 관리합니다.
HTML 시뮬레이션 강의는 기존대로 코드에서 수정하며, 새 일반 글은 Markdown으로 작성해 같은 이론 자료 트리에 표시합니다.

GitHub 저장소의 쓰기 권한을 가진 계정만 편집할 수 있습니다. 본인 전용으로 쓰려면 다른 저장소 공동 작업자나 Pages CMS 편집자를 초대하지 마세요.
관리자 안내 페이지의 `noindex`는 검색 노출 설정이며 인증 기능이 아닙니다. 실제 로그인과 저장 권한 검사는 Pages CMS와 GitHub에서 처리합니다.
비밀번호나 토큰은 이 사이트에 저장하지 않습니다. GitHub 2단계 인증을 켜고 앱 접근 범위는 이 저장소로 제한하세요.
저장소가 공개되어 있으므로 **게시를 끈 글과 업로드한 이미지도 GitHub에서는 공개**됩니다. 개인정보나 비밀 초안을 올리는 용도로는 사용하지 마세요.

### 프로그램 홍보 페이지 추가하기

파일에서 직접 추가할 수도 있습니다.

`/programs/`는 프로그램 소개 페이지를 모아 보여주는 탭입니다. 현재 Market Peek와 BLE Smart Cube가 등록되어 있습니다.
`_templates/program.md`를 `_programs/프로그램이름.md`로 복사하고 제목·설명·본문을 작성한 뒤 `published: true`로 바꾸면 됩니다.
예를 들어 `_programs/my-tool.md`는 `/programs/my-tool/`로 출력되고 목록에도 자동으로 추가됩니다.

`order`는 목록 순서, `platform`은 실행 환경, `links`는 다운로드·실행·소스 코드 버튼입니다.
`featured: true`를 넣으면 해당 항목의 테두리를 강조합니다. `icon`, `cover`, `cover_alt`로 아이콘과 실행 화면을 추가할 수 있습니다.
사용하지 않는 항목은 생략하세요. `_templates/`의 예시는 사이트에 공개되지 않습니다.
Home 배너는 `home.md`, 목록 화면은 `programs.html`, 개별 소개 화면은 `_layouts/program.html`에서 수정합니다.

이미 소개 페이지가 있다면 YAML 머리말에 `external_url: https://github.com/DukiChoi/BLESmartCube`처럼 적습니다. 목록에서 배너를 누르면 그 주소로 바로 이동합니다. CMS에서는 **바로 연결할 주소**에 입력하며, 비워두면 이 사이트의 프로그램 소개 페이지로 연결됩니다.

#### 프로그램 배너 스타일 고르기

[스타일 10종 미리보기](https://dukichoi.github.io/admin/program-styles/)에서 마우스나 터치로 반사 효과를 비교할 수 있습니다. 홈의 Program 배너는 은색 금속 질감으로 고정하고, 프로그램별 배너에만 기울기와 움직이는 반사광을 적용합니다.

CMS의 **배너 스타일**에서 고르거나, `_programs/` 파일의 YAML 머리말에 `banner_style: emerald-cosmos`처럼 적습니다. `auto`로 두거나 생략하면 목록을 열 때마다 무작위로 배정합니다. 사용할 수 있는 스타일을 한 번씩 모두 배정하기 전에는 중복되지 않습니다. 같은 탭에서 새로고침할 때도 직전 스타일을 피하며, 스크롤·호버·화면 모드 전환 중에는 바뀌지 않습니다.

특정 스타일을 지정하면 고정되며 무작위 배정에서 제외됩니다. 남은 스타일을 모두 사용하면 다시 섞어서 배정합니다. 무작위 배정은 `assets/js/program-banners.js`에서 처리하고, JavaScript가 꺼져 있으면 목록 순서에 따라 표시합니다. 이전 배정 기록을 저장할 수 없는 브라우저에서도 무작위 배정과 링크는 동작합니다.

| `banner_style` | 색상 | 반사 효과 |
| --- | --- | --- |
| `emerald-cosmos` | 에메랄드 | 원형 은박과 작은 별 |
| `sapphire-holo` | 사파이어 블루 | 세로 반사광 |
| `amethyst-amazing` | 보라 | 청록·분홍 미세 입자 |
| `ruby-radiant` | 루비 | 교차하는 다이아몬드 면 |
| `bronze-reverse` | 구리 | 가장자리와 반복 무늬 |
| `arctic-vstar` | 차가운 청록 | 얼음 결정과 넓은 사선 빛 |
| `rose-full-art` | 로즈 | 물결 음각 |
| `aurora-rainbow` | 남색·오로라 | 무지갯빛 펄 |
| `gold-secret` | 골드 | 두 겹의 금박 입자 |
| `graphite-shiny` | 흑연·은색 | 은색 별과 금속 반사 |

`/admin/program-styles/`의 **스타일의 비결**은 금속 명패, 회전 큐브와 반짝임, 홀로그램 10종을 별도 섹션으로 보여줍니다. 명패와 큐브는 홈·프로그램 목록과 같은 구성 요소를 사용하므로 실제 적용된 효과를 그대로 비교할 수 있습니다. 반짝임은 마우스를 올린 동안에만 나타나며, 기기의 동작 줄이기 설정을 따릅니다.

은색 명패는 `_includes/metal-banner.html`과 `assets/css/metal-banner.css`, 표면 질감은 `assets/textures/brushed-steel.png`에서 관리합니다. 랜덤 반짝임은 `assets/js/hover-sparkles.js`와 `assets/css/hover-sparkles.css`, 스타일 미리보기의 배치는 `assets/css/program-style-gallery.css`에서 수정합니다.

스타일 목록은 `_data/program_styles.yml`, 배너 구조는 `_includes/program-banner.html`, 질감과 색은 `assets/css/program-foils.css`에서 관리합니다. CMS 선택 항목을 추가하거나 바꿀 때는 `.pages.yml`의 `banner_style`도 맞춰 수정합니다.

#### Market Peek 소개와 배포

Market Peek 소개 사이트는 `https://duki-programming.github.io/market-peek/`에 별도로 배포합니다. 원본은 `_sites/duki-programming`의 독립 Git 저장소이며, 개인 홈페이지와 별도로 커밋·푸시합니다.
한국어는 `/market-peek/`, 영어는 `/market-peek/en/`입니다. 개인 홈페이지의 이전 주소는 `_layouts/market-peek-redirect.html`을 통해 해당 언어의 새 주소로 이동하며, 프로그램 카드도 새 사이트를 직접 엽니다.
두 페이지의 공통 본문은 `_includes/market-peek-page.html`, 번역 문구는 `_data/market_peek_copy.yml`, 레이아웃은 `_layouts/product.html`, 스타일은 `assets/css/market-peek.css`에서 관리합니다. 개인 홈페이지로 이동하는 링크 없이 하단에 Duki Programming과 DukiChoi를 텍스트로 표시합니다. 이 HTML 페이지는 일반 글용 CMS 편집 목록에서 제외합니다.
이번 영어 지원은 웹사이트에 적용되며, 두 언어 페이지는 현재 배포된 같은 앱 파일을 제공합니다. 영어 다운로드 영역에는 앱과 Windows 설치 안내가 한국어임을 표시합니다. 자동 다운로드 갱신 문구도 페이지 언어를 따릅니다.
다운로드 버전·파일 주소·크기는 `_data/market_peek.yml`에서 관리합니다. 공개된 GitHub Release의 EXE·7z 링크를 넣고 `published: true`로 바꾸면 다운로드 버튼이 표시됩니다.
비공개 저장소의 초안 릴리스는 일반 방문자가 내려받을 수 없으므로, 공개 배포를 확인하기 전에는 `published: false`를 유지합니다.
배포 전용 공개 저장소는 [Market-Peek-releases](https://github.com/DukiChoi/Market-Peek-releases)입니다. 새 버전은 `v1.0.0`처럼 별도 태그와 릴리스로 등록하고 EXE·7z·SHA256SUMS.txt를 첨부합니다. 기존 버전 파일을 교체하지 말고 새 릴리스 주소로 위 YAML을 갱신합니다. `BTC_ticker_tray` 소스 저장소는 비공개로 유지합니다.
웹페이지는 HTML·CSS만으로 동작하며 Python 서버나 API 토큰이 필요하지 않습니다. 프로그램 본체는 Electron 앱으로, Windows 배포 파일에도 Python 설치가 필요하지 않습니다.

### 공통 서식과 화면 모드

전체 페이지의 기본 서식과 색상은 `assets/css/main.scss`에서 관리합니다.
왼쪽 위 해·초승달 스위치로 라이트/다크 모드를 바꿀 수 있으며, 선택은 브라우저에 저장됩니다.
처음 방문하면 운영체제의 화면 모드를 따릅니다. 전환 동작은 `assets/js/theme.js`에 있습니다.
공통 상단 메뉴는 두 모드 모두 파란 배경을 사용합니다.

### 이론 자료 추가하기

이론 자료는 `assets/theories/` 아래 폴더별로 관리합니다. 폴더 이름이 목차 제목이 되며, 하위 폴더도 자동으로 접고 펼치는 목차로 표시됩니다.

```text
assets/theories/
  index.html              # 전체 자료 첫 화면
  style.css               # 시뮬레이션 공통 스타일
  디지털 논리/
    index.md              # 빈 분류도 표시하기 위한 안내 페이지
    full-adder.html
    adder-2bit.html
    ring-oscillator.html
    memory.html
  컴퓨터 구조/index.md
  운영체제/index.md
  자료구조/index.md
  임베디드 통신/index.md
```

새 분류는 폴더를 만들고 YAML 머리말이 있는 글을 추가하면 자동으로 나타납니다. `_config.yml`이나 기존 `index`에 분류를 등록할 필요가 없습니다. 빈 폴더는 Git에 저장되지 않으므로 글 없이 분류만 먼저 만들 때는 해당 폴더에 아래 `index.md`를 넣습니다.

```markdown
---
title: 새 분류
folder_overview: true
---
새 분류의 자료를 정리하는 공간입니다.
```

일반 글은 원하는 폴더 안에 Markdown 또는 HTML로 추가합니다. `title`은 글 제목, `order`는 글 순서이며 `topic`은 필요하지 않습니다.

```markdown
---
title: 새 이론 노트
description: 이 글에서 다루는 내용을 한 줄로 적습니다.
order: 5
---

여기에 본문을 작성합니다.
```

기존 강의는 `permalink`를 유지하므로 파일을 이동해도 `/theory/full-adder/` 등 기존 주소는 바뀌지 않습니다. 새 글도 주소를 고정하려면 `permalink: /theory/my-note/`를 추가하세요. 지정하지 않으면 폴더 경로를 따라 주소가 생성됩니다.

목차 생성은 `_includes/theory-folder-tree.html`, 글 화면은 `_layouts/theory.html`, 스타일은 `assets/css/theory.css`에서 관리합니다. `folder_overview: true`인 안내 페이지는 글 개수와 이전·다음 글에서 제외됩니다. Tech Study 첫 화면은 전체 분류를 펼치고, 글이나 분류 안내 페이지에서는 현재 분류와 그 상위 폴더만 펼칩니다. 다른 분류는 직접 열 수 있으며, 페이지를 이동하면 새 페이지의 분류에 맞춰 다시 정리됩니다.

사이트 전체 글꼴은 로컬의 Pretendard Variable v1.3.9를 사용합니다. 라이선스는 `assets/fonts/OFL-Pretendard.txt`에 포함되어 있습니다.

When your theme is released, only the files in `_layouts`, `_includes`, `_sass` and `assets` tracked with Git will be bundled.
To add a custom directory to your theme-gem, please edit the regexp in `jekyll-shell-theme.gemspec` accordingly.

## License

The theme is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).


이것이 블로구 주소
https://dukichoi.github.io/
