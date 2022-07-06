import { combineReducers } from 'redux'
import { connectRouter, RouterAction, RouterState } from 'connected-react-router'
import { History } from 'history'

import { SectionAction, sectionReducer, SectionState } from 'store/sections'
import { ModalAction, modalReducer, ModalState } from 'store/modal'

export type RootState = {
  router: RouterState
  section: SectionState
  modalIsOpen: ModalState
  // sortedArray: SortState
}

export const createRootReducer = (history: History) =>
  combineReducers<RootState>({
    router: connectRouter(history),

    section: sectionReducer,
    modalIsOpen: modalReducer
    // sortedArray: sortReducer;
  })

export type RootAction = RouterAction | SectionAction | ModalAction
