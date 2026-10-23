# Website advertising

Google AdSense is configured for https://dukichoi.github.io/.
The public publisher ID is `ca-pub-7488501527988619`.

- `_data/advertising.yml` stores the publisher ID, the `adsense.enabled` switch, and display ad unit `4679016493` in `adsense.side_slot`.
- `_includes/advertising-head.html` loads the account verification meta tag and the asynchronous AdSense library once per page. It also declares the responsive side-unit dimensions and loads `assets/js/adsense.js` when the side slot is configured.
- `_includes/content-with-ads.html` places one 160 × 600 ad on each side of the centered content. Both the shared layout and the Market Peek product layout use this include.
- At viewport widths of 1440px or more, `assets/css/site-ad.css` uses two 160px columns, 24px gaps, and a central reading area capped at 1120px. The layout has 24px outer margins and a maximum width of 1488px. Ads remain in normal document flow with a 56px top margin. Below 1440px, both side units are hidden and do not request ads.
- On all pages using the shared ad layout, including Market Peek, both side ads use sticky positioning with a 40px top offset, matching the contents sidebar. This applies when the viewport is at least 1440px wide and 720px tall; shorter windows retain normal scrolling so the full ad remains accessible. The rails stop at the content container boundary.
- `assets/js/adsense.js` requests each visible side unit once. A page opened on mobile can request the units when it first becomes wide enough; resizing back and forth does not refresh existing ads.
- The supplied display ad unit is reused for the left and right placements. The site uses standard HTML AdSense units. No AMP runtime is required.
- The responsive unit sizes follow Google's media-query example: the code omits `data-ad-format` and `data-full-width-responsive` when specifying exact dimensions. The sizing CSS is inline in the head as Google documents.
- The manual ad section is marked with `google-side-rail-overlap="false"` so automatic side rail overlays do not overlap it. Other Auto ads remain controlled by the AdSense account settings.
- `ads.txt` generates the Google authorized-seller entry from the same publisher ID. The old empty top banner remains disabled with `show_placeholder: false`.

The page includes the ad placements and requests; an actual creative is shown only when AdSense returns one. Check that the site's approval status is **Ready** in AdSense. Site ownership verification is a separate step.

References: [responsive ad sizing and hiding](https://support.google.com/adsense/answer/9183363), [ad unit placement](https://support.google.com/adsense/answer/9190028), [Auto ads settings](https://support.google.com/adsense/answer/9305577), [side rail overlays](https://support.google.com/adsense/answer/16531757), [site approval status](https://support.google.com/adsense/answer/12170222).
