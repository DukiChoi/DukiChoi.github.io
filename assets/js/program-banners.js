(async () => {
  if (window.programCatalogReady) await window.programCatalogReady;
  const catalogElement = document.getElementById('program-banner-styles');
  if (!catalogElement) return;
  const styles = JSON.parse(catalogElement.textContent);
  const cards = Array.from(document.querySelectorAll('.program-links .program-link'));
  const automatic = cards.filter(card => card.dataset.bannerMode === 'auto');
  if (!automatic.length || !styles.length) return;

  // Keep explicitly chosen finishes out of the random pool.
  const reserved = new Set(cards.filter(card => card.dataset.bannerMode !== 'auto').map(card => card.dataset.bannerStyle));
  const available = styles.filter(style => !reserved.has(style.id));
  const pool = available.length ? available : styles;
  const storageKey = 'dukichoi-program-banner-styles';
  let previous = {};
  try {
    const saved = JSON.parse(sessionStorage.getItem(storageKey));
    if (saved && typeof saved === 'object') previous = saved;
  } catch (_) { /* Random selection still works when storage is unavailable. */ }

  const key = card => card.getAttribute('href');
  const shuffle = values => {
    const result = [...values];
    for (let i = result.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
  };

  // Deal every available finish once before reusing one for a larger catalog.
  for (let offset = 0; offset < automatic.length; offset += pool.length) {
    const batch = automatic.slice(offset, offset + pool.length);
    const deck = shuffle(pool);
    batch.forEach((card, i) => {
      if (deck[i].id !== previous[key(card)]) return;
      // Swap an immediate repeat without giving either card its previous style.
      const other = deck.findIndex((style, j) => j !== i &&
        style.id !== previous[key(card)] &&
        (j >= batch.length || deck[i].id !== previous[key(batch[j])]));
      if (other !== -1) [deck[i], deck[other]] = [deck[other], deck[i]];
    });
    batch.forEach((card, i) => {
      card.dataset.bannerStyle = deck[i].id;
      card.dataset.palette = deck[i].palette;
      card.dataset.foil = deck[i].foil;
    });
  }

  try {
    sessionStorage.setItem(storageKey, JSON.stringify(Object.fromEntries(cards.map(card => [key(card), card.dataset.bannerStyle]))));
  } catch (_) { /* No persistence is required for the banners to work. */ }
})();
