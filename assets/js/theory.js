(() => {
  const navigation = document.querySelector('.theory-navigation');
  if (!navigation) return;

  const narrowScreen = window.matchMedia('(max-width: 820px)');
  const stateKey = 'dukichoi-theory-tree';
  let saved = {};
  try {
    const parsed = JSON.parse(sessionStorage.getItem(stateKey));
    if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) saved = parsed;
  } catch (_) { /* Native details still work without browser storage. */ }

  const branches = document.querySelectorAll('.theory-tree details[data-tree-key]');
  const rootKey = () => 'all:' + (narrowScreen.matches ? 'mobile' : 'desktop');
  const updateRoot = () => {
    navigation.open = saved[rootKey()] ?? !narrowScreen.matches;
  };
  updateRoot();

  branches.forEach(branch => {
    if (branch !== navigation) {
      // Keep the current article visible when arriving through a direct link.
      branch.open = branch.querySelector('[aria-current="page"]') ? true : (saved[branch.dataset.treeKey] ?? true);
    }
    branch.addEventListener('toggle', () => {
      const key = branch === navigation ? rootKey() : branch.dataset.treeKey;
      saved[key] = branch.open;
      try { sessionStorage.setItem(stateKey, JSON.stringify(saved)); } catch (_) { /* Optional persistence. */ }
    });
  });
  narrowScreen.addEventListener('change', updateRoot);
})();
