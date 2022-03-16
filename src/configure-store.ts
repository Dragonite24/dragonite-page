import { routerMiddleware } from 'connected-react-router';
import { createStore, applyMiddleware, compose } from 'redux'
import { History } from 'history'

import { createRootReducer } from './root-reducer'

export const configureStore = (history: History) => {
  const middlewares = [routerMiddleware(history)]
  const composeEnhancers = (typeof window !== 'undefined' && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

  const store = createStore(createRootReducer(history), composeEnhancers(applyMiddleware(...middlewares)))
  return store
}
