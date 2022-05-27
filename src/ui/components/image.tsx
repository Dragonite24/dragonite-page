import React from 'react'
import { StyledComponent } from 'styled-components'

import { styled, Theme } from 'ui/styles'

type Props = {
  name: string
  inline?: boolean
  width?: number | string
  height?: number | string
  fit?: 'fill' | 'contain' | 'cover'
}

type StyledFunc = (props: Props) => JSX.Element
type ImageT = StyledComponent<StyledFunc, Theme, Props>

export const Image: ImageT = styled<StyledFunc>(({ name, ...rest }) => {
  let url
  const notLocalRe = /^(http|data:image)/
  if (!notLocalRe.test(name)) {
    const re = /\.(jpg|jpeg|png|webp|gif)$/
    if (!re.test(name)) name += '.svg'
    url = require(`ui/images/${name}`)
    if (url instanceof Object) url = url.default
  } else {
    url = name
  }
  return <img src={url} {...rest} alt="" />
})<Props>`
  display: ${({ inline }) => (inline ? 'inline-block' : 'block')};
  ${({ width }) => (width && typeof width === 'number' ? `width: ${width}px;` : `width: ${width}`)};
  ${({ height }) => (height && typeof height === 'number' ? `height: ${height}px;` : `height: ${height}`)};
  object-fit: ${({ fit }) => (fit ? fit : 'fill')};
  user-select: none;
`
