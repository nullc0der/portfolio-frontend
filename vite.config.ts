import { defineConfig, splitVendorChunkPlugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import checker from "vite-plugin-checker";
import viteImagemin from "vite-plugin-imagemin";
import { visualizer } from "rollup-plugin-visualizer";
import path from "path";

const projectRoot = path.resolve(__dirname);

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },
  resolve: {
    alias: { "@": path.resolve(projectRoot, "src") },
  },
  plugins: [
    react(),
    splitVendorChunkPlugin(),
    checker({
      eslint: {
        lintCommand:
          "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
      },
    }),
    viteImagemin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false,
      },
      optipng: {
        optimizationLevel: 7,
      },
      mozjpeg: {
        quality: 20,
      },
      pngquant: {
        quality: [0.8, 0.9],
        speed: 4,
      },
      svgo: {
        plugins: [
          {
            name: "removeViewBox",
          },
          {
            name: "removeEmptyAttrs",
            active: false,
          },
        ],
      },
    }),
    visualizer({ filename: "rollup_visualizer/stats.html", open: true }),
  ],
  css: {
    modules: {
      localsConvention: "camelCaseOnly",
    },
  },
});
