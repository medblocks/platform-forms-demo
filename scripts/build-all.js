import { readFileSync, existsSync, mkdirSync } from 'fs'
import { join, basename } from 'path'
import { spawnSync } from 'child_process'

// Create dist directory if it doesn't exist
const distDir = join(process.cwd(), 'dist')
if (!existsSync(distDir)) {
  mkdirSync(distDir);
}

// Parse index.ts to get Svelte component paths
const indexFile = join(process.cwd(), 'src/index.ts')
const content = readFileSync(indexFile, 'utf-8')
const matches = [...content.matchAll(/import\s+\w+\s+from\s+['"](.+\.(?:svelte))['"]/g)]
const buildList = matches.map(m => join(process.cwd(), 'src', m[1].replace('./', '')))

console.log("Building files:", buildList)

// First build clears the dist directory
let firstBuild = true;

for (const file of buildList) {
  console.log(`\n=== Building ${file} ===`)
  const componentName = basename(file, '.svelte')
  
  // Set environment variable properly
  const env = { 
    ...process.env, 
    SVELTE_FILE: file 
  }
  
  console.log(`Environment: SVELTE_FILE=${file}`)
  
  const result = spawnSync('npx', ['vite', 'build', '--emptyOutDir', firstBuild], {
    stdio: 'inherit',
    env,
    shell: true
  })
  
  if (result.status !== 0) {
    console.error(`Build failed for ${file} with status ${result.status}`)
    process.exit(result.status)
  }
  
  // Check if output file exists
  const outputFile = join(distDir, `${componentName}.js`)
  if (!existsSync(outputFile)) {
    console.error(`Expected output file ${outputFile} not found!`)
    process.exit(1)
  } else {
    console.log(`Successfully built: ${outputFile}`)
  }
  
  firstBuild = false
}

console.log('\nAll builds completed successfully!')
