(() => {
  const navigation = document.querySelector('.theory-navigation');
  if (!navigation) return;

  const overview = Boolean(navigation.closest('.theory-shell--overview'));
  const branches = navigation.querySelectorAll('.theory-tree__group');

  const showCurrentCategory = () => {
    navigation.open = true;
    branches.forEach(branch => {
      branch.open = overview || branch.hasAttribute('data-tree-current');
    });
  };

  showCurrentCategory();
  // Returning through the back/forward cache should focus the page's category too.
  window.addEventListener('pageshow', showCurrentCategory);
})();
