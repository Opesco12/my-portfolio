import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

const productionHost =
  process.env.VITE_SITE_URL ??
  process.env.VITE_VERCEL_PROJECT_PRODUCTION_URL ??
  process.env.VERCEL_PROJECT_PRODUCTION_URL;

const siteUrl = productionHost
  ? productionHost.startsWith("http")
    ? productionHost.replace(/\/$/, "")
    : `https://${productionHost}`
  : "http://localhost:5173";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: "inject-site-url",
      transformIndexHtml: (html) => html.replaceAll("__SITE_URL__", siteUrl),
    },
  ],
  server: {
    allowedHosts: ["disloyal-baroness.outray.app"],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
