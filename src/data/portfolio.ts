import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";

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
    id: "aurora-nights",
    title: "Aurora Nights",
    category: "Editorial",
    description: "Capturing the ethereal beauty of hypercars beneath the dancing northern lights. A journey to the Arctic Circle resulted in this stunning series.",
    image: portfolio1,
    images: [portfolio1, portfolio4],
  },
  {
    id: "neon-dreams",
    title: "Neon Dreams",
    category: "Commercial",
    description: "Retro-futuristic automotive photography blending classic Americana with modern automotive design. Shot at iconic roadside locations.",
    image: portfolio2,
    images: [portfolio2],
  },
  {
    id: "velocity",
    title: "Velocity",
    category: "Action",
    description: "High-speed motion photography capturing the raw power and dynamic movement of sports cars through scenic forest roads.",
    image: portfolio3,
    images: [portfolio3, portfolio6],
  },
  {
    id: "shadows",
    title: "Shadows",
    category: "Studio",
    description: "Moody studio photography emphasizing the sculptural beauty of automotive design through dramatic lighting and atmospheric effects.",
    image: portfolio4,
    images: [portfolio4, portfolio1],
  },
  {
    id: "italian-dreams",
    title: "Italian Dreams",
    category: "Travel",
    description: "A photographic journey through the Italian Dolomites, showcasing supercars against breathtaking mountain village backdrops.",
    image: portfolio5,
    images: [portfolio5, portfolio6],
  },
  {
    id: "coastal-drive",
    title: "Coastal Drive",
    category: "Aerial",
    description: "Dramatic aerial perspectives capturing sports cars navigating stunning coastal roads. Shot from helicopters and drones.",
    image: portfolio6,
    images: [portfolio6, portfolio3],
  },
];

export const galleryImages = [
  { src: portfolio1, alt: "Hypercar under aurora borealis" },
  { src: portfolio2, alt: "Sports car at neon diner" },
  { src: portfolio3, alt: "Motion blur forest drive" },
  { src: portfolio4, alt: "Studio shot with smoke" },
  { src: portfolio5, alt: "Red supercar in Dolomites" },
  { src: portfolio6, alt: "Aerial coastal road shot" },
];
