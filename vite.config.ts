import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  server: {
    allowedHosts: [
      '83c1abcf-9358-42ab-ac72-7de07daeb08d-00-1ww7zrmucw514.picard.replit.dev'
    ]
  },
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        icon: true,
        // This will transform your SVG to a React component
        exportType: "named",
        namedExport: "ReactComponent",
      },
    }),
  ],
});
