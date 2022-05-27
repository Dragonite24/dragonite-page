import React from 'react'
import ReactDOM from 'react-dom'
import { Switch } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import { Provider as ReduxProvider } from 'react-redux'

import { createBrowserHistory } from 'history'
import { configureStore } from 'configure-store'

import { GlobalStyles, theme, ThemeProvider } from 'ui/styles'
import { ScrollDirectionProvider, useDimensions } from 'app/shared'
import { Sidebar } from 'app/features/sidebar'
import { Header } from 'app/features/navbar'
import { HomePage } from 'app/pages'
import { sections } from 'nav-sections'

const history = createBrowserHistory()
const store = configureStore(history)

const Root: React.FC = () => {
  const { isDesktop, isOriginal } = useDimensions()

  return (
    <ReduxProvider store={store}>
      <ThemeProvider theme={theme}>
        <ScrollDirectionProvider>
          <GlobalStyles />
          <ConnectedRouter history={history}>
            {isDesktop || isOriginal ? <Sidebar /> : <Header />}
            <Switch>{<HomePage sections={sections} />}</Switch>
          </ConnectedRouter>
        </ScrollDirectionProvider>
      </ThemeProvider>
    </ReduxProvider>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'))
