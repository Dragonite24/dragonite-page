import React from 'react'

import { breakpoints } from 'app/shared/dimensions'
import { Text } from 'ui/components'
import { styled, theme } from 'ui/styles'

import { ReactComponent as Cases } from 'ui/icons/contacts/cases.svg'
import { ReactComponent as Mail } from 'ui/icons/contacts/mail.svg'

const BREAKPOINT = 700

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 70%;
  width: 100%;
  background-color: ${theme.palette.dark_grey};

  @media (max-width: ${breakpoints.desktop}px) {
    margin-top: 32px;
  }
`

const AboutMeContent = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  width: 100%;
  padding: 64px;
  transition: padding ${theme.transition.hover}ms linear;

  @media (max-width: ${breakpoints.desktop}px) {
    padding: 32px;
  }

  @media (max-width: ${breakpoints.mobile}px) {
    padding: 18px;
  }
`

const PrefixText = styled(Text)`
  position: relative;
  &::before {
    content: 'S';
    position: absolute;
    left: 2px;
    bottom: 2px;

    color: ${theme.palette.green};
  }
`

const StyledText = styled(Text)`
  margin-top: 16px;
  opacity: 0.5;
`

const FooterSectionBar = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;

  @media (max-width: ${BREAKPOINT}px) {
    flex-direction: column;
  }
`

const SemiBlockWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 0 64px;
  align-items: center;
  transition: padding ${theme.transition.hover}ms linear;

  @media (max-width: ${breakpoints.desktop}px) {
    padding: 0 32px;
  }

  @media (max-width: ${breakpoints.mobile}px) {
    padding: 0 16px;
  }
`

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const BlockWrapper = styled.div<{ color: string }>`
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 160px;
  background-color: ${({ color }) => color};
`

const CasesIcon = styled(Cases)`
  display: flex;
  width: 64px;
  height: 64px;
  margin-right: 16px;

  & path {
    stroke: ${theme.palette.white};
    color: ${theme.palette.white};
  }
`

const ContactIcon = styled(Mail)`
  display: flex;
  width: 64px;
  height: 64px;
  margin-right: 16px;

  & path {
    stroke: ${theme.palette.grey};
    color: ${theme.palette.grey};
  }
`

export const AboutMeBlock: React.FC = () => {
  const webTips: string[] = ['Websites', 'Mobile Apps', 'Landing pages']

  return (
    <Wrapper>
      <AboutMeContent>
        <Text variant="h0" color={theme.palette.white}>
          HI, I'm
          <PrefixText variant="h0">Semen,</PrefixText>
          Frontend Developer
        </Text>
        <StyledText variant="t0_bold" color={theme.palette.white}>
          {webTips.join(' / ')}
        </StyledText>
      </AboutMeContent>
      <FooterSectionBar>
        <BlockWrapper color={theme.palette.dark_blue}>
          <SemiBlockWrapper>
            <CasesIcon />
            <TextWrapper>
              <Text variant="h2" color={theme.palette.white}>
                My past cases
              </Text>
              <Text variant="t0_bold" color={theme.palette.light_grey}>
                I have 1+ year of experience in IT
              </Text>
            </TextWrapper>
          </SemiBlockWrapper>
        </BlockWrapper>
        <BlockWrapper color={theme.palette.white}>
          <SemiBlockWrapper>
            <ContactIcon />
            <TextWrapper>
              <Text variant="h2" color={theme.palette.grey}>
                Contact me
              </Text>
              <Text variant="t0_bold" color={theme.palette.grey}>
                To call for an interview or just to chat :)
              </Text>
            </TextWrapper>
          </SemiBlockWrapper>
        </BlockWrapper>
      </FooterSectionBar>
    </Wrapper>
  )
}
