import React from 'react'

import { Page } from 'app/templates'
import { SectionT } from 'nav-sections'
import { Home } from 'app/features/home'

type HomeProps = {
  sections: SectionT[]
}

export const HomePage: React.FC<HomeProps> = ({ sections }) => {
  return (
    <Page>
      <Home sections={sections} />
    </Page>
  )
}
