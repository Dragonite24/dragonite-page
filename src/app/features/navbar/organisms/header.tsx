import React from 'react'

import { Text } from 'ui/components'
import { useScrollDirection } from 'app/shared'
import { styled, theme } from 'ui/styles'
import { BurgerMenu } from 'app/features/burger'

const Wrapper = styled.header<{ collapsed: boolean }>`
  display: flex;
  position: fixed;
  top: 0;
  flex-direction: row;
  width: 100%;
  height: 60px;
  border-bottom: 1px solid ${theme.palette.dark_blue};
  background-color: ${theme.palette.dark_grey};
  z-index: 1;

  opacity: ${({ collapsed }) => (collapsed ? '0' : '1')};
  transform: ${({ collapsed }) => (collapsed ? 'translateY(-60px)' : 'translateY(0)')};

  transition: transform, opacity, ${theme.transition.hover}ms ease;
`

const Content = styled.div`
  display: flex;
  position: relative;
  padding: 8px 64px;
  width: 100%;
  align-items: center;
  justify-content: center;
`

const FCsText = styled(Text)`
  display: flex;
`

export const Header: React.FC = () => {
  const direction = useScrollDirection()
  const isCollapsed: boolean = React.useMemo(() => direction === 'down', [direction])

  return (
    <Wrapper collapsed={isCollapsed}>
      <Content>
        <FCsText variant="t0">Kolesnikov Semen</FCsText>
        <BurgerMenu isOpened={!isCollapsed} />
      </Content>
    </Wrapper>
  )
}
