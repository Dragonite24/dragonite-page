import React from 'react'

import { Page } from 'app/templates'
import { styled, theme } from 'ui/styles'
import { Text } from 'ui/components'
import { keyframes } from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`

const rotateItem = keyframes`
  0% {
    transform: rotateZ(0deg);
  }
  50% {
    transform: rotateZ(180deg) scale(3);
  }
  100% {
    transform: rotateZ(360deg);
  }
`

const StyledText = styled(Text)`
  animation: ${rotateItem} 1000ms linear infinite;
`

export const Home: React.FC = () => {
  return (
    <Page>
      <Wrapper>
        <StyledText variant="t0" color={theme.palette.black} bold>
          БАЗА
        </StyledText>
      </Wrapper>
    </Page>
  )
}
