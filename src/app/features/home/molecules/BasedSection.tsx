import React from 'react'

import { Page } from 'app/templates'
import { rotateItem, Text } from 'ui/components'
import { styled, theme } from 'ui/styles'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: inherit;
`

const StyledText = styled(Text)`
  animation: ${rotateItem} 1000ms linear infinite;
`

export const BasedSection: React.FC = () => {
  return (
    <Page>
      <Wrapper>
        <StyledText variant="t0" color={theme.palette.black} bold>
          БАЗА
        </StyledText>
      </Wrapper>
    </Page>
  )
}
