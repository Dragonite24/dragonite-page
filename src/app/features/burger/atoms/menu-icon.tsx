import React from 'react'

import { styled, theme } from 'ui/styles'

const Wrapper = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  width: 60px;
  height: 60px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

const Span = styled.span`
  height: 4px;
  width: 100%;
  position: absolute;
  background: ${theme.palette.green};
  border-radius: 9px;
  opacity: 1;
  left: 0;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: ${theme.transition.hover}ms ease;
  -moz-transition: ${theme.transition.hover}ms ease;
  -o-transition: ${theme.transition.hover}ms ease;
  transition: ${theme.transition.hover}ms ease;

  &:nth-child(1) {
    top: 0px;
  }

  &:nth-child(2),
  &:nth-child(3) {
    top: 10px;
  }
  &:nth-child(4) {
    top: 20px;
  }
`

const Icon = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;

  &.opened ${Span}:nth-child(1) {
    top: 18px;
    width: 0%;
    left: 50%;
  }

  &.opened ${Span}:nth-child(2) {
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  &.opened ${Span}:nth-child(3) {
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }

  &.opened ${Span}:nth-child(4) {
    top: 18px;
    width: 0%;
    left: 50%;
  }
`
type Props = {
  onClick: () => void
  opened: boolean
}

export const MenuIcon: React.FC<Props> = ({ onClick, opened }) => (
  <Wrapper>
    <Icon onClick={onClick} className={opened ? 'opened' : ''}>
      <Span />
      <Span />
      <Span />
      <Span />
    </Icon>
  </Wrapper>
)
