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
  width: 100%;

  @media (max-width: ${breakpoints.tablet}px) {
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
  min-height: 100vh;
`

const RightSide = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${theme.palette.black};
  width: 60.3%;
  min-height: 100vh;

  @media (max-width: ${breakpoints.tablet}px) {
    width: 100%;
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
