import React from 'react'
import { Image } from 'ui/components'

import { styled, theme } from 'ui/styles'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: min-content;
  padding: 16px 0;
`

const IconLink = styled.a`
  display: flex;
  cursor: pointer;
  :not(:last-child) {
    margin-bottom: 8px;
  }
`

const ContactIcon = styled(Image)`
  filter: grayscale(1);
  transition: filter ${theme.transition.hover}ms ease;

  &:hover {
    filter: grayscale(0);
  }
`

type ContactT = {
  title: string
  link: string
}

const contactLinks: ContactT[] = [
  {
    title: 'telegram-logo',
    link: 'https://t.me/dragonite24'
  },
  {
    title: 'github-logo',
    link: 'https://github.com/Dragonite24'
  }
]

export const ContactsBar: React.FC = () => (
  <Wrapper>
    {contactLinks.map((contact, i) => (
      <IconLink key={i} href={contact.link} target="_blank">
        <ContactIcon key={i} name={`contacts/${contact.title}.webp`} height="24px" alt={contact.title} />
      </IconLink>
    ))}
  </Wrapper>
)
