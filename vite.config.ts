import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig(({ mode }) => {
  const isProd = mode === "production";

  return {
    // IMPORTANT: base path for Vercel
    base: "/",

    // React plugin only (clean + stable)
    plugins: [react()],

    // Project structure
    root: path.resolve(__dirname, "client"),

    resolve: {
      alias: {
        "@": path.resolve(__dirname, "client", "src"),
        "@shared": path.resolve(__dirname, "shared"),
        "@assets": path.resolve(__dirname, "attached_assets"),
      },
    },

    build: {
      // MUST match Vercel Output Directory
      outDir: path.resolve(__dirname, "dist/public"),
      emptyOutDir: true,

      // Better production output
      sourcemap: false,
      rollupOptions: {
        output: {
          manualChunks: undefined,
        },
      },
    },

    server: {
      port: 5173,
      strictPort: true,
    },
  };
});
