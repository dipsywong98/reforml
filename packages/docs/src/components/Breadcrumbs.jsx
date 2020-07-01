import { Box, Flex } from 'rebass'
import { Styled } from 'theme-ui'
import { Link } from 'gatsby'
import React from 'react'
import { globalHistory } from "@reach/router/lib/history"

const breadcrumbRoutes = [
  'guides',
  'recipes'
]
export const Breadcrumbs = ({
  title
}) => {
  const { location } = globalHistory
  const [n, base, path] = location.pathname.split('/')
  if (!breadcrumbRoutes.includes(base)) return false
  if (!path) return false

  return (
    <Flex
      sx={{
        fontWeight: 'bold',
        mb: 4,
        textTransform: 'capitalize'
      }}>
      <Styled.a
        as={Link}
        to={'/' + base}>
        {base}
      </Styled.a>
      <Box px={2}>
        /
      </Box>
      <Box>
        {title || path}
      </Box>
    </Flex>
  )
}
