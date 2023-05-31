import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 500000, // Set the limit to 500KB
  },
  rollupOptions: {
    output: {
      manualChunks: {
        vendor: ["react", "react-dom"],
        utils: ["lodash", "moment"],
      },
    },
  },
});
