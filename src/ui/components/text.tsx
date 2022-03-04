import React from 'react'
import { StyledComponent } from 'styled-components'

import { styled, TypographyVariants, getStyles, Theme } from 'ui/styles'

type Props = {
  variant: TypographyVariants
  inline?: boolean
  color?: string
  align?: 'center' | 'right' | 'left'
  divRef?: () => React.RefObject<HTMLDivElement>
  bold?: boolean
}

type StyledFunc = (props: Props & { children?: React.ReactNode }) => JSX.Element
type TextT = StyledComponent<StyledFunc, Theme, Props>

export const Text: TextT = styled<StyledFunc>(({ variant, inline, color, align, children, bold, divRef, ...rest }) => {
  if (inline) return <span {...rest}>{children}</span>
  switch (variant) {
    case 'h1':
      return <h1 {...rest}>{children}</h1>
    case 'h2':
      return <h2 {...rest}>{children}</h2>
    default:
      return (
        <div {...rest} ref={divRef && divRef()}>
          {children}
        </div>
      )
  }
})<Props>`
  ${({ variant }) => getStyles(variant)}
  ${({ color }) => color && `color: ${color};`}
  ${({ align }) => align && `text-align: ${align};`}
  ${({ bold }) => bold && `font-weight: bold;`}
`
