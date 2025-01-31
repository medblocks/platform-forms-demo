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
Once your component is ready you can just use the `build` command to bundle the component with all its dependencies such as CSS into one single JS file
```bash
npm run build
```