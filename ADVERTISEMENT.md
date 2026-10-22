# Website advertising

Google AdSense is configured for https://dukichoi.github.io/.
The public publisher ID is `ca-pub-7488501527988619`.

- `_data/advertising.yml` stores the publisher ID, the `adsense.enabled` switch, and display ad unit `4679016493` in `adsense.side_slot`.
- `_includes/advertising-head.html` loads the account verification meta tag and the asynchronous AdSense library once per page. It also declares the responsive side-unit dimensions and loads `assets/js/adsense.js` when the side slot is configured.
- `_includes/content-with-ads.html` places one left-hand copy of `_includes/side-ad.html` with two vertically stacked units. No right-hand placement is rendered. Both the shared layout and the Market Peek product layout use this include.
- At viewport widths of 1280px or more, `assets/css/site-ad.css` lays out a 400px left column, a reading area capped at 1160px, and a 24px gap. The left column contains two labeled 400 × 700 ad placements with 24px between them. Each outer frame has matching fixed, minimum, and maximum dimensions, and each ad tag explicitly requests 400 × 700; an ad size change cannot expand the page layout. Below 1280px, both side units are hidden and do not request ads.
- `assets/js/adsense.js` requests each visible side unit once. A page opened on mobile can request the units when it first becomes wide enough; resizing back and forth does not refresh existing ads.
- The supplied display ad unit is reused for both placements in the left column. The site uses standard HTML AdSense units. No AMP runtime is required.
- The responsive unit sizes follow Google's media-query example: the code omits `data-ad-format` and `data-full-width-responsive` when specifying exact dimensions. The sizing CSS is inline in the head as Google documents.
- The manual ad section is marked with `google-side-rail-overlap="false"` so automatic side rail overlays do not overlap it. Other Auto ads remain controlled by the AdSense account settings.
- `ads.txt` generates the Google authorized-seller entry from the same publisher ID. The old empty top banner remains disabled with `show_placeholder: false`.

The page includes the ad placements and requests; an actual creative is shown only when AdSense returns one. Check that the site's approval status is **Ready** in AdSense. Site ownership verification is a separate step.

References: [responsive ad sizing and hiding](https://support.google.com/adsense/answer/9183363), [ad unit placement](https://support.google.com/adsense/answer/9190028), [Auto ads settings](https://support.google.com/adsense/answer/9305577), [side rail overlays](https://support.google.com/adsense/answer/16531757), [site approval status](https://support.google.com/adsense/answer/12170222).
