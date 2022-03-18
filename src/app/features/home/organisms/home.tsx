import { NAVIGATION_TILES } from 'app/data'
import React from 'react'
import { connect } from 'react-redux'
import { RootState } from 'root-reducer'
import { setActiveSection } from 'store/sections/actions'

import { styled } from 'ui/styles'

import { HeaderSection } from '../molecules'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  scroll-behavior: smooth;
`

const Box = styled.div`
  display: flex;
  flex-direction: column;
  scroll-behavior: smooth;
  width: 100%;
  height: 100vh;
  color: #000;
  border: 2px solid #000;
`

export const HomeContainer: React.FC<HomeContainerProps> = ({ activeSection }) => {
  const sections = [1, 2, 3, 4]

  React.useLayoutEffect(() => {
    NAVIGATION_TILES[activeSection ?? 0].tileRef.current!.scrollIntoView({ behavior: 'smooth' })
  }, [activeSection])

  return (
    <Wrapper>
      <HeaderSection ref={NAVIGATION_TILES[0].tileRef} />
      {sections.map((section, i) => (
        <Box key={i} ref={NAVIGATION_TILES[i].tileRef}>
          {NAVIGATION_TILES[i].title}
        </Box>
      ))}
    </Wrapper>
  )
}

type HomeContainerProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>

const mapStateToProps = (state: RootState) => ({
  activeSection: state.popup.activeSection
})

const mapDispatchToProps = (dispatch: any) => ({
  setActiveProject: (id: number) => dispatch(setActiveSection(id))
})

export const HomeContent = connect(mapStateToProps, mapDispatchToProps)(HomeContainer)
