import React from 'react'

import styled from 'styled-components'

const Content = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1 0;
  width: 100%;
  align-items: center;
  height: 100vh;
  overflow: auto;
`

export const Page: React.FC = ({ children }) => <Content>{children}</Content>
