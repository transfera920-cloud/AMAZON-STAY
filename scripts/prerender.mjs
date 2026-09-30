import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

async function prerender() {
  const rootDir = process.cwd();
  const templatePath = path.resolve(rootDir, 'dist/index.html');
  const serverEntryPath = path.resolve(rootDir, 'dist-server/entry-server.js');

  if (!fs.existsSync(templatePath)) {
    throw new Error(`Template not found at ${templatePath}`);
  }

  if (!fs.existsSync(serverEntryPath)) {
    throw new Error(`Server build entry not found at ${serverEntryPath}`);
  }

  const { render } = await import(pathToFileURL(serverEntryPath).href);
  const appHtml = render();

  const template = fs.readFileSync(templatePath, 'utf-8');
  
  const finalHtml = template.replace(
    /<div id="root">[\s\S]*?<\/div>/,
    `<div id="root">${appHtml}</div>`
  );

  fs.writeFileSync(templatePath, finalHtml, 'utf-8');
  console.log(`[prerender] Successfully prerendered static HTML into dist/index.html (${appHtml.length} bytes)`);
}

prerender().catch((err) => {
  console.error('[prerender] Failed:', err);
  process.exit(1);
});
