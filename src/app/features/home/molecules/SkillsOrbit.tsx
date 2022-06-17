import React from 'react'

import { Image, spinLeft, spinRight } from 'ui/components'
import { styled, theme } from 'ui/styles'
import { Logos } from 'ui/images/swiper'
import { css } from 'styled-components'

const Wrapper = styled.section`
  display: inline-flex;
  flex-direction: row;
  position: relative;
  width: 100%;
`

const StyledImage = styled(Image)`
  display: flex;
  position: absolute;
  object-fit: contain;
  top: 150px;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  max-height: 600px;
  height: 100%;
`

const OrbitContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  top: -100px;
  width: 100%;
  height: 100%;
  min-height: 800px;
`

const Orbit = styled.div<{ isInner?: boolean }>`
  position: absolute;
  width: ${({ isInner }) => (isInner ? '500px' : '300px')};
  height: ${({ isInner }) => (isInner ? '500px' : '300px')};
  border: 2px ${theme.palette.dark_grey} dashed;
  border-radius: 100%;
  animation: ${({ isInner }) =>
    isInner
      ? css`
          ${spinRight} ${theme.transition.spinLong}ms linear infinite
        `
      : css`
          ${spinLeft} ${theme.transition.spin}ms linear infinite
        `};
`

const StyledLogos = styled(Image)<{ id: number; isInner?: boolean }>`
  position: absolute;
  animation: inherit;
  animation-direction: reverse;

  ${({ isInner, id }) => css`
    top: ${isInner ? '40px' : '10px'};
    left: ${isInner ? '40px' : '10px'};
  `}
`

export const SkillsOrbit = () => (
  <Wrapper>
    <StyledImage name="person.png" width="100%" height="100%" />
    <OrbitContainer>
      <Orbit>
        {Logos.map((el, idx) => (
          <StyledLogos id={idx} name={`swiper/${el}.png`} />
        ))}
      </Orbit>
      <Orbit isInner>
        {Logos.map((el, idx) => (
          <StyledLogos id={idx} name={`swiper/${el}.png`} isInner />
        ))}
      </Orbit>
    </OrbitContainer>
  </Wrapper>
)
