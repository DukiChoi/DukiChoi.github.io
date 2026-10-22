(() => {
  const key = 'dukichoi-theme';
  const root = document.documentElement;
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');
  let preferred = null;
  let toggle;

  try {
    const saved = localStorage.getItem(key);
    if (saved === 'light' || saved === 'dark') preferred = saved;
  } catch (_) { /* The switch still works when browser storage is unavailable. */ }

  function apply(theme) {
    root.dataset.theme = theme;
    if (toggle) {
      const dark = theme === 'dark';
      toggle.setAttribute('aria-checked', String(dark));
      toggle.title = dark ? '라이트 모드로 전환' : '다크 모드로 전환';
    }
  }

  // This file runs in <head>, before styles are painted, to avoid a theme flash.
  apply(preferred || (systemTheme.matches ? 'dark' : 'light'));
  document.addEventListener('DOMContentLoaded', () => {
    toggle = document.querySelector('.theme-toggle');
    if (!toggle) return;
    toggle.hidden = false;
    apply(root.dataset.theme);
    toggle.addEventListener('click', () => {
      preferred = root.dataset.theme === 'dark' ? 'light' : 'dark';
      apply(preferred);
      try { localStorage.setItem(key, preferred); } catch (_) { /* Optional persistence. */ }
    });
  });
  systemTheme.addEventListener('change', event => {
    if (!preferred) apply(event.matches ? 'dark' : 'light');
  });
  window.addEventListener('pageshow', event => {
    if (!event.persisted) return;
    // A page restored by Back/Forward may have been painted with an older choice.
    try {
      const saved = localStorage.getItem(key);
      preferred = saved === 'light' || saved === 'dark' ? saved : null;
    } catch (_) { /* Retain this page's choice when storage is unavailable. */ }
    apply(preferred || (systemTheme.matches ? 'dark' : 'light'));
  });
  window.addEventListener('storage', event => {
    if (event.key !== key && event.key !== null) return;
    preferred = event.newValue === 'dark' || event.newValue === 'light' ? event.newValue : null;
    apply(preferred || (systemTheme.matches ? 'dark' : 'light'));
  });
})();
