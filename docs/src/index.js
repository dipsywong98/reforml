import React from 'react'
import Layout from './components/Layout'

export { default as Layout } from './components/Layout'
export * from './components/blocks'
export { default as Note } from './components/Note'
export { default as Logo } from './components/Logo'
export { default as RecipeCard } from './components/RecipeCard'

export const wrapPageElement = ({ element, props }) =>
  <Layout {...props}>
    {element}
  </Layout>
