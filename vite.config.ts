import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js"

export default defineConfig(({ mode }) => {
  const isDev = (mode === "development")
  return {
    build: {
      target: "esnext",
      outDir: "dist",
      assetsDir: "",
      minify: true,
      rollupOptions: {
        input: isDev ? "src/dev.ts" : "src/main.ts",
        output: {
          entryFileNames: "index.js",
          format: "iife",
        },
        external: ["medblocks-ui", "medblocks-ui/dist/styles"],
      },
    },
    server: {
      open: true,
      port: 3000,
    },
    plugins: [
      svelte({
        compilerOptions: {
          customElement: true,
        },
      }),
      cssInjectedByJsPlugin(),
    ],
  }
});