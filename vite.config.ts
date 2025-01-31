import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js"

export default defineConfig(({ command }) => {
  const isProduction = command === 'build'
  return {
    build: {
      target: "esnext",
      outDir: "dist",
      minify: true,
      rollupOptions: {
        input: isProduction ? "src/form.ts" : "src/dev.ts",
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
