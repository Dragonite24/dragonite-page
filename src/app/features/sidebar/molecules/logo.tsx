import React from 'react'

import { Image } from 'ui/components'
import { styled } from 'ui/styles'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80px;
`

const LogoImage = styled(Image)`
  display: inline-flex;
  width: 30px;
  height: 30px;
`

export const LogoIcon: React.FC = () => (
  <Wrapper>
    <LogoImage name="logo.webp" />
  </Wrapper>
)
