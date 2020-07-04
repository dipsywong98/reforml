import React from 'react'
import { Helmet } from 'react-helmet'
import { Breadcrumbs } from './Breadcrumbs'

export const wrapper = ({
  title,
  ...props
}) => {
  const children = React.Children.toArray(props.children)
    .reduce((acc, child) => {
      const type = child.props.mdxType
      if (type !== 'h1') return [ ...acc, child ]
      return [
        ...acc,
        child,
        <Breadcrumbs key='breadcrumbs' title={title} />,
      ]
    }, [])

  return (
    <>
      {title && (
        <Helmet>
          <title>{title} | Reforml</title>
        </Helmet>
      )}
      {children}
    </>
  )
}
