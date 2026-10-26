(() => {
  const list = document.querySelector('.programs-hub .program-links');
  const template = document.getElementById('program-card-template');
  if (!list || !template) return;
  const source = 'https://duki-programming.github.io';
  const safeUrl = value => {
    if (typeof value !== 'string' || !value.trim()) throw new Error('Missing URL');
    const url = new URL(value, source);
    if (url.protocol !== 'https:') throw new Error('Invalid URL');
    return url.href;
  };
  window.programCatalogReady = (async () => {
    try {
      const response = await fetch(`${source}/api/programs.json`, {
        mode: 'cors', credentials: 'omit', cache: 'no-cache', signal: AbortSignal.timeout(6000),
      });
      if (!response.ok) throw new Error('Catalog unavailable');
      const data = await response.json();
      if (data.version !== 1 || !Array.isArray(data.programs)) throw new Error('Invalid catalog');
      // Validate and render off-DOM first; failures leave the original local list intact.
      const seen = new Set();
      const imported = document.createDocumentFragment();
      for (const item of data.programs) {
        if (!item || typeof item.title !== 'string' || !item.title.trim()) throw new Error('Missing title');
        const href = safeUrl(item.external_url || item.url);
        if (seen.has(href)) continue;
        seen.add(href);
        const icon = item.icon ? safeUrl(item.icon) : null;
        const slot = template.content.firstElementChild.cloneNode(true);
        const card = slot.querySelector('.program-link');
        card.href = href;
        card.classList.toggle('program-link--featured', item.featured === true);
        card.dataset.bannerMode = 'auto';
        const text = card.querySelector('.program-link__text');
        text.replaceChildren();
        const title = document.createElement('strong');
        title.textContent = item.title;
        text.append(title);
        for (const key of ['description', 'platform']) {
          if (typeof item[key] !== 'string' || !item[key]) continue;
          const span = document.createElement('span');
          span.textContent = item[key];
          if (key === 'platform') span.className = 'program-platform';
          text.append(span);
        }
        for (const face of card.querySelectorAll('.program-cube__face')) {
          face.replaceChildren();
          if (icon) {
            const image = document.createElement('img');
            image.src = icon; image.alt = ''; image.width = 40; image.height = 40; image.loading = 'lazy';
            face.append(image);
          } else face.textContent = Array.from(item.title)[0];
        }
        imported.append(slot);
      }
      // Source-owned cards are refreshed; independent local programs (e.g. BLE Smart Cube) remain.
      const local = Array.from(list.querySelectorAll('.program-slot')).filter(slot => {
        const href = slot.querySelector('a.program-link')?.href;
        return href && new URL(href).origin !== source && !seen.has(href);
      });
      list.replaceChildren(imported, ...local);
      if (!list.children.length) {
        const empty = document.createElement('p');
        empty.className = 'program-empty'; empty.textContent = '아직 공개된 프로그램이 없습니다.';
        list.append(empty);
      }
      list.dataset.catalogState = 'synced';
    } catch {
      // Static local cards remain usable offline, without JS, or when the source is unavailable.
      list.dataset.catalogState = 'fallback';
    }
  })();
})();
