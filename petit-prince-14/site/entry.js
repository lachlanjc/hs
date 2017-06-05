import React from 'react'
import { render } from 'react-dom'
import cxs from 'cxs/monolithic'
import App from './App'

cxs('*', { boxSizing: 'border-box' })
cxs('body', {
  fontFamily: '-apple-system, BlinkMacSystemFont, Roboto, sans-serif',
  lineHeight: 1.5,
  margin: 0
})

render(<App />, document.getElementById('app'))
