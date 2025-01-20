import { mount } from 'svelte'
import Form from './Component.svelte'

const app = mount(Form, {
  target: document.getElementById('app')!,
})

export default app
