import { NAVIGATION_TILES } from 'app/data'
import React from 'react'
import { connect } from 'react-redux'
import { RootState } from 'root-reducer'
import { setActiveSection } from 'store/sections/actions'
import { styled, theme } from 'ui/styles'
import useOnScreen from '../hooks/useOnScreen'
import { NavigationTile } from '../molecules'

const Wrapper = styled.nav`
  display: flex;
  position: fixed;
  flex-direction: column;
  justify-content: center;
  width: 100px;
  height: 100%;
  left: 0;
  z-index: 1;
`

const TilesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  opacity: 0.5;

  transition: opacity ${theme.transition.hover}ms ease;

  @media (hover: hover) {
    &:hover {
      opacity: 1;
    }
  }
`

const SidebarContainer: React.FC<ContainerProps> = ({ activeSection, setActiveSection }) => {
  const handleTileClick = (i: number) => {
    setActiveSection(i)
  }

  const isActive = (ref: React.RefObject<HTMLDivElement>) => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log(entry)

        if (entry.isIntersecting) {
          return true
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      }
    )
    if (ref.current) {
      observer.observe(ref.current)
    }
  }

  return (
    <Wrapper>
      <TilesWrapper>
        {NAVIGATION_TILES.map((tile, i) => {
          console.log(isActive(tile.tileRef))

          return (
            <NavigationTile
              key={i}
              title={tile.title}
              isActive={activeSection === i}
              onClick={() => handleTileClick(i)}
            />
          )
        })}
      </TilesWrapper>
    </Wrapper>
  )
}

const mapStateToProps = (state: RootState) => ({
  isPopupOpen: state.popup.isOpen,
  activeSection: state.popup.activeSection
})

const mapDispatchToProps = (dispatch: any) => ({
  setActiveSection: (activeSection: number) => dispatch(setActiveSection(activeSection))
})

export type ContainerProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>

export const Sidebar = connect(mapStateToProps, mapDispatchToProps)(SidebarContainer)
