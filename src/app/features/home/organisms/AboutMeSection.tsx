import React from 'react'

import { breakpoints } from 'app/shared'
import { styled, theme } from 'ui/styles'

import { Biography, SkillsOrbit } from '../molecules'

const Wrapper = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  height: 100%;
  width: 100%;

  @media (max-width: ${breakpoints.desktop}px) {
    flex-direction: column-reverse;
  }
`

const LeftSide = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${theme.palette.black};
  width: 100%;
  height: 100%;
`

const RightSide = styled.div`
  display: flex;
  background-color: ${theme.palette.black};
  width: 60.3%;
  height: 100%;

  @media (max-width: ${breakpoints.desktop}px) {
    width: 100%;
    min-height: 800px;
  }
`

export const AboutMeSection: React.FC = () => {
  return (
    <Wrapper>
      <LeftSide>
        <Biography />
      </LeftSide>
      <RightSide>
        <SkillsOrbit />
      </RightSide>
    </Wrapper>
  )
}
