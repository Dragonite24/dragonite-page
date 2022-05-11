import { AboutMeSection, BasedSection, HeaderSection, WorkExperienceSection } from 'app/features/home'

export type SectionT = {
  id: string
  el: JSX.Element
}

export const sections: SectionT[] = [
  { id: 'id0', el: <HeaderSection /> },
  { id: 'id1', el: <AboutMeSection /> },
  { id: 'id2', el: <WorkExperienceSection /> },
  { id: 'id3', el: <BasedSection /> }
]
