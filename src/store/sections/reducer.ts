import { createReducer, ActionType } from 'typesafe-actions'

import * as actions from './actions'

export type SectionAction = ActionType<typeof actions>

export type SectionState = {
  activeSection: number
}

const initialState: SectionState = {
  activeSection: 0
}

export const sectionReducer = createReducer<SectionState>(initialState).handleAction(
  actions.setActiveSection,
  (state: SectionState, { payload }: any) => {
    return {
      ...state,
      activeSection: payload
    }
  }
)
