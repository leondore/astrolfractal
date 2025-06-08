// @ts-check
import { fileURLToPath, URL } from "node:url";
import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@global.css": fileURLToPath(
          new URL("./src/styles/global.css", import.meta.url),
        ),
      },
    },
  },

  i18n: {
    locales: ["es", "en"],
    defaultLocale: "es",
  },

  experimental: {
    fonts: [
      {
        name: "Inter",
        provider: fontProviders.google(),
        cssVariable: "--font-inter",
        weights: [400, 700, 800],
        subsets: ["latin"],
        styles: ["normal"],
      },
      {
        name: "Instrument Serif",
        provider: fontProviders.google(),
        cssVariable: "--font-instrument-serif",
      },
    ],
  },

  integrations: [alpinejs()],
});
