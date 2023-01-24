import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://anclsss.github.io/interactive-rating-component-main/",
  plugins: [react()],
});
