import React from 'react'
import { Box, Flex } from 'rebass'
import { Pagination } from '@theme-ui/sidenav'
import Nav from './nav.mdx'

export const Sidebar = props =>
  <Flex
    sx={{
      display: 'grid',
      gridTemplateAreas: `
      "sidebar main"
      `
    }}
  >
    <Box
      ref={props.nav}
      open={props.open}
      onClick={e => {
        props.setMenu(false)
      }}
      onBlur={e => {
        props.setMenu(false)
      }}
      onFocus={e => {
        props.setMenu(true)
      }}
      style={{
        transform: props.open ? 'translateX(0)' : 'translateX(-100%)',
      }}
      sx={{
        position: [ 'fixed', 'sticky' ],
        zIndex: 100,
        top: 0,
        left: 0,
        bottom: [0, 'auto'],
        width: [ 256, 256, 320 ],
        minWidth: 0,
        maxHeight: '100vh',
        overflowY: 'auto',
        WebkitOverflowScrolling: 'touch',
        flex: 'none',
        mt: [64, 0],
        pb: 3,
        transition: 'transform .2s ease-out',
        transform: [, 'none !important'],
        ul: {
          listStyle: 'none',
          padding: 0,
        },
        a: {
          variant: 'links.nav',
        },
        'li > ul > li > a': {
          pl: '24px',
        },
        'li > ul > li > ul > li > a': {
          pl: '36px',
        },
        'li > ul > li > ul > li > ul > li > a': {
          pl: '48px',
        },
        backgroundColor: 'bgs.1',
        gridArea: 'sidebar'
      }}>
      <Nav />
    </Box>
    <Box
      sx={{
        width: '100%',
        minWidth: 0,
        maxWidth: 768,
        minHeight: 'calc(100vh - 64px)',
        mr: 'auto',
        px: [ 3, 4 ],
        pb: 5,
        gridArea: 'main'
      }}>
      {props.children}
      {/*<Nav*/}
      {/*  pathname={props.location.pathname}*/}
      {/*  components={{*/}
      {/*    wrapper: Pagination*/}
      {/*  }}*/}
      {/*/>*/}
    </Box>
  </Flex>
