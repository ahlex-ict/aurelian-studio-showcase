/**
 * Dynamic portfolio/gallery loader
 *
 * This file now auto-discovers image files under `src/assets` using Vite's
 * `import.meta.globEager`. To add new shoots or galleries:
 *
 * 1) Create a folder under `src/assets`, e.g. `src/assets/2026-shoot-rome/`
 * 2) Copy your high-resolution images into that folder (jpg, png, webp, avif)
 * 3) Refresh the dev server — images are auto-included.
 *
 * You can optionally add a simple index image by prefixing a file with `01-`
 * to control which image is used as the project's primary thumbnail.
 */

export interface PortfolioProject {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  images: string[];
}

// Use Vite glob to eagerly import all images under src/assets (recursively)
// Using `{ as: 'url' }` returns the URL string for each matched file.
let imagesByFolder = new Map<string, { src: string; alt: string; path: string }[]>();

try {
  // Use Vite glob to eagerly import all images under src/assets (recursively)
  // Using `{ as: 'url' }` returns the URL string for each matched file.
  const modules = import.meta.globEager('/src/assets/**', { as: 'url' }) as Record<string, string>;

  // Collect only image files and group by their immediate parent folder
  const imageExtensions = /\.(jpe?g|png|webp|avif|gif)$/i;

  type Img = { src: string; alt: string; path: string };

  imagesByFolder = new Map<string, Img[]>();

  Object.keys(modules).forEach((p) => {
    try {
      if (!imageExtensions.test(p)) return;

      const parts = p.split('/');
      const fileName = parts.pop() || '';
      const folder = parts.pop() || 'root';
      const maybe = (modules as any)[p];
      const src = typeof maybe === 'string' ? (maybe as string) : (maybe?.default as string) || '';

      if (!src) return;

      const entry: Img = { src, alt: fileName, path: p };

      if (!imagesByFolder.has(folder)) imagesByFolder.set(folder, []);
      imagesByFolder.get(folder)!.push(entry);
    } catch (e) {
      // ignore file-level issues
    }
  });
} catch (err) {
  // If import.meta.globEager fails in the environment, log and continue with empty gallery
  // eslint-disable-next-line no-console
  console.error('Portfolio asset glob failed:', err);
  imagesByFolder = new Map();
}

// Sort images in each folder by filename so numeric prefixes control ordering
imagesByFolder.forEach((arr) => arr.sort((a, b) => a.path.localeCompare(b.path)));

const humanize = (s: string) =>
  s
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, (m) => m.toUpperCase());

// Build portfolioProjects from folders. Folders named 'root' will be flattened into a generic gallery.
export const portfolioProjects: PortfolioProject[] = Array.from(imagesByFolder.entries())
  .filter(([folder, imgs]) => imgs.length > 0)
  .map(([folder, imgs]) => ({
    id: folder,
    title: humanize(folder),
    category: 'Clients',
    description: '',
    image: imgs[0].src,
    images: imgs.map((i) => i.src),
  }));

// Flat gallery images for pages that expect a simple array
export const galleryImages = Array.from(imagesByFolder.values()).flat().map((i) => ({ src: i.src, alt: i.alt }));

/**
 * Notes for maintainers:
 * - To add a new shoot, create `src/assets/<shoot-name>/` and drop full-res images there.
 * - Images are included automatically; use numeric prefixes (01-, 02-) to control order.
 * - If you want a custom title/description, replace this file with a small JSON
 *   metadata mapping or add a simple YAML/JSON sidecar file per folder and extend this loader.
 */
