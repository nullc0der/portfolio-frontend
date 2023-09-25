import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import checker from "vite-plugin-checker";
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
  ],
});
