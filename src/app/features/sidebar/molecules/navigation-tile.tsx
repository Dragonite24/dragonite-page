import React from 'react'

import { Text } from 'ui/components'
import { styled, theme } from 'ui/styles'

const Wrapper = styled.section<{ isActive: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 40px;
  border-radius: 16px;
  color: ${({ isActive }) => (isActive ? theme.palette.white : theme.palette.black)};
  background-color: ${({ isActive }) => (isActive ? theme.palette.red : theme.palette.grey)};
  transform: scale(1);

  transition: color, background-color, transform, ${theme.transition.hover}ms ease;

  :not(:last-child) {
    margin-bottom: 8px;
  }

  @media (hover: hover) {
    &:hover {
      background-color: ${theme.palette.red};
      color: ${theme.palette.white};
      transform: scale(1.05);
    }
  }
`

const StyledText = styled(Text)`
  margin-left: 16px;
`

type NavigationTileProps = {
  title: string
  isActive: boolean
  onClick?: () => void
}

export const NavigationTile: React.FC<NavigationTileProps> = ({ title, isActive, onClick }) => {
  return (
    <Wrapper isActive={isActive} onClick={onClick}>
      <StyledText variant="t0">{title}</StyledText>
    </Wrapper>
  )
}
