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
  background-color: ${theme.palette.black};
`

// const HeaderGif = styled(Image)`
//   position: absolute;
//   display: flex;
//   z-index: 0;
//   bottom: 0;
//   width: 100%;
//   height: 100%;
// `

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
`
const StyledText = styled(Text)``

export const HeaderSection: React.FC = () => {
  return (
    <CSSTransition timeout={theme.transition.hover} classNames="hello">
      <Wrapper>
        {/* <HeaderGif name="header-gif.gif" width="100%" height="100%" fit="cover" /> */}
        <Content>
          <StyledText variant="h1" color={theme.palette.white}>
            Привет
          </StyledText>
          <Text variant="t0" color={theme.palette.white}>
            Мои контакты
          </Text>
        </Content>
      </Wrapper>
    </CSSTransition>
  )
}
