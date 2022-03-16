import { createAction } from 'typesafe-actions'

export const setActiveSection = createAction('sections/popup->SET_ACTIVE_SECTION')<number>()
