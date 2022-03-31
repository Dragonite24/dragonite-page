import React from 'react'
import ReactDOM from 'react-dom'
import { Switch } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import { Provider as ReduxProvider } from 'react-redux'

import { createBrowserHistory } from 'history'
import { configureStore } from 'configure-store'

import { DimensionsProvider, useDimensions } from 'app/shared/dimensions'
import { GlobalStyles, theme, ThemeProvider } from 'ui/styles'
import { Sidebar } from 'app/features/sidebar'

import { HomePage } from 'app/pages'
import { sections } from 'nav-sections'
import { Header } from 'app/features/navbar'

const history = createBrowserHistory()
const store = configureStore(history)

const Root: React.FC = () => {
  const { type } = useDimensions()
  const isNotDesktop = type === 'original' || type === 'desktop'

  return (
    <ReduxProvider store={store}>
      <DimensionsProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <ConnectedRouter history={history}>
            {isNotDesktop ? <Sidebar sections={sections} /> : <Header />}
            <Switch>{<HomePage sections={sections} />}</Switch>
          </ConnectedRouter>
        </ThemeProvider>
      </DimensionsProvider>
    </ReduxProvider>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'))
