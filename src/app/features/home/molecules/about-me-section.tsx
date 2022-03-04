import React from 'react'

import { Text } from 'ui/components'
import { styled, theme } from 'ui/styles'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px 64px;
  background-color: ${theme.palette.grey};
`

export const AboutMeSection: React.FC = () => {
  return (
    <Wrapper>
      <Text variant="h2" color={theme.palette.red}>
        Привет
      </Text>
    </Wrapper>
  )
}
