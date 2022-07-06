import { createReducer, ActionType } from 'typesafe-actions'

import * as actions from './actions'

export type ModalAction = ActionType<typeof actions>

export type ModalState = {
  modalSection: boolean
}

const initialState: ModalState = {
  modalSection: false
}

export const modalReducer = createReducer<ModalState>(initialState).handleAction(
  actions.setModalOpen,
  (state: ModalState, { payload }: any) => {
    return {
      ...state,
      activeSection: payload
    }
  }
)
