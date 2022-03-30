import React from 'react'
import { connect } from 'react-redux'
import { RootState } from 'root-reducer'

import { SectionT } from 'nav-sections'
import { setActiveSection } from 'store/sections/actions'
import { styled, theme } from 'ui/styles'
import { NAVIGATION_TILES } from 'app/data'

import { ContactsBar, LogoIcon, NavigationTile } from '../molecules'

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
type FX = {
  startTime: number
  duration: number
  startScroll: number
  endScroll: number
}

const SidebarContainer: React.FC<SidebarProps> = ({ sections, activeSection, setActiveSection }) => {
  let fx: FX | null = null

  React.useEffect(() => {
    const handleScroll = (): void => {
      if (fx) return
      for (let i = sections.length - 1; i > 0; i--) {
        const target = document.getElementById(sections[i].id)!

        if (window.scrollY >= target.offsetTop - target.offsetHeight / 2) {
          setActiveSection(i)
          return
        }
      }
      setActiveSection(0)
    }

    // clean up code
    window.removeEventListener('scroll', handleScroll)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [fx, sections, setActiveSection])

  const handleNewAnimationFrame = (): void => {
    const now = Date.now()
    const timePos = Math.min(1, (now - fx!.startTime) / fx!.duration)
    const scrollPos = 1 - Math.pow(1 - timePos, 3) // easing
    const scroll = fx!.startScroll + (fx!.endScroll - fx!.startScroll) * scrollPos
    window.scrollTo({ top: scroll })

    if (timePos === 1) {
      fx = null
    } else {
      window.requestAnimationFrame(handleNewAnimationFrame)
    }
  }
  const goto = (i: number): void => {
    const id = sections[i].id
    const target = document.getElementById(id)!

    if (!fx) {
      window.requestAnimationFrame(handleNewAnimationFrame)
    }

    fx = {
      startTime: Date.now(),
      duration: 700,
      startScroll: window.scrollY,
      endScroll: target.offsetTop
    }

    setActiveSection(i)
  }

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

const mapStateToProps = (state: RootState) => ({
  isPopupOpen: state.popup.isOpen,
  activeSection: state.popup.activeSection
})

const mapDispatchToProps = (dispatch: any) => ({
  setActiveSection: (activeSection: number) => dispatch(setActiveSection(activeSection))
})

export type ContainerProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>

type SidebarProps = {
  sections: SectionT[]
} & ContainerProps

export const Sidebar = connect(mapStateToProps, mapDispatchToProps)(SidebarContainer)
