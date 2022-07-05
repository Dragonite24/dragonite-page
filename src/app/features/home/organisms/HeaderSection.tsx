import React from 'react'

import { breakpoints } from 'app/shared'
import { Image } from 'ui/components'
import { styled, theme } from 'ui/styles'

import { AboutMeBlock, GitHubBlock } from '../atoms'

const Wrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
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
  justify-content: flex-end;
  align-items: flex-end;
  height: 100%;
  width: 100%;
  z-index: 0;

  @media (max-width: ${breakpoints.tablet}px) {
    flex-direction: column-reverse;
  }
`

export const HeaderSection: React.FC = () => (
  <Wrapper>
    <BackgroundImage name="header-background.webp" width="100%" height="100%" fit="cover" />
    <Content>
      <GitHubBlock />
      <AboutMeBlock />
    </Content>
  </Wrapper>
)
