(async function () {
  'use strict';
  const repository = 'DukiChoi/Market-Peek-releases';
  const base = `https://github.com/${repository}`;
  const cacheKey = 'market-peek-downloads-v1';
  const english = document.documentElement?.lang?.toLowerCase().startsWith('en');
  const text = english ? {
    installer: 'Korean-language installer',
    archive: 'Extract and run · Korean-language app',
    mac: 'DMG installer · Korean-language app',
    macDownload: 'Download for macOS ',
    notes: 'release notes',
    pending: 'coming soon',
    macPending: 'macOS download coming soon ',
    macPendingDetail: 'The macOS installer for the latest version is being prepared.',
  } : {
    installer: '한국어 설치 안내',
    archive: '압축을 풀고 실행',
    mac: 'DMG 설치 파일',
    macDownload: 'macOS용 다운로드 ',
    notes: '릴리스 정보',
    pending: '준비 중',
    macPending: 'macOS 설치 파일 준비 중 ',
    macPendingDetail: '최신 버전의 macOS 설치 파일을 준비하고 있습니다.',
  };
  const findAsset = (release, name) => release.assets?.find(asset => asset.name === name && Number.isFinite(asset.size) && asset.size > 0);
  const fileUrl = (release, asset) => `${base}/releases/download/${encodeURIComponent(release.tag_name)}/${encodeURIComponent(asset.name)}`;

  function apply(releases) {
    const published = releases.filter(release => !release.draft && !release.prerelease && /^v\d+\.\d+\.\d+$/.test(release.tag_name))
      .sort((a, b) => b.tag_name.localeCompare(a.tag_name, undefined, { numeric: true }));
    const installer = release => findAsset(release, `Market.Peek.Setup.${release.tag_name.slice(1)}.exe`) || findAsset(release, `Market Peek Setup ${release.tag_name.slice(1)}.exe`);
    const dmg = release => findAsset(release, `market-peek-${release.tag_name.slice(1)}-universal.dmg`);
    function version(id, release) {
      const element = document.getElementById(id);
      if (element) element.textContent = `${release.tag_name} Beta`;
    }
    function button(id, release, asset, description) {
      const element = document.getElementById(id);
      if (!element) return;
      element.hidden = !asset;
      const detail = element.nextElementSibling;
      if (detail) detail.hidden = !asset;
      if (!asset) return;
      element.href = fileUrl(release, asset);
      element.removeAttribute('aria-disabled');
      element.removeAttribute('tabindex');
      if (id === 'mac-download-link' && element.firstChild) element.firstChild.textContent = text.macDownload;
      if (detail) detail.textContent = `${(asset.size / 1000000).toFixed(1)} MB · ${description}`;
    }
    const windows = published.find(release => installer(release));
    if (windows) {
      version('windows-release-version', windows);
      button('download-link', windows, installer(windows), text.installer);
      button('archive-link', windows, findAsset(windows, `market-peek-${windows.tag_name.slice(1)}-x64.7z`), text.archive);
      const notes = document.getElementById('windows-release-notes');
      if (notes) {
        notes.href = `${base}/releases/tag/${encodeURIComponent(windows.tag_name)}`;
        notes.textContent = `${windows.tag_name} Beta ${text.notes} ↗`;
      }
    }
    const mac = published.find(release => dmg(release));
    if (mac && mac.tag_name === published[0]?.tag_name) {
      version('mac-release-version', mac);
      button('mac-download-link', mac, dmg(mac), text.mac);
    } else if (published.length) {
      const element = document.getElementById('mac-download-link');
      const heading = document.getElementById('mac-release-version');
      if (heading) heading.textContent = `${published[0].tag_name} Beta ${text.pending}`;
      if (element) {
        element.removeAttribute('href');
        element.setAttribute('aria-disabled', 'true');
        element.setAttribute('tabindex', '-1');
        if (element.firstChild) element.firstChild.textContent = text.macPending;
        if (element.nextElementSibling) element.nextElementSibling.textContent = text.macPendingDetail;
      }
    }
  }

  try {
    const cached = JSON.parse(window.localStorage.getItem(cacheKey));
    const age = Date.now() - cached?.savedAt;
    if (age >= 0 && age < 5 * 60 * 1000 && Array.isArray(cached.releases)) {
      apply(cached.releases);
      return;
    }
  } catch { /* Downloads still work when storage is unavailable. */ }
  try {
    const response = await fetch(`https://api.github.com/repos/${repository}/releases?per_page=100&page=1`, {
      cache: 'no-store', headers: { Accept: 'application/vnd.github+json' }, signal: AbortSignal.timeout(8000),
    });
    if (!response.ok) return;
    const releases = await response.json();
    if (!Array.isArray(releases)) return;
    apply(releases);
    try {
      const compact = releases.map(({ tag_name, draft, prerelease, assets }) => ({ tag_name, draft, prerelease,
        assets: assets?.map(({ name, size }) => ({ name, size })) }));
      window.localStorage.setItem(cacheKey, JSON.stringify({ savedAt: Date.now(), releases: compact }));
    } catch { /* Retain the current download links without caching. */ }
  } catch { /* Keep the published static links on network or rate-limit errors. */ }
})();
