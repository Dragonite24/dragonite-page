import React from 'react'
import { CSSTransition, Transition } from 'react-transition-group'

import { Text } from 'ui/components'
import { styled, theme } from 'ui/styles'

import { ReactComponent as Home } from 'ui/icons/home.svg'
import { ReactComponent as User } from 'ui/icons/user.svg'
import { ReactComponent as Exp } from 'ui/icons/experience.svg'
import { ReactComponent as Email } from 'ui/icons/email.svg'

const StyledText = styled(Text)`
  margin-left: 16px;
`

const Wrapper = styled.section<{ isActive: boolean; isPointed: boolean }>`
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  width: ${({ isPointed }) => (isPointed ? '100%' : '46px')};

  height: 40px;
  opacity: 0.6;

  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  color: ${({ isActive }) => (isActive ? theme.palette.white : theme.palette.black)};
  background-color: ${({ isActive }) => (isActive ? theme.palette.red : theme.palette.grey)};

  transition: opacity, color, background-color, ${theme.transition.hover}ms ease;

  :not(:last-child) {
    margin-bottom: 8px;
  }

  @media (hover: hover) {
    &:hover {
      opacity: 1;
      background-color: ${theme.palette.red};
      color: ${theme.palette.white};
    }
  }

  &.tile-enter ${StyledText} {
    opacity: 0;
  }
  &.tile-enter-done ${StyledText} {
    opacity: 1;
    transition: opacity 200ms;
  }
  &.tile-exit ${StyledText} {
    opacity: 0;
  }
`

const IconWrapper = styled.div`
  display: flex;
  position: absolute;
  right: 8px;
  width: 32px;
  height: 32px;
  justify-content: center;
  align-items: center;
`

const HomeIcon = styled(Home)`
  display: flex;

  & > path {
    stroke: ${theme.palette.black};
    color: ${theme.palette.black};
  }
`

const AboutMeIcon = styled(User)`
  display: flex;

  & > path {
    stroke: ${theme.palette.black};
    color: ${theme.palette.black};
  }
`
const ExpIcon = styled(Exp)`
  display: flex;

  & > path {
    stroke: ${theme.palette.black};
    color: ${theme.palette.black};
  }
`
const ContactIcon = styled(Email)`
  display: flex;

  & > path {
    stroke: ${theme.palette.black};
    color: ${theme.palette.black};
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

  const navIcons = [<HomeIcon />, <AboutMeIcon />, <ExpIcon />, <ContactIcon />]

  const handleMouseEnter = () => {
    setIsPointed(true)
  }
  const handleMouseLeave = () => {
    setIsPointed(false)
  }
  return (
    <CSSTransition in={isPointed} timeout={theme.transition.hover} classNames="tile">
      <Wrapper
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        isActive={isActive}
        isPointed={isPointed}
        onClick={onClick}
      >
        <Transition in={isPointed} timeout={theme.transition.hover} mountOnEnter unmountOnExit>
          {(state) => (
            <StyledText variant="t1" align="center">
              {title}
            </StyledText>
          )}
        </Transition>

        <IconWrapper>{navIcons[index]}</IconWrapper>
      </Wrapper>
    </CSSTransition>
  )
}
