# Website advertising

Google AdSense Auto ads are configured for https://dukichoi.github.io/.
The public publisher ID is `ca-pub-7488501527988619`.

- `_data/advertising.yml` stores the publisher ID and the `adsense.enabled` switch.
- `_includes/advertising-head.html` loads the account verification meta tag and the asynchronous AdSense script once per page. Both the shared layout and the Market Peek product layout include it.
- Auto ads choose their own placements. No manual ad unit IDs or `adsbygoogle.push()` calls are needed.
- `ads.txt` generates the Google authorized-seller entry from the same publisher ID.
- The old empty banner is disabled with `show_placeholder: false`, so it does not leave a blank advertising box above the content.
- The shared and product layouts protect the reading area with `google-side-rail-overlap="false"`. At viewport widths of 1280px or more, `assets/css/site-ad.css` reserves at least 180px on each side and caps the reading area at 1160px, leaving space for desktop side rail ads. The gutters do not force Google to fill either placement.

## AdSense settings

In AdSense, open **Ads → Edit site** and enable **Auto ads**. Auto optimize can remain enabled; it controls experiments on ad formats and settings.

For ads on both sides, enable **Overlay formats → Side rail ads**, then choose **Advanced settings → Side rail ad position → Left and right** and apply the settings to the site. These options are managed in AdSense, not by a website flag. Side rail ads are available on desktop, and Auto ads decide when to show an eligible placement.

References: [Auto ads settings](https://support.google.com/adsense/answer/9305577), [side rail ads](https://support.google.com/adsense/answer/16531757), [Auto optimize](https://support.google.com/adsense/answer/9141298), [ads.txt guide](https://support.google.com/adsense/answer/12171612).
