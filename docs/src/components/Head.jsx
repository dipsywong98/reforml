import React from 'react'
import { Helmet } from 'react-helmet'
import pkg from 'reforml/package.json'

const Head = props => {
  const title = [props.title, 'Reforml'].filter(Boolean).join(' | ')

  return (
    <Helmet
      htmlAttributes={{
        lang: 'en-us'
      }}
    >
      <title>{title}</title>
      <link rel='icon' href='/icon.png' />
      <meta name='description' content={pkg.description} />
    </Helmet>
  )
}
export default Head
