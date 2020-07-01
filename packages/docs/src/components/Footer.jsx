import React from 'react'
import {
  Box,
  Flex,
  Link,
} from 'rebass'

const Footer = props =>
  <Box
    as='footer'
    py={5}
    color='background'
    bg='text'
  >
    <Box
      sx={{
        maxWidth: 'wide',
        mx: 'auto',
        px: 3,
      }}>
      <Link href='/' variant='nav'>Reforml</Link>
      <Link href='/getting-started' variant='nav'>Docs</Link>
      <Link href='https://github.com/dipsywong98/reforml' variant='nav'>GitHub</Link>
    </Box>
  </Box>

export default Footer
