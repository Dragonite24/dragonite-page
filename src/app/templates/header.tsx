import React from 'react'
import { GlitchEffect, Text } from 'ui/components'

import { styled } from 'ui/styles'

const Wrapper = styled.header`
  display: flex;
  position: relative;
  height: 30px;
  width: 100%;
  align-items: center;
  padding: 0px 20px;
  background: ${({ theme }) => theme.palette.grey};
`

const StyledText = styled(Text)``

export const Header: React.FC = () => (
  <Wrapper>
    <GlitchEffect>
      <StyledText variant="t0" bold>
        Dragonite
      </StyledText>
    </GlitchEffect>
  </Wrapper>
)
