
import React from 'react'
import ReactDOM from 'react-dom'
import { colors } from './config'
import palx from 'palx'
import { config } from 'axs'
import cxsMonolithic from 'cxs/monolithic'
import App from './App'

cxsMonolithic('*', { boxSizing: 'border-box' })

cxsMonolithic('body', {
  margin: 0,
  fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
  lineHeight: 1.5,
  color: colors.black
})

config.set({
  colors: palx(colors.primary)
})

ReactDOM.render(<App />, document.getElementById('app'))
