import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';

const root = path.resolve(import.meta.dirname, '..');
const build = process.env.JEKYLL_DESTINATION || path.join(root, '_site');
const walk = dir => fs.readdirSync(dir, { withFileTypes: true }).flatMap(entry => entry.isDirectory() ? walk(path.join(dir, entry.name)) : [path.join(dir, entry.name)]);
const read = file => fs.readFileSync(file, 'utf8');
const locales = [['ko', 'ko', ''], ['en', 'en', '/en'], ['ja', 'jp', '/ja']];
const sources = walk(path.join(root, 'assets/theories')).filter(file => /_ko\.html$/.test(file) && !file.endsWith('/index_ko.html'));
const routeFile = url => path.join(build, url.endsWith('/') ? url + 'index.html' : url + '.html');

test('each lesson has three language files, reciprocal links and valid rendered JavaScript', () => {
  assert.ok(sources.length > 0);
  assert.ok(fs.existsSync(build), 'Run bundle exec jekyll build first.');
  for (const source of sources) {
    const slug = path.basename(source, '_ko.html');
    for (const [lang, suffix, prefix] of locales) {
      const localizedSource = read(source.replace('_ko.html', `_${suffix}.html`));
      assert.match(localizedSource, new RegExp(`^lang: "?${lang}"?$`, 'm'), source);
      assert.match(localizedSource, new RegExp(`^translation_key: "?theory-${slug}"?$`, 'm'), source);
      const url = `${prefix}/theory/${slug}/`;
      const html = read(routeFile(url));
      assert.ok(html.includes(`<html lang="${lang}">`), url);
      for (const [other, , otherPrefix] of locales) {
        assert.ok(html.includes(`hreflang="${other}" href="https://dukichoi.github.io${otherPrefix}/theory/${slug}/"`), `${url}: alternate ${other}`);
        assert.ok(html.includes(`href="${otherPrefix}/theory/${slug}/" lang="${other}"`), `${url}: switch ${other}`);
      }
      let scripts = 0;
      for (const match of html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/g)) {
        const external = match[1].match(/src="(\/assets\/js\/coding-test-(?:models|labs)\.js)"/);
        if (external) {
          new vm.Script(read(path.join(build, external[1])), { filename: external[1] });
          scripts++;
        }
        if (/\bsrc=|application\/(?:ld\+)?json/.test(match[1])) continue;
        new vm.Script(match[2], { filename: url });
        scripts++;
      }
      assert.ok(scripts > 0, `${url}: missing simulator`);
    }
  }
});

test('privacy and error pages remain free of advertising in every language', () => {
  const sitemap = read(path.join(build, 'sitemap.xml'));
  for (const [lang, , prefix] of locales) {
    for (const url of [`${prefix}/privacy/`, `${prefix}/404`]) {
      const html = read(routeFile(url));
      assert.ok(html.includes(`<html lang="${lang}">`), url);
      assert.doesNotMatch(html, /pagead2\.googlesyndication\.com|adsbygoogle\.push|class="site-side-ad/);
    }
    assert.ok(!sitemap.includes(`${prefix}/404`));
  }
  assert.doesNotMatch(sitemap, /ADVERTISEMENT|\/admin\//);
});
