import { createReducer, ActionType } from 'typesafe-actions'

import * as actions from './actions'

export type PopupAction = ActionType<typeof actions>

export type PopupState = {
  isOpen: boolean
  activeSection: number
}

const initialState: PopupState = {
  isOpen: false,
  activeSection: 0
}

export const popupReducer = createReducer<PopupState>(initialState).handleAction(
  actions.setActiveSection,
  (state: PopupState, { payload }: any) => {
    return {
      ...state,
      activeSection: payload
    }
  }
)
