import React from 'react'

import { connect } from 'react-redux'
import { RootState } from 'root-reducer'

import { SectionT } from 'nav-sections'
import { setActiveSection } from 'store/sections/actions'
import { NAVIGATION_TILES } from 'app/data'
import { styled } from 'ui/styles'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  scroll-behavior: smooth;
`

const Box = styled.section`
  display: flex;
  flex-direction: column;
  scroll-behavior: smooth;
  width: 100%;
  min-height: 100vh;
  color: #000;
  border: 2px solid #000;
`

export const HomeContainer: React.FC<HomeContainerProps> = ({ sections, activeSection }) => {
  return (
    <Wrapper>
      {NAVIGATION_TILES.map((section, i) => (
        <Box key={i} ref={NAVIGATION_TILES[i].tileRef} id={sections[i].id}>
          {sections[i].el}
        </Box>
      ))}
    </Wrapper>
  )
}

type HomeContainerProps = { sections: SectionT[] } & ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>

const mapStateToProps = (state: RootState) => ({
  activeSection: state.popup.activeSection
})

const mapDispatchToProps = (dispatch: any) => ({
  setActiveProject: (id: number) => dispatch(setActiveSection(id))
})

export const Home = connect(mapStateToProps, mapDispatchToProps)(HomeContainer)
