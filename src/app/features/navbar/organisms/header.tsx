import React from 'react'
import { Text } from 'ui/components'

import { styled, theme } from 'ui/styles'

const Wrapper = styled.header`
  display: flex;
  position: absolute;
  top: 0;
  flex-direction: row;
  width: 100%;
  height: 60px;
  border-bottom: 1px solid ${theme.palette.dark_blue};
  background-color: ${theme.palette.dark_grey};
  z-index: 1;
`

const Content = styled.div`
  display: flex;
  padding: 8px 64px;
  width: 100%;
  align-items: center;
  justify-content: center;
`

const FCsText = styled(Text)`
  display: flex;
`

export const Header: React.FC = () => {
  return (
    <Wrapper>
      <Content>
        <FCsText variant="t0">Kolesnikov Semen</FCsText>
      </Content>
    </Wrapper>
  )
}
