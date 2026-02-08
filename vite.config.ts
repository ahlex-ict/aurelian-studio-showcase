import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // Use relative base in production so GitHub Pages (project site) serves assets correctly
  base: mode === "development" ? "/" : "./",
  server: {
    host: "::",
    port: 8080,
    // Security middleware for development
    middlewareMode: false,
    headers: {
      "X-Content-Type-Options": "nosniff",
      "X-Frame-Options": "DENY",
      "X-XSS-Protection": "1; mode=block",
      "Referrer-Policy": "strict-origin-when-cross-origin",
      "Permissions-Policy": "geolocation=(), microphone=(), camera=(), payment=()",
      "Content-Security-Policy": "default-src 'self'; img-src 'self' data: https:; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; font-src 'self' https://fonts.googleapis.com; connect-src 'self' https:; frame-ancestors 'none'; base-uri 'self'; form-action 'self'",
      "Strict-Transport-Security": "max-age=31536000; includeSubDomains; preload",
      "X-Permitted-Cross-Domain-Policies": "none",
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      input: path.resolve(__dirname, "index.html"),
    },
    // Minimize source maps in production to reduce attack surface
    sourcemap: mode === "development",
  },
}));
