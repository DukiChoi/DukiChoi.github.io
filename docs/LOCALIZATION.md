# 한국어 · 영어 · 일본어 페이지 관리

페이지는 같은 폴더에 `_ko`, `_en`, `_jp` 접미사로 보관합니다. 파일명의 `jp`는 관리용이며, HTML과 검색엔진의 일본어 언어 코드는 `ja`를 사용합니다.

| 소스 예시 | 공개 주소 |
| --- | --- |
| `assets/theories/컴퓨터 구조/cache_ko.html` | `/theory/cache/` |
| `assets/theories/컴퓨터 구조/cache_en.html` | `/en/theory/cache/` |
| `assets/theories/컴퓨터 구조/cache_jp.html` | `/ja/theory/cache/` |

`home_ko.md`, `home_en.md`, `home_jp.md` 등 일반 페이지도 같은 규칙입니다. 기존 한국어 주소는 유지합니다. 각 파일의 `permalink`가 공개 주소를 결정하며, 파일명을 URL로 사용하지 않습니다.

## 내용을 수정할 때

- 본문과 제목: 해당 언어의 HTML 또는 Markdown 파일을 수정합니다.
- 홈 소개와 카드: `_data/learning_home.json`의 `ko`, `en`, `ja`를 수정합니다.
- 메뉴·이전/다음·푸터: `_data/ui.yml`과 공통 includes에서 관리합니다.
- 프로필 프로젝트와 프로그램 목록: `_data/projects_en.yml`, `_data/projects_jp.yml`, `_data/programs_en.json`, `_data/programs_jp.json`을 수정합니다. 한국어 프로그램 목록은 외부 카탈로그를 불러오며, 영어·일본어 소개는 로컬 번역본입니다. 새 프로그램을 추가하면 번역본도 갱신합니다.
- 실험 동작: `_includes/lessons/<이름>.js` 한 곳에서 수정하면 세 언어에 반영됩니다.
- 실험 스타일: `_includes/lessons/<이름>.css`에서 공통으로 관리합니다.
- 실험 중 표시되는 문구: `_data/lesson_strings/ko.json`, `en.json`, `ja.json`에서 같은 키를 수정합니다. 키는 안정적인 식별자이며 번역문 변경 시 바꾸지 않습니다.

공통 JS에서 문자열은 `{{ lesson_strings.키 | jsonify }}`로 출력합니다. 템플릿 문자열의 일부는 `{% include js-text.html key="키" %}`로 출력하여 역따옴표와 개행을 안전하게 처리합니다. JS 객체의 여는 `{` 뒤에는 공백을 두어 Liquid의 `{{`와 붙지 않게 합니다. CSS나 JS를 언어별 HTML에 복사하지 않습니다.

## 새 학습 도구를 추가할 때

1. 같은 분야 폴더에 세 언어 파일을 만듭니다.
2. 세 파일에 동일한 `translation_key: theory-이름`과 `subject`를 지정합니다.
3. `lang`은 각각 `ko`, `en`, `ja`, `permalink`는 각각 `/theory/이름/`, `/en/theory/이름/`, `/ja/theory/이름/`로 지정합니다.
4. 공통 JS/CSS와 필요한 문구 키를 추가합니다.

오른쪽 위 언어 전환과 `hreflang`은 `translation_key`로 같은 페이지를 찾습니다. 목록과 이전/다음 링크는 현재 언어로 제한됩니다. 프로그램 컬렉션도 `lang`을 지정해야 하며, 한국어 목록은 `ko` 문서만 사용합니다.

일본어 프로그램 소개의 외부 링크는 실제로 제공되는 영어 제품 사이트로 연결합니다. CV/이력서의 페이지 안내는 번역되어 있으며, 원본 PDF 파일은 공통으로 사용합니다.

## 확인과 배포

```sh
bundle exec jekyll build
node --test tests/localization.test.mjs
```

별도 빌드 폴더를 사용하면 `JEKYLL_DESTINATION=/빌드/경로`를 지정합니다. 테스트는 언어별 연결, 렌더링된 실험 스크립트 문법, 개인정보처리방침과 404의 광고 제외를 확인합니다. 실험 로직을 수정할 때는 브라우저에서 재생·스텝·초기화도 확인합니다. `master`에 푸시하면 기존 GitHub Pages 배포가 실행됩니다.
