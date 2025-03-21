# Medblocks Platform Forms Demo

This repo serves as an example on how you can build components for the Medblocks Platform. This example uses Svelte to build a web component that has a few defined methods to ensure that it works with the platform. You can notice that the top of each svelte component has specific tag that defines its web-component tag, here is an example
```svelte
<svelte:options customElement="demo-form" />
```

There are two example components defined in the `src/examples`:
1. `Form.svelte` contains form web component
2. `ROComponent.svelte` contains the Read only component that is used to display data from existing form entries.

The `src/Component.svelte` contains the same code as `Form.svelte` to get you started quickly.

## Getting Started
Clone the repository
```bash
git clone https://github.com/medblocks/platform-forms-demo
```

Install dependencies
```bash
npm install
```

Run the dev server
```bash
npm run dev
```
This should open the dev server in your browser.

## Building for Production
Once your component is ready you can build all components registered in `src/index.ts` as self-contained JavaScript files:

```bash
node ./scripts/build-all.js
```

This will create a separate JavaScript file for each component in the `dist` directory, with all dependencies bundled in.

## Build Architecture

This project uses a custom build system to generate standalone web components that can be easily integrated into the Medblocks Platform:

### How Multiple Component Builds Work

1. **Component Registration**: All components are registered in `src/index.ts`. This file serves as the central registry for all Svelte components.

2. **Build Script**: The `scripts/build-all.js` script parses the `src/index.ts` file and identifies all Svelte components that should be built.

3. **Individual Builds**: For each component, the script runs a separate Vite build with the component's file path passed via an environment variable.

4. **Self-Contained Output**: Each component is compiled into a standalone JavaScript file that includes all necessary code (except for external dependencies marked in `vite.config.ts`).

### Adding New Components

To add a new component to the build:

1. Create your Svelte component with the `customElement` option:
   ```svelte
   <svelte:options customElement="your-component-name" />
   ```

2. Import and export your component in `src/index.ts`:
   ```typescript
   import YourComponent from './path/to/YourComponent.svelte';
   
   export { 
     // ...existing exports...
     YourComponent
   };
   ```

3. Run the build script, and your component will automatically be included.

### Using Built Components

After building, you'll have standalone JavaScript files in the `dist` directory that can be used directly in any HTML file:

```html
<script src="path/to/dist/YourComponent.js"></script>
<your-component-name></your-component-name>
```

The external dependencies (`medblocks-ui` and `medblocks-ui/dist/styles`) need to be included separately in your HTML if your components use them.