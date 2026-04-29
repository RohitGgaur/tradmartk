import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import postcss from 'postcss';
import prefixSelector from 'postcss-prefix-selector';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function should_exclude(selector) {
  const s = selector.trim();
  if (!s) return true;
  if (s.startsWith('@')) return true;
  if (s.includes('body.cursor-hover')) return true;
  if (s === 'html' || s === 'body' || s.startsWith('html ') || s.startsWith('body ')) return true;
  if (s === ':root' || s.startsWith('*')) return true;
  /* Shared navbar dropdown + mobile subnav — must stay global (drafting + patent-services routes). */
  if (/nav-item-dd|\.nav-dd-|\.md-dd-/.test(s)) return true;
  return false;
}

async function prefix_file(input_path, output_path, prefix_class) {
  const css = fs.readFileSync(input_path, 'utf8');
  const result = await postcss([
    prefixSelector({
      prefix: prefix_class,
      transform(prefix, selector, prefixedSelector) {
        const parts = selector.split(',').map((p) => p.trim());
        const out = parts
          .map((sel) => (should_exclude(sel) ? sel : `${prefix} ${sel}`))
          .join(', ');
        return out;
      },
    }),
  ]).process(css, { from: undefined });

  fs.writeFileSync(output_path, result.css);
}

const root = path.join(__dirname, '..');
await prefix_file(
  path.join(root, 'scripts', 'patent_raw.css'),
  path.join(root, 'src', 'patent_services_page.css'),
  '.page-patent-services',
);

await prefix_file(
  path.join(root, 'src', 'index.css'),
  path.join(root, 'src', 'drafting_page.css'),
  '.page-drafting',
);

console.log('prefixed: patent_services_page.css, drafting_page.css');
