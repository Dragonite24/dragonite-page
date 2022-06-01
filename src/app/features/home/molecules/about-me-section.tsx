import React from 'react'

import { breakpoints } from 'app/shared'
import { Image, Text } from 'ui/components'
import { styled, theme } from 'ui/styles'

const Wrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: ${theme.palette.black};
`

const BackgroundImage = styled(Image)`
  position: absolute;
  display: flex;
  z-index: 0;
  bottom: 0;
  width: 100%;
  height: 100%;

  filter: brightness(0.2);
`

const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  z-index: 0;

  @media (max-width: ${breakpoints.tablet}px) {
    flex-direction: column-reverse;
  }
`
const LeftSide = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${theme.palette.dark_grey};
  width: 100%;
  height: 100%;
`

const RightSide = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${theme.palette.black};
  width: 60.5%;
  height: 100%;
`

export const AboutMeSection: React.FC = () => {
  return (
    <Wrapper>
      <Content>
        <LeftSide></LeftSide>
        <RightSide></RightSide>
      </Content>
    </Wrapper>
  )
}
