import React from 'react'

import styled from 'styled-components'
import { glitchFirst, glitchSecond } from './keyframes'

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
`

const GlitchFirst = styled.div`
  position: absolute;
  color: #33ddff;
  animation: ${glitchFirst} 2.5s infinite;
`
const Content = styled.div`
  position: absolute;
`
const GlitchSecond = styled.div`
  position: absolute;
  color: #ff5555;
  animation: ${glitchSecond} 2.5s infinite;
`

export const GlitchEffect: React.FC = ({ children }) => (
  <Wrapper>
    <GlitchFirst>{children}</GlitchFirst>
    <Content>{children}</Content>
    <GlitchSecond>{children}</GlitchSecond>
  </Wrapper>
)
