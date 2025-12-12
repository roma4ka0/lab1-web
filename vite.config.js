import { defineConfig } from "vite";
import { resolve } from "path";
import handlebars from "vite-plugin-handlebars";
import tailwind from "@tailwindcss/vite";

export default defineConfig({
  root: ".",
  publicDir: "public",

  plugins: [
    tailwind(), // ← ВАЖНО: Tailwind должен быть ПЕРВЫМ
    handlebars({
      partialDirectory: resolve(__dirname, "src/partials"),
      context(pagePath) {
        return {
          pageTitle:
            pagePath.includes("index") ? "Головна" :
            pagePath.includes("about") ? "Про нас" :
            pagePath.includes("contacts") ? "Контакти" :
            "Сторінка",

          isIndex: pagePath.includes("index"),
          isAbout: pagePath.includes("about"),
          isContacts: pagePath.includes("contacts"),

          pageCode:
          pagePath.includes("about") ? "about" :
          pagePath.includes("index") ? "main" :
          "contacts",
        };
      },
    }),
  ],

  build: {
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "about.html"),
        contacts: resolve(__dirname, "contacts.html"),
      },
    },
  },
});
