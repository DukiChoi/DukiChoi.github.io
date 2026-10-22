# Website advertising

The website registered with Coinzilla is https://dukichoi.github.io/.
Market Peek downloads are at https://dukichoi.github.io/programs/market-peek/.

- `_data/advertising.yml` stores the public ownership verification value and the placeholder toggle.
- `_includes/advertising-head.html` places the verification meta tag in the shared and product page heads.
- `_includes/site-ad.html` is shared by all public page layouts, including Home and the Market Peek download page.
- `assets/css/site-ad.css` reserves 728 × 90 pixels on desktop and 320 × 50 on smaller screens. It does not overlay page content.
- The current placement is an empty labeled placeholder. It makes no ad requests and generates no paid impressions.
- After publisher approval, replace the placeholder with the provider-issued code and follow its approved size, placement and refresh rules. Do not simply resize a live creative with CSS.
- To hide the empty placement, set `show_placeholder: false`. The ownership meta tag remains available.
- Website approval does not authorize displaying the website's ad unit inside the Electron application.
