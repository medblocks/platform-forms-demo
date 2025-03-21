import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'
import path from 'node:path'

export default defineConfig(({ command }) => {
  if (command === 'serve') {
    return {
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
      build: {
        minify: true,
        rollupOptions: {
          input: "src/dev.ts",
        }
      }
    }
  } else {
    // Build a single Svelte file specified by SVELTE_FILE
    const entryFile = process.env.SVELTE_FILE || "src/Component.svelte"
    const baseName = path.basename(entryFile, ".svelte")
    return {
      build: {
        outDir: "dist",
        emptyOutDir: false,
        target: "esnext",
        minify: true,
        lib: {
          entry: entryFile,
          name: baseName,
          formats: ["es"],
          fileName: baseName
        },
        rollupOptions: {
          output: {
            chunkFileNames: `${baseName}-chunk.js`,
            manualChunks: undefined,
            format: 'iife',
          },
          external: ["medblocks-ui", "medblocks-ui/dist/styles"],
        },
      },
      plugins: [
        svelte({
          compilerOptions: {
            customElement: true,
          },
          emitCss: false,
        }),
        cssInjectedByJsPlugin(),
      ]
    }
  }
});
