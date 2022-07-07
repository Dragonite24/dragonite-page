import React from 'react'

import { Page } from 'app/templates'
import { styled, theme } from 'ui/styles'
import { useWordle } from 'app/features/wordle'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.palette.dark_blue};
  height: 100%;
  width: 100%;
`

export const WordleSection: React.FC = () => {
  const wordle = useWordle()
  return (
    <Page>
      <Wrapper>{wordle}</Wrapper>
    </Page>
  )
}
