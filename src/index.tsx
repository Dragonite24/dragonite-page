import React from 'react'
import ReactDOM from 'react-dom'

import { GlobalStyles, theme, ThemeProvider } from 'ui/styles'

const Root: React.FC = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
  </ThemeProvider>
)

ReactDOM.render(<Root />, document.getElementById('root'))
