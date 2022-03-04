import { Home } from 'app/pages'
import React from 'react'
import ReactDOM from 'react-dom'

import { GlobalStyles, theme, ThemeProvider } from 'ui/styles'

const Root: React.FC = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Home />
  </ThemeProvider>
)

ReactDOM.render(<Root />, document.getElementById('root'))
