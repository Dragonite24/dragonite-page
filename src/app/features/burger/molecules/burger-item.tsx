import React from 'react'

import { TilesT } from 'app/data/nav-tiles'
import { Divider, Text } from 'ui/components'
import { styled, theme } from 'ui/styles'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  cursor: pointer;
`

const StyledText = styled(Text)`
  display: flex;
  align-items: center;
  height: 40px;
`

type Props = {
  tile: TilesT
  onClick: () => void
}

export const BurgerItem: React.FC<Props> = ({ tile, onClick }) => {
  return (
    <Wrapper onClick={onClick}>
      <StyledText variant="t1">{tile.title}</StyledText>
      <Divider color={theme.palette.dark_blue} margin="0 0 4px 0" />
    </Wrapper>
  )
}
