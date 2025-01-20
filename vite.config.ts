import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js"

export default defineConfig(({ mode }) => {
  const isDev = (mode === "development")
  const argv = process.argv
  const componentIndex = argv.indexOf("--component")
  const component = componentIndex !== -1 ? argv[componentIndex + 1] : null

  let input = "src/dev.ts";
  if(!isDev){
    if(component === "form"){
      input = "src/form.ts";
    } else if(component === "ro"){
      input = "src/ro.ts";
    }
  }

  return {
    build: {
      target: "esnext",
      outDir: "dist",
      minify: true,
      rollupOptions: {
        input: "src/dev.ts",
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