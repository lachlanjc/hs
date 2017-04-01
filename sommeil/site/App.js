
import React from 'react'

import { Box } from 'axs'

import Header from './Header'
import Body from './Body'
import Footer from './Footer'

export default () =>
  <Box is='main' css={{ fontFamily: '"Avenir Next", Avenir, -apple-system, Helvetica, sans-serif' }}>
    <Header />
    <Body />
    <Footer />
  </Box>
