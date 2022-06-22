import { Image, spinLeft, spinRight } from 'ui/components'
import { css } from 'styled-components'

import { styled, theme } from 'ui/styles'
import { Logos } from 'ui/images/swiper'

import Pattern from 'ui/icons/pattern.svg'

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
  top: 30%;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  max-height: 600px;
  height: 100%;
`

const OrbitContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`

const Orbit = styled.div<{ isInner?: boolean }>`
  position: relative;
  display: flex;
  top: calc(30% - 150px);
  margin: 60px;
  min-width: 400px;
  height: 400px;
  border: 2px ${theme.palette.dark_grey} dashed;
  border-radius: 50%;
  animation: ${({ isInner }) =>
    isInner
      ? css`
          ${spinRight} ${theme.transition.spinLong}ms linear infinite
        `
      : css`
          ${spinLeft} ${theme.transition.spin}ms linear infinite
        `};
`

const StyledLogos = styled(Image)<{ isInner?: boolean }>`
  animation: inherit;
  animation-direction: reverse;
  display: block;
  position: absolute;

  &:nth-child(1) {
    top: 40px;
    left: 40px;
  }
  &:nth-child(2) {
    top: 40px;
    right: 40px;
  }
  &:nth-child(3) {
    bottom: 40px;
    left: 40px;
  }
  &:nth-child(4) {
    bottom: 40px;
    right: 40px;
  }
  &:nth-child(5) {
    bottom: 200px;
    right: -30px;
  }
  &:nth-child(6) {
    top: 200px;
    left: -30px;
  }
  &:nth-child(7) {
    top: -30px;
    left: 200px;
  }
  &:nth-child(8) {
    bottom: -30px;
    left: 200px;
  }
`

export const SkillsOrbit = () => {
  const wrapperStyles: React.CSSProperties = {
    display: 'inline-flex',
    flexDirection: 'row',
    position: 'relative',

    height: 'auto',
    minHeight: '800px',
    backgroundImage: `url(${Pattern})`
  }

  return (
    <Wrapper style={wrapperStyles}>
      <StyledImage name="person.png" width="100%" height="100%" />
      <OrbitContainer>
        <Orbit isInner>
          {Logos.map((el, idx) => (
            <StyledLogos isInner id={idx} name={`swiper/${el}.png`} alt={el} />
          ))}
        </Orbit>
      </OrbitContainer>
    </Wrapper>
  )
}
