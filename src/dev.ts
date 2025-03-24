import { mount } from 'svelte'
import Container from './scaffold/Container.svelte'

const app = mount(Container, {
  target: document.getElementById('app')!,
})

export default app
