import React, { useState, useRef } from 'react'
import Head from './Head'
import Header from './Header'
import Footer from './Footer'
import { Sidebar } from './Sidebar'
import { Box } from 'rebass'

const Layout = (props) => {
  const fullwidth = props.location.pathname === '/' || props.location.pathname === '/reforml/'
  const [menu, setMenu] = useState(false)
  const nav = useRef(null)

  return (
    <Box sx={{
      display: 'grid',
      gridTemplateAreas: `
      "head"
      "content"
      `,
      gridTemplateRows: 'auto 1fr',
      position: 'fixed',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0
    }}
    >
      <Box sx={{ gridArea: 'head' }}>
        <Head {...props} />
        <Header
          fullwidth={fullwidth}
          menu={menu}
          setMenu={setMenu}
          nav={nav}
        />
      </Box>
      <Box sx={{ gridArea: 'content', overflowY: 'auto' }}>
        {!fullwidth ? (
          <Sidebar
            {...props}
            nav={nav}
            open={menu}
            setMenu={setMenu}
          >
            <main id='content'>
              {props.children}
            </main>
          </Sidebar>
        ) : (
          <main id='content'>
            {props.children}
          </main>
        )}
        {!fullwidth && <Footer />}
      </Box>
    </Box>
  )
}

export default Layout
