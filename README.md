# Aurelian Studios - Showcase Website

Premier automotive photography studio website featuring stunning visual galleries, portfolio showcase, and client inquiries.

## Features

- Full-page hero carousel with automatic image rotation
- Responsive portfolio grid with scroll reveal animations
- Dynamic gallery with high-resolution image display
- Contact form with integrated messaging
- Mobile-responsive design
- Smooth scroll animations and hover effects
- Golden accent theme throughout

## Project Structure

This project is built with:

- **Vite** - Fast build tool and dev server
- **React** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn-ui** - High-quality UI components

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```sh
git clone <YOUR_GIT_URL>
cd aurelian-studio-showcase
```

2. Install dependencies:
```sh
npm install
```

3. Start the development server:
```sh
npm run dev
```

The application will be available at `http://localhost:8080`

## Building for Production

To create a production build:

```sh
npm run build
```

The built files will be in the `dist` directory.

## Project Pages

- **Home** - Landing page with hero carousel and featured portfolio
- **Clients** - Full portfolio showcase with filtering options
- **Gallery** - High-resolution image gallery
- **About** - Studio information and services
- **Contact** - Contact form and studio details

## Customization

### Colors and Theming

The color scheme uses CSS custom properties defined in `src/index.css`. The primary accent color (gold) can be customized by modifying the `--primary` variable.

### Portfolio Data

Portfolio projects are managed in `src/data/portfolio.ts`. Add or modify projects in this file to update the portfolio and gallery sections.

## License

All rights reserved - Aurelian Studios
