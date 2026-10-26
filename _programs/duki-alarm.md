---
title: 두키 알리미
description: 웹사이트 조회수와 앱별 다운로드 변화를 아이폰과 애플워치에서 확인하는 개인용 앱입니다.
platform: iPhone · Apple Watch
permalink: /duki-alarm/
order: 3
published: true
banner_style: auto
icon: /assets/programs/duki-alarm/icon.png
links:
  - label: Xcode 프로젝트 다운로드
    url: https://github.com/DukiChoi/duki-notifier/archive/refs/heads/main.zip
---

## 손목에서 확인하는 다운로드 변화

두키 알리미는 아이폰과 연결되는 네이티브 애플워치 앱입니다. 전체 조회수, 전체 다운로드 수, 앱별 통계와 마지막 확인 이후 다운로드 증가량을 확인합니다.

다운로드 수는 웹사이트의 파일 링크 클릭을 기준으로 합니다. Market Peek은 기존 집계를 유지하여 같은 IP에서 OS별 1회만 반영하며, 설치 완료 횟수는 아닙니다. 알림은 앱을 열거나 아이폰이 백그라운드 갱신을 허용할 때 증가분을 확인해 전달합니다.

## 현재 설치 방법

현재 개발 버전은 Mac의 Xcode에서 내 아이폰과 페어링된 애플워치에 설치할 수 있습니다. 위 버튼은 **Xcode 프로젝트 ZIP 파일**을 다운로드합니다. 아이폰에서 바로 설치하는 IPA 파일은 아닙니다. 비공개 저장소이므로 저장소에 접근할 수 있는 GitHub 계정으로 로그인해야 합니다.

1. Mac에서 프로젝트를 다운로드하고 압축을 풉니다.
2. `DukiNotifier.xcodeproj`를 Xcode로 엽니다.
3. Xcode의 Settings → Accounts에서 Apple 계정으로 로그인합니다.
4. 두 앱 타깃의 Signing & Capabilities에서 내 Personal Team을 선택합니다.
5. 아이폰과 페어링된 애플워치를 연결하고 개발자 모드를 켭니다.
6. 아이폰 앱을 먼저 실행한 뒤 워치 앱을 설치·실행합니다.
7. 아이폰 앱의 설정에 Cloudflare 통계 API 주소와 조회 전용 토큰을 입력합니다.

무료 Apple 계정으로 설치한 앱은 서명이 7일 뒤 만료되어 Xcode에서 다시 설치해야 합니다. TestFlight·App Store 설치 링크는 아직 제공하지 않습니다.

Cloudflare 통계 서버는 연결되어 있으며 기존 Market Peek 다운로드 이력을 유지합니다. 사이트 조회수는 새 집계 기능 배포 이후부터 누적됩니다. 앱 설정에서 조회 전용 토큰을 입력하면 사용할 수 있습니다.

설치 정책은 [Apple 개발자 계정 안내](https://developer.apple.com/help/account/basics/about-your-developer-account/)를 참고해 주세요.
