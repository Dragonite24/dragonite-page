import React from 'react'
import ReactDOM from 'react-dom'
import { Switch } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'

import { Provider as ReduxProvider } from 'react-redux'
import { createBrowserHistory } from 'history'
import { configureStore } from 'configure-store'

import { GlobalStyles, theme, ThemeProvider } from 'ui/styles'
import { Sidebar } from 'app/features/sidebar'
import { Home } from 'app/pages'

const history = createBrowserHistory()
const store = configureStore(history)

const Root: React.FC = () => (
  <ReduxProvider store={store}>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ConnectedRouter history={history}>
        <Sidebar />
        <Switch>{<Home />}</Switch>
      </ConnectedRouter>
    </ThemeProvider>
  </ReduxProvider>
)

ReactDOM.render(<Root />, document.getElementById('root'))
