import React from 'react'
import {
  LiveProvider,
  LivePreview,
  LiveEditor,
  LiveError
} from '@jxnblk/react-live'
import { ThemeProvider } from 'theme-ui'
import * as Rebass from 'rebass'
import * as RebassForms from '@rebass/forms'
import * as RebassLayout from '@rebass/layout'
import Prism from '@theme-ui/prism'
import { Flex, Box } from 'rebass'
import { countries } from 'countries-list'
import * as Reforml from 'reforml'
import jsyaml from 'js-yaml'
import DatePicker from './DatePicker'
import 'reforml/dist/index.css'

const scope = {
  ...Rebass,
  ...RebassForms,
  ...RebassLayout,
  ...Reforml,
  ...React,
  ThemeProvider,
  jsyaml,
  DatePicker,
  props: {
    image: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=2048&q=20',
    countries
  }
}

scope.Switch = props => {
  const [active, setActive] = React.useState(true)
  const toggle = () => setActive(!active)

  return (
    <RebassForms.Switch
      checked={active}
      onClick={toggle}
      {...props}
    />
  )
}

const Preview = ({ fullwidth, ...props }) =>
  <Box
    as={LivePreview}
    {...props}
    sx={{
      p: fullwidth ? 0 : 3
    }}
  />

const Editor = props =>
  <Box
    {...props}
    as={LiveEditor}
    sx={{
      variant: 'styles.pre',
      outline: 'none',
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0
    }}
  />

const Err = props =>
  <Box
    {...props}
    as={LiveError}
    sx={{
      fontFamily: 'monospace',
      fontSize: 1,
      p: 3,
      overflowX: 'auto',
      color: 'white',
      bg: 'red'
    }}
  />

const Code = ({
  className,
  ...props
}) => {
  const lang = 'jsx'

  if (props.preview) {
    const code = props.children
    return (
      <LiveProvider
        {...props}
        code={code}
        scope={scope}>
        <Preview fullwidth/>
      </LiveProvider>
    )
  }

  if (props.live) {
    const code = props.children
    return (
      <LiveProvider
        {...props}
        code={code}
        scope={scope}>
        <Flex
          sx={{
            mb: 4,
            border: t => `1px solid ${t.colors.muted}`,
            borderRadius: 2,
            flexDirection: ['column',null,'row']
          }}>
          <Box
            sx={{
              flex: 1,
              position: 'relative'
            }}>
            <Editor
              className={className}
            />
            <Err/>
            <Box
              sx={{
                position: 'absolute',
                zIndex: 1,
                top: 0,
                right: 0,
                m: 1,
                variant: 'text.caps',
                fontSize: 0,
                fontWeight: 'bold',
                color: 'accent'
              }}>
              Live Demo
            </Box>
          </Box>
          <Box as={Preview} sx={{flex: 1}}/>
        </Flex>
      </LiveProvider>
    )
  }

  return (
    <Prism
      {...props}
      className={className}
    />
  )
}
export default Code
