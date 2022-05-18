import React from 'react'

import { styled, theme } from 'ui/styles'

const Item = styled.div`
  display: flex;
  width: 100%;
  height: 1px;
  background-color: ${theme.palette.light_grey};
  margin: 8px 0;
`

export const Divider: React.FC = () => <Item />
