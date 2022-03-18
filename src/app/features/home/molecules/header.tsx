import React from 'react'

import { Image, Text } from 'ui/components'
import { styled, theme } from 'ui/styles'

const Wrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

  background-color: ${theme.palette.grey};
`

const HeaderGif = styled(Image)`
  position: absolute;
  display: flex;
  bottom: 0;
  width: 100%;
  height: 100%;
`

type HeaderProps = {
  ref: React.RefObject<HTMLDivElement>
}

export const HeaderSection: React.FC<HeaderProps> = ({ ref }) => {
  return (
    <Wrapper ref={ref}>
      <HeaderGif name="header-gif.gif" width="100%" height="100%" fit="cover" />
      <Text variant="h2" color={theme.palette.red}>
        Привет
      </Text>
    </Wrapper>
  )
}
