import React from 'react'

import { Page } from 'app/templates'
import { styled, theme } from 'ui/styles'
import { useWordle } from 'app/features/wordle'
import { Text } from 'ui/components'
import { breakpoints, useDimensions } from 'app/shared'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${theme.palette.dark_blue};
  height: 100%;
  width: 100%;

  @media (max-height: ${breakpoints.mobile - 1}px) {
    padding: 64px 0;
  }
`

const StyledText = styled(Text)`
  color: ${theme.palette.light_grey};
  margin-bottom: 32px;
`

export const WordleSection: React.FC = () => {
  const { isMobile } = useDimensions()
  const wordle = useWordle()

  return (
    <Page>
      <Wrapper>

        {isMobile ?
          <StyledText variant='t1'>
            Mobile version of Wordle in DEVELOPMENT :'(
          </StyledText> : <StyledText variant='t1'>
            Use the letters and ENTER ;)
          </StyledText>
        }
        {wordle}</Wrapper>
    </Page>
  )
}
