import { defineConfig } from "vite";
import { resolve } from "path";
import handlebars from "vite-plugin-handlebars";

export default defineConfig({
  root: ".",
  publicDir: "public",

  plugins: [
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
