(() => {
  const updateExperience = () => {
    const year = new Date().getFullYear();
    document.querySelectorAll('[data-experience-year]').forEach(element => {
      element.textContent = year;
    });
    document.querySelectorAll('[data-start-year]').forEach(element => {
      const startYear = Number(element.dataset.startYear);
      if (Number.isInteger(startYear)) element.textContent = Math.max(0, year - startYear);
    });
  };

  // Update on visits and restored tabs, even if the static site wasn't rebuilt.
  updateExperience();
  window.addEventListener('pageshow', updateExperience);
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) updateExperience();
  });
})();
