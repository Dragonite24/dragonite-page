import React from 'react'

import { styled, theme } from 'ui/styles'
import { NAVIGATION_TILES } from 'app/data'

import { ContactsBar, LogoIcon, NavigationTile } from '../molecules'
import { useScroll } from '../hooks'

const Wrapper = styled.nav`
  display: flex;
  position: fixed;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${theme.palette.grey};
  width: 50px;
  height: 100%;
  left: 0;
  z-index: 1;

  transition: width, ${theme.transition.hover}ms ease;

  @media (hover: hover) {
    &:hover {
      width: 80px;
    }
  }
`

const TilesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
`

export const Sidebar: React.FC = () => {
  const { activeSection, goto } = useScroll()

  return (
    <Wrapper>
      <LogoIcon />
      <TilesWrapper>
        {NAVIGATION_TILES.map((tile, i) => (
          <NavigationTile key={i} index={i} title={tile.title} isActive={activeSection === i} onClick={() => goto(i)} />
        ))}
      </TilesWrapper>
      <ContactsBar />
    </Wrapper>
  )
}
