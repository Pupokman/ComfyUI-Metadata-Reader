import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';

const root = process.cwd();
const read = (file) => fs.readFileSync(path.join(root, file), 'utf8');

function extractBase64(source, label) {
  const match = source.match(/(?:const\s+b64\s*=|__CMR_APP_B64\s*(?:\+?=))\s*'([A-Za-z0-9+/=]+)'/);
  if (!match) throw new Error(`Could not read compressed payload from ${label}`);
  return match[1];
}

const cssBase64 = extractBase64(read('payload-css.js'), 'payload-css.js');
const css = zlib.gunzipSync(Buffer.from(cssBase64, 'base64')).toString('utf8');

let appBase64 = '';
for (let part = 1; part <= 8; part++) {
  const file = `app-payload-${String(part).padStart(2, '0')}.js`;
  appBase64 += extractBase64(read(file), file);
}
const app = zlib.gunzipSync(Buffer.from(appBase64, 'base64')).toString('utf8');

let html = read('index.html');
html = html.replace(
  /\s*<script src="payload-css\.js"><\/script>\s*/,
  `\n  <style>\n${css.replace(/<\/style/gi, '<\\/style')}\n  </style>\n`,
);
html = html.replace(/\s*<script src="app-payload-\d{2}\.js"><\/script>\s*/g, '\n');
html = html.replace(
  /\s*<script src="app-payload-load\.js"><\/script>\s*/,
  `\n  <script>\n${app.replace(/<\/script/gi, '<\\/script')}\n  </script>\n`,
);

const outputDir = path.join(root, 'dist');
fs.mkdirSync(outputDir, { recursive: true });
const output = path.join(outputDir, 'ComfyUI-Metadata-Reader-v4.4.html');
fs.writeFileSync(output, html, 'utf8');
console.log(`Built ${path.relative(root, output)} (${fs.statSync(output).size} bytes)`);
