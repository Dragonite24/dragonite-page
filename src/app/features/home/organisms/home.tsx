import React from 'react'
import { Text } from 'ui/components'
import { styled, theme } from 'ui/styles'
import { GradientHeader } from '../atoms'
import { AboutMeSection } from '../molecules'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const HomeContent: React.FC = () => {
  return (
    <Wrapper>
      <GradientHeader />
      <AboutMeSection />
      <Text variant="t0" color={theme.palette.black}></Text>
    </Wrapper>
  )
}
