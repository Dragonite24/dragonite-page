import { breakpoints } from 'app/shared/dimensions'
import React from 'react'

import { Text } from 'ui/components'
import { styled, theme } from 'ui/styles'

import { ReactComponent as Cases } from 'ui/icons/contacts/cases.svg'
import { ReactComponent as Mail } from 'ui/icons/contacts/mail.svg'

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
`

const SemiBlockWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 0 32px;
  align-items: center;

  @media (max-width: ${breakpoints.desktop}px) {
    padding: 0 12px;
  }
`

const CasesBlock = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 160px;
  background-color: ${theme.palette.dark_blue};
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

const ContactBlock = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 160px;
  background-color: ${theme.palette.white};
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
  const web: string[] = ['Websites', 'Mobile Apps', 'Landing pages']
  return (
    <Wrapper>
      <AboutMeContent>
        <Text variant="h0" color={theme.palette.white}>
          HI, I'm
          <PrefixText variant="h0">Semen,</PrefixText>
          Frontend Developer
        </Text>
        <StyledText variant="t1" color={theme.palette.white}>
          {web.join(' / ')}
        </StyledText>
      </AboutMeContent>
      <FooterSectionBar>
        <CasesBlock>
          <SemiBlockWrapper>
            <CasesIcon />
            <Text variant="h2" color={theme.palette.white}>
              Жопа, ахаха
            </Text>
          </SemiBlockWrapper>
        </CasesBlock>
        <ContactBlock>
          <SemiBlockWrapper>
            <ContactIcon />
            <Text variant="h2" color={theme.palette.grey}>
              Я факел
            </Text>
          </SemiBlockWrapper>
        </ContactBlock>
      </FooterSectionBar>
    </Wrapper>
  )
}
