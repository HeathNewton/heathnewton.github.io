import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import viteSvgo from "vite-plugin-svgo";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  base: "/",
  plugins: [
    react(),
    viteSvgo(),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), "src/icons")],
      symbolId: "icon-[name]",
      inject: "body-last",
      customDomId: "__svg__icons__dom__",
    }),
  ],
});
