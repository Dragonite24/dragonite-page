import React from 'react'
import { CSSTransition, Transition } from 'react-transition-group'

import { styled, theme } from 'ui/styles'

import { ReactComponent as Home } from 'ui/icons/home.svg'
import { ReactComponent as User } from 'ui/icons/user.svg'
import { ReactComponent as Exp } from 'ui/icons/experience.svg'
import { ReactComponent as Smile } from 'ui/icons/smile.svg'

const Wrapper = styled.section<{ isActive: boolean; isPointed: boolean }>`
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;

  height: 80px;

  color: ${({ isActive }) => (isActive ? theme.palette.white : theme.palette.black)};
  background-color: ${({ isActive }) => (isActive ? theme.palette.dark_grey : theme.palette.grey)};

  transition: opacity, color, background-color, ${theme.transition.hover}ms ease;

  @media (hover: hover) {
    &:hover {
      opacity: 1;
      background-color: ${theme.palette.green};
      color: ${theme.palette.white};
    }
  }

  :after {
    content: '';
    position: absolute;
    height: 100%;
    background-color: ${theme.palette.white};
    width: 2px;
    right: 0px;
    opacity: ${({ isActive }) => (isActive ? 1 : 0)};
    transition: opacity, ${theme.transition.hover}ms ease;
  }
`

const IconWrapper = styled.div`
  display: flex;
  right: 8px;
  justify-content: center;
  align-items: center;

  & path {
    stroke: ${theme.palette.white};
    color: ${theme.palette.white};
  }
`

type NavigationTileProps = {
  title: string
  index: number
  isActive: boolean
  onClick?: () => void
}

export const NavigationTile: React.FC<NavigationTileProps> = ({ title, index, isActive, onClick }) => {
  const [isPointed, setIsPointed] = React.useState(false)

  const navIcons = [<Home />, <User />, <Exp />, <Smile />]

  const handleMouseEnter = () => {
    setIsPointed(true)
  }
  const handleMouseLeave = () => {
    setIsPointed(false)
  }
  return (
    <CSSTransition in={isPointed} timeout={theme.transition.hover} classNames="icon">
      <Wrapper
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        isActive={isActive}
        isPointed={isPointed}
        onClick={onClick}
      >
        <Transition in={isPointed} timeout={theme.transition.hover}>
          <IconWrapper>{navIcons[index]}</IconWrapper>
        </Transition>
      </Wrapper>
    </CSSTransition>
  )
}
