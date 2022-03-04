import React from 'react'

import styled from 'styled-components'

import { Header } from './header'
import { Footer } from './footer'

const Content = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1 0;
  align-items: center;
  height: 100vh;
`

export const Page: React.FC = ({ children }) => (
  <>
    <Header />
    <Content>{children}</Content>
    <Footer />
  </>
)
