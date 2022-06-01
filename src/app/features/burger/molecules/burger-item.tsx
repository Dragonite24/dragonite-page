import React from 'react'

import { TilesT } from 'app/data/nav-tiles'
import { Text } from 'ui/components'
import { styled, theme } from 'ui/styles'

const Wrapper = styled.div<{ visible: boolean; timing: number }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 50px;
  width: 100%;
  background-color: ${theme.palette.grey};

  opacity: ${({ visible }) => (visible ? '1' : '0')};
  transform: ${({ visible }) => (visible ? 'translateY(0)' : 'translateY(-100%)')};
  transition: transform, opacity, ${({ timing }) => timing * 200}ms ease;

  cursor: pointer;
`

const StyledText = styled(Text)`
  display: flex;
  align-items: center;
  height: 40px;
  border-bottom: 1px solid ${theme.palette.light_grey};
`

type Props = {
  tile: TilesT
  timing: number
  visible: boolean
  onClick: () => void
}

export const BurgerItem: React.FC<Props> = ({ tile, visible, timing, onClick }) => {
  return (
    <Wrapper onClick={onClick} timing={timing} visible={visible}>
      <StyledText variant="t1">{tile.title}</StyledText>
    </Wrapper>
  )
}
