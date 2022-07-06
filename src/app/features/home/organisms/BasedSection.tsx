import React from 'react'

import { Page } from 'app/templates'
import { styled } from 'ui/styles'
import { useWordle } from 'app/features/wordle'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: inherit;
`

export const BasedSection: React.FC = () => {
  const wordle = useWordle()
  return (
    <Page>
      <Wrapper>{wordle}</Wrapper>
    </Page>
  )
}
