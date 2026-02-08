/**
 * Portfolio & Gallery Configuration
 *
 * EASY SETUP: Add folders to `src/assets`, then import them below and define which
 * images display where.
 *
 * HOW TO ADD NEW SHOOTS:
 * 1) Create a folder under `src/assets`, e.g. `src/assets/2026-shoot-rome/`
 * 2) Drag your high-res images into that folder
 * 3) Import the folder below (example at bottom)
 * 4) Add new entries to portfolioProjects or galleryImages as needed
 * 5) Refresh the dev server
 *
 * FOLDER IMPORT EXAMPLE:
 * const myShootImages = import.meta.glob('/src/assets/my-shoot/*.{jpg,png,webp}', { eager: true });
 */

// ============================================================================
// IMPORT YOUR ASSET FOLDERS HERE (add glob imports for new shoots)
// ============================================================================

const brisbaneImages = import.meta.glob('/src/assets/Brisbane/*.{jpg,png,webp}', { eager: true });
const mustangImages = import.meta.glob('/src/assets/Mustang/*.{jpg,png,webp}', { eager: true });
const gympieImages = import.meta.glob('/src/assets/Gympie Medical Transport/*.{jpg,png,webp}', { eager: true });

// Helper: extract image URLs from glob results
type GlobResult = Record<string, { default?: string } | string>;
const extractUrls = (globResult: GlobResult): string[] => {
  try {
    return Object.values(globResult)
      .map((m) => (typeof m === 'string' ? m : (m as { default?: string })?.default || ''))
      .filter(Boolean)
      .sort(); // alphabetical order for consistency
  } catch (e) {
    // If glob fails, return empty array (graceful degradation)
    return [];
  }
};

// ============================================================================
// INTERFACE & PORTFOLIO PROJECTS (customize title, description, category, order)
// ============================================================================

export interface PortfolioProject {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  images: string[];
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 'brisbane',
    title: 'Brisbane',
    category: 'Clients',
    description: 'Photography from Brisbane city',
    image: extractUrls(brisbaneImages)[0] || '',
    images: extractUrls(brisbaneImages).length > 0 ? extractUrls(brisbaneImages) : [],
  },
  {
    id: 'mustang',
    title: 'Mustang',
    category: 'Clients',
    description: 'Premium Mustang photography series',
    image: extractUrls(mustangImages)[0] || '',
    images: extractUrls(mustangImages).length > 0 ? extractUrls(mustangImages) : [],
  },
  {
    id: 'gympie',
    title: 'Gympie Medical Transport',
    category: 'Clients',
    description: 'Commercial vehicle photography',
    image: extractUrls(gympieImages)[0] || '',
    images: extractUrls(gympieImages).length > 0 ? extractUrls(gympieImages) : [],
  },
].filter((project) => project.images.length > 0); // Only include projects with images

// ============================================================================
// GALLERY IMAGES (used on the gallery page)
// ============================================================================

export const galleryImages = [
  ...extractUrls(brisbaneImages),
  ...extractUrls(mustangImages),
  ...extractUrls(gympieImages),
].map((src) => ({ src, alt: 'Automotive photography' }));

/**
 * TO ADD A NEW SHOOT:
 * 1) Create folder: src/assets/my-new-shoot/
 * 2) Add images (jpg, png, webp)
 * 3) Import at the top: const myShootImages = import.meta.glob('/src/assets/my-new-shoot/*.{jpg,png,webp}', { eager: true });
 * 4) Add entry to portfolioProjects[] array above
 * 5) Optionally add to galleryImages if you want it visible on the gallery page
 * 6) Refresh dev server
 */
