import test from 'node:test';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import { readFile } from 'node:fs/promises';

const source = await readFile(new URL('../assets/js/market-peek-releases.js', import.meta.url), 'utf8');
const release = (version, names, extra = {}) => ({ tag_name: `v${version}`, assets: names.map(name => ({ name, size: 100000000, browser_download_url: 'https://ignored.invalid/file' })), ...extra });
const windows = release('1.0.2', ['Market.Peek.Setup.1.0.2.exe', 'market-peek-1.0.2-x64.7z']);
const oldMac = release('1.0.1', ['market-peek-1.0.1-universal.dmg']);

function page(language = 'ko') {
  const nodes = new Map();
  for (const id of ['windows-release-version', 'mac-release-version', 'download-link', 'archive-link', 'mac-download-link', 'windows-release-notes']) {
    nodes.set(id, { textContent: 'static', href: 'static-link', firstChild: { textContent: 'static button' }, nextElementSibling: { textContent: 'static size' }, attributes: {},
      removeAttribute(name) { delete this.attributes[name]; if (name === 'href') delete this.href; },
      setAttribute(name, value) { this.attributes[name] = value; },
    });
  }
  const storage = new Map();
  return { nodes, storage, context: { document: { documentElement: { lang: language }, getElementById: id => nodes.get(id) }, AbortSignal,
    window: { localStorage: { getItem: key => storage.get(key), setItem: (key, value) => storage.set(key, value) } } } };
}

test('Windows follows the latest release while an older Mac download is disabled', async () => {
  const p = page();
  await vm.runInNewContext(source, { ...p.context, fetch: async url => {
    assert.match(url, /DukiChoi\/Market-Peek-releases\/releases\?per_page=100&page=1$/);
    return { ok: true, json: async () => [oldMac, windows, release('1.0.3', ['market-peek-1.0.3-universal.dmg'], { draft: true })] };
  } });
  assert.equal(p.nodes.get('windows-release-version').textContent, 'v1.0.2 Beta');
  assert.match(p.nodes.get('download-link').href, /github\.com\/DukiChoi\/Market-Peek-releases\/releases\/download\/v1\.0\.2\/Market\.Peek\.Setup\.1\.0\.2\.exe$/);
  assert.equal(p.nodes.get('mac-release-version').textContent, 'v1.0.2 Beta 준비 중');
  assert.equal(p.nodes.get('mac-download-link').attributes['aria-disabled'], 'true');
  assert.equal(p.nodes.get('mac-download-link').href, undefined);
});

test('matching Mac builds enable the button and update its label and file size', async () => {
  const p = page();
  await vm.runInNewContext(source, { ...p.context, fetch: async () => ({ ok: true, json: async () => [windows, release('1.0.2', ['market-peek-1.0.2-universal.dmg'])] }) });
  const button = p.nodes.get('mac-download-link');
  assert.match(button.href, /v1\.0\.2\/market-peek-1\.0\.2-universal\.dmg$/);
  assert.equal(button.firstChild.textContent, 'macOS용 다운로드 ');
  assert.equal(button.attributes['aria-disabled'], undefined);
  assert.equal(button.nextElementSibling.textContent, '100.0 MB · DMG 설치 파일');
});

test('API errors retain static downloads and a valid cache avoids additional requests', async () => {
  const p = page();
  await vm.runInNewContext(source, { ...p.context, fetch: async () => { throw new Error('offline'); } });
  assert.equal(p.nodes.get('download-link').href, 'static-link');
  p.storage.set('market-peek-downloads-v1', JSON.stringify({ savedAt: Date.now(), releases: [windows, oldMac] }));
  await vm.runInNewContext(source, { ...p.context, fetch: async () => { assert.fail('A fresh cache should avoid another request'); } });
  assert.equal(p.nodes.get('windows-release-version').textContent, 'v1.0.2 Beta');
  assert.equal(p.nodes.get('mac-download-link').href, undefined);
});

test('English downloads retain English labels after release data is refreshed', async () => {
  const p = page('en');
  await vm.runInNewContext(source, { ...p.context, fetch: async () => ({ ok: true, json: async () => [windows, release('1.0.2', ['market-peek-1.0.2-universal.dmg'])] }) });
  assert.equal(p.nodes.get('download-link').nextElementSibling.textContent, '100.0 MB · Korean-language installer');
  assert.equal(p.nodes.get('archive-link').nextElementSibling.textContent, '100.0 MB · Extract and run · Korean-language app');
  assert.equal(p.nodes.get('mac-download-link').firstChild.textContent, 'Download for macOS ');
  assert.equal(p.nodes.get('mac-download-link').nextElementSibling.textContent, '100.0 MB · DMG installer · Korean-language app');
  assert.equal(p.nodes.get('windows-release-notes').textContent, 'v1.0.2 Beta release notes ↗');
  assert.match(p.nodes.get('download-link').href, /Market\.Peek\.Setup\.1\.0\.2\.exe$/);
});

test('an English page can reuse the shared release cache without Korean status messages', async () => {
  const p = page('en-US');
  p.storage.set('market-peek-downloads-v1', JSON.stringify({ savedAt: Date.now(), releases: [windows, oldMac] }));
  await vm.runInNewContext(source, { ...p.context, fetch: async () => { assert.fail('The shared cache should be reused'); } });
  assert.equal(p.nodes.get('mac-release-version').textContent, 'v1.0.2 Beta coming soon');
  assert.equal(p.nodes.get('mac-download-link').firstChild.textContent, 'macOS download coming soon ');
  assert.equal(p.nodes.get('mac-download-link').nextElementSibling.textContent, 'The macOS installer for the latest version is being prepared.');
  assert.equal(p.nodes.get('mac-download-link').href, undefined);
  assert.equal(p.nodes.get('windows-release-notes').textContent, 'v1.0.2 Beta release notes ↗');
});
