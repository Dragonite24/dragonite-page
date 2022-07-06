import { createAction } from 'typesafe-actions'

export const setActiveSection = createAction('sections/section->SET_ACTIVE_SECTION')<number>()
