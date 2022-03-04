import React from 'react'

import { styled, theme } from 'ui/styles'

const Wrapper = styled.footer`
  display: flex;
  position: relative;
  justify-content: center;
  height: 80px;
  background-color: ${theme.palette.grey};
`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 24px 32px;
  width: 100%;
`

export const Footer: React.FC = () => {
  return (
    <Wrapper>
      <ContentWrapper></ContentWrapper>
    </Wrapper>
  )
}
