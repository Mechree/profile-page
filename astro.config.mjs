// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: 'https://michael-mccain.github.io',
  base:'profile-page',
  vite: {
    plugins: [tailwindcss()],
  },
});