import React from 'react'
import { CSSTransition } from 'react-transition-group'

import { Image, Text } from 'ui/components'
import { styled, theme } from 'ui/styles'

const Wrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: ${theme.palette.grey};
`

const HeaderGif = styled(Image)`
  position: absolute;
  display: flex;
  z-index: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
`

const StyledText = styled(Text)`
  z-index: 1;
`

export const HeaderSection: React.FC = () => {
  return (
    <CSSTransition timeout={500} classNames="hello">
      <Wrapper>
        <HeaderGif name="header-gif.gif" width="100%" height="100%" fit="cover" />
        <StyledText variant="h1" color={theme.palette.white}>
          Привет
        </StyledText>
      </Wrapper>
    </CSSTransition>
  )
}
