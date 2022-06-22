import React from 'react'

import { breakpoints } from 'app/shared'

import { styled, theme } from 'ui/styles'
import { SkillsOrbit } from './SkillsOrbit'

const Wrapper = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  min-height: 100vh;
  width: 100%;
  z-index: 0;

  @media (max-width: ${breakpoints.tablet}px) {
    flex-direction: column-reverse;
  }
`

const LeftSide = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${theme.palette.dark_grey};
  width: 100%;
  height: 100%;
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
      <LeftSide></LeftSide>
      <RightSide>
        <SkillsOrbit />
      </RightSide>
    </Wrapper>
  )
}
