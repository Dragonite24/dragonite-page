import { combineReducers } from 'redux'
import { connectRouter, RouterAction, RouterState } from 'connected-react-router'
import { History } from 'history'
import { PopupAction, popupReducer, PopupState } from 'store/sections/reduser'

export type RootState = {
  router: RouterState
  popup: PopupState
}

export const createRootReducer = (history: History) =>
  combineReducers<RootState>({
    router: connectRouter(history),

    popup: popupReducer
  })

export type RootAction = RouterAction | PopupAction
