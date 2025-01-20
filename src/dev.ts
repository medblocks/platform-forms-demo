import { mount } from 'svelte'
import Form from './Form.svelte'

const app = mount(Form, {
  target: document.getElementById('app')!,
})

export default app
