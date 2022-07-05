import { breakpoints } from 'app/shared'
import React from 'react'
import { Button, Text } from 'ui/components'

import { styled, theme } from 'ui/styles'
import { shuffleStr } from 'utils/shuffle'

const BIOGRAPHY: TextType[] = [
  {
    title: 'Student years (2018-2022)',
    text: [
      'Lorem ipsum odor amet, consectetuer adipiscing elit. Mus integer finibus nulla curae molestie dictum maximus. Parturient molestie nibh class natoque cubilia vulputate fusce libero. Vehicula nam elit tellus venenatis hendrerit scelerisque dapibus. Arcu finibus placerat eros dis torquent conubia viverra integer. Himenaeos parturient fusce aliquet fermentum nisi tincidunt tellus condimentum. Et non dignissim convallis magnis class. Cubilia erat id euismod himenaeos, erat commodo. Lectus semper phasellus imperdiet nunc cubilia; arcu nulla.',
      'Lorem ipsum odor amet, consectetuer adipiscing elit. Quis netus curae fusce proin placerat platea sollicitudin. Cubilia nibh blandit diam ad. Quisque ipsum molestie nascetur velit et diam tristique. Ex lectus etiam phasellus ligula pharetra lectus metus. Cursus ut et eleifend arcu eget. Nisi sed habitasse vel nibh conubia ridiculus ullamcorper class.',
      'Lorem ipsum odor amet, consectetuer adipiscing elit. Quis netus curae fusce proin placerat platea sollicitudin. Cubilia nibh blandit diam ad. Quisque ipsum molestie nascetur velit et diam tristique. Ex lectus etiam phasellus ligula pharetra lectus metus. Cursus ut et eleifend arcu eget. Nisi sed habitasse vel nibh conubia ridiculus ullamcorper class.',
      'Lorem ipsum odor amet, consectetuer adipiscing elit. Mus integer finibus nulla curae molestie dictum maximus. Parturient molestie nibh class natoque cubilia vulputate fusce libero. Vehicula nam elit tellus venenatis hendrerit scelerisque dapibus. Arcu finibus placerat eros dis torquent conubia viverra integer. Himenaeos parturient fusce aliquet fermentum nisi tincidunt tellus condimentum. Et non dignissim convallis magnis class. Cubilia erat id euismod himenaeos, erat commodo. Lectus semper phasellus imperdiet nunc cubilia; arcu nulla.'
    ]
  }
]

const Wrapper = styled.div`
  display: flex;
  height: 100%;
`

const Padding = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1024px;
  padding: 32px;
`

const SortSection = styled.section`
  display: inline-flex;
  align-items: center;
  margin-bottom: 8px;
`

const SortText = styled(Text)``

const SortButton = styled(Button)<{ activated: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 32px;
  height: 50px;
  width: 100px;

  opacity: ${({ activated }) => (activated ? '0' : '1')};
  pointer-events: ${({ activated }) => (activated ? 'none' : 'all')};

  color: ${theme.palette.white};
  background-color: ${theme.palette.green};
  transition: background-color ${theme.transition.hover} ease;

  @media (hover: hover) {
    &:hover {
      background-color: ${theme.palette.light_green};
    }
  }
`

const Border = styled.section`
  display: flex;
  width: 100%;
  overflow-y: scroll;
  border: 3px dashed ${theme.palette.grey};
  padding: 16px;

  @media (max-width: ${breakpoints.tablet - 1}px) {
    margin: 16px;
  }
  @media (max-width: ${breakpoints.mobile - 1}px) {
    margin: 8px;
  }
`
const StyledUl = styled.ul`
  display: flex;
  color: ${theme.palette.extra_light_grey};
`

const StyledLi = styled.li`
  flex-direction: column;
`

type TextType = {
  title: string
  text: string[]
}

export const Biography = () => {
  const [isSorted, setIsSorted] = React.useState<boolean>(false)
  const [sortText, setSortText] = React.useState<string>(shuffleStr('About Me'))

  const handlerSortText = () => {
    if (!isSorted) {
      setIsSorted(true)
    }
  }

  return (
    <Wrapper>
      <Padding>
        <SortSection>
          <SortText variant="h3" color={theme.palette.white}>
            {sortText}
          </SortText>
          <SortButton onClick={handlerSortText} activated={isSorted}>
            Sort
          </SortButton>
        </SortSection>
        <Border>
          <StyledUl>
            {BIOGRAPHY.map((el, i) => (
              <StyledLi key={i}>
                <Text variant="h1">{el.title}</Text>
                {el.text.map((text, idx) => (
                  <Text key={idx} variant="h4" justify>
                    {text}
                  </Text>
                ))}
              </StyledLi>
            ))}
          </StyledUl>
        </Border>
      </Padding>
    </Wrapper>
  )
}
