import React from 'react'

import { Text } from 'ui/components'
import { styled } from 'ui/styles'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80px;
`

export const LogoIcon: React.FC = () => (
  <Wrapper>
    <Text variant="h2">D</Text>
  </Wrapper>
)
