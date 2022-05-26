import React from 'react'

import { breakpoints } from 'app/shared'
import { Image } from 'ui/components'
import { styled, theme } from 'ui/styles'

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  width: 33%;
  align-items: flex-end;
  justify-content: flex-end;

  @media (max-width: ${breakpoints.tablet}px) {
    align-items: flex-start;
    width: 100%;
  }
`

const GitHubBox = styled.a`
  display: flex;
  width: 160px;
  height: 160px;
  align-items: center;
  justify-content: center;
  background-color: ${theme.palette.green};

  transition: filter ${theme.transition.hover}ms ease;

  &:hover {
    filter: brightness(1.1);
  }
`

export const GitHubBlock: React.FC = () => (
  <Wrapper>
    <GitHubBox href="https://github.com/Dragonite24" target="_blank">
      <Image name="github-logo-big.webp" width="64" height="64" />
    </GitHubBox>
  </Wrapper>
)
