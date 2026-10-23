(() => {
  const desktop = window.matchMedia("(min-width: 1440px)");

  const requestVisibleAds = () => {
    if (!desktop.matches) return;

    document.querySelectorAll(".site-side-ad__unit").forEach((unit) => {
      if (unit.dataset.sideAdRequested || unit.hasAttribute("data-adsbygoogle-status") || !unit.getClientRects().length || !unit.offsetWidth) return;

      unit.dataset.sideAdRequested = "true";
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (error) {
        console.warn("AdSense side ad could not be initialized.", error);
      }
    });
  };

  requestVisibleAds();
  desktop.addEventListener("change", requestVisibleAds);
})();
