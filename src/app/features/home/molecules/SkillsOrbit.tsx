import { Image, spinRight } from 'ui/components'

import { styled, theme } from 'ui/styles'
import { Logos } from 'ui/images/orbit'

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

const Orbit = styled.div`
  position: relative;
  display: flex;
  top: calc(30% - 150px);
  margin: 60px;
  min-width: 400px;
  height: 400px;
  border: 2px ${theme.palette.dark_blue} dashed;
  border-radius: 50%;
  animation: ${spinRight} ${theme.transition.spinLong}ms linear infinite;
`

const StyledLogos = styled(Image)`
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
    backgroundImage: `url(${Pattern})`
  }

  return (
    <Wrapper style={wrapperStyles}>
      <StyledImage name="person.png" width="100%" height="100%" />
      <OrbitContainer>
        <Orbit>
          {Logos.map((el, idx) => (
            <StyledLogos id={idx} name={`orbit/${el}.png`} alt={el} />
          ))}
        </Orbit>
      </OrbitContainer>
    </Wrapper>
  )
}
