import { BasedSection, HeaderSection } from 'app/features/home/molecules'

export type SectionT = {
  id: string
  el: JSX.Element
}

export const sections: SectionT[] = [
  { id: 'id0', el: <HeaderSection /> },
  { id: 'id1', el: <div /> },
  { id: 'id2', el: <div /> },
  { id: 'id3', el: <BasedSection /> }
]
