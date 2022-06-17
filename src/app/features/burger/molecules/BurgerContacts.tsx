import React from 'react'

import { CONTACTS } from 'app/data/contacts'
import { Image, Text } from 'ui/components'
import { styled, theme } from 'ui/styles'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
  background-color: ${theme.palette.dark_blue};
`

const StyledText = styled(Text)`
  font-style: italic;
  margin-right: 64px;
`

const IconLink = styled.a`
  display: flex;
  cursor: pointer;

  :not(:last-child) {
    margin-right: 8px;
  }
`

const ContactIcon = styled(Image)`
  filter: grayscale(1);
  transition: filter ${theme.transition.hover}ms ease;

  &:hover {
    filter: grayscale(0);
  }
`

export const BurgerContacts: React.FC = () => {
  return (
    <Wrapper>
      <StyledText variant="h2">Contacts:</StyledText>
      {CONTACTS.map((contact, i) => (
        <IconLink key={i} href={contact.link} target="_blank">
          <ContactIcon key={i} name={`contacts/${contact.title}.webp`} height="32px" alt={contact.title} />
        </IconLink>
      ))}
    </Wrapper>
  )
}
