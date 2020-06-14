import { unmountComponentAtNode } from 'react-dom'

export let container: Element | null = null
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement('div')
  document.body.appendChild(container)
})

afterEach(() => {
  // cleanup on exiting
  if (container !== null) {
    unmountComponentAtNode(container)
    container.remove()
    container = null
  }
})
