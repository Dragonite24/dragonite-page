import React from 'react'

import { SectionT } from 'nav-sections'
import { NAVIGATION_TILES } from 'app/data'
import { styled } from 'ui/styles'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  scroll-behavior: smooth;
`

const Box = styled.section`
  display: flex;
  flex-direction: column;
  scroll-behavior: smooth;
  width: 100%;
  height: 100vh;
  min-height: 700px;
  color: #000;
`

type Props = {
  sections: SectionT[]
}

export const Home: React.FC<Props> = ({ sections }) => (
  <Wrapper>
    {NAVIGATION_TILES.map((section, i) => (
      <Box key={i} ref={section.tileRef} id={sections[i].id}>
        {sections[i].el}
      </Box>
    ))}
  </Wrapper>
)
