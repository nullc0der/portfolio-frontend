import { defineConfig } from "vite";
import { sentryVitePlugin } from "@sentry/vite-plugin";
import react from "@vitejs/plugin-react-swc";
import checker from "vite-plugin-checker";
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
    checker({
      eslint: {
        lintCommand:
          "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
      },
    }),
    visualizer({ filename: "rollup_visualizer/stats.html", open: true }),
    sentryVitePlugin({
      org: process.env.SENTRY_ORG,
      project: process.env.SENTRY_PROJECT,
      authToken: process.env.SENTRY_AUTH_TOKEN,
    }),
  ],
  css: {
    modules: {
      localsConvention: "camelCaseOnly",
    },
  },
  build: {
    sourcemap: true,
  },
});
