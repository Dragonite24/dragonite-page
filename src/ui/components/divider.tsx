import React from 'react'

import { styled, theme } from 'ui/styles'

const Item = styled.div<{ color?: string; margin?: string }>`
  display: flex;
  width: 100%;
  height: 1px;
  background-color: ${({ color }) => (color ? color : `${theme.palette.light_grey}`)};
  margin: ${({ margin }) => (margin ? margin : `8px 0px`)};
`

type Props = {
  color?: string
  margin?: string
}
export const Divider: React.FC<Props> = ({ ...props }) => <Item {...props} />
