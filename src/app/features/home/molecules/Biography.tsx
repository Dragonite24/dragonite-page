import { breakpoints, useDimensions } from 'app/shared'
import React from 'react'
import { Button, Text } from 'ui/components'

import { styled, theme } from 'ui/styles'
import { shuffleStr } from 'utils/shuffle'

const BIOGRAPHY: TextType[] = [
  {
    title: 'Student years (2018-2022):',
    text: [
      'Participated in the following contests, intensive courses and hackathons:',
      '- Regional educational intensive "Demid 20.35"',
      '- Training in the additional educational program "Markets of the National Technical Initiative" and "Innovative projects for NTI markets"',
      '- Regional educational course on programming "U-course" in Python',
      '- Programming courses of the All-Russian company "Tensor"',
      '- Semi-final of the All-Russian hackathon "Цифровой прорыв" (2nd place) 2020.',
      '- The final of the All-Russian hackathon "Цифровой прорыв" (2nd place) 2020.',
      '- Regional hackathon "Техно-хакатон" (1st place) 2020.',
      '- All-Russian hackathon of the Moscow Innovation Agency "Moscow City Hack" (4th place) 2020.',
      '- The final of the All-Russian hackathon "Цифровой прорыв" (1st place) 2021.',
      '- Hackathon from VTB Bank with WEB and DATA tracks (TOP 5)',
    ],
  },
  {
    title: 'OUT-OF-HOURS:',
    text: [
      'Participated in the development of prototypes of the following applications:',
      '"Voice`s" - an application for participation in public initiatives using augmented reality. Supported by a grant from the Innovation Promotion Foundation.',
      '"Inspeak" - an application for learning English with the help of a digital assistant in AR (augmented reality) (this solution took 4th place at the final of the All-Russian hackathon "Цифровой прорыв" 2020.)',
      '"Ориентир" is a platform for systematization, recording and monitoring of the tasks of civil servants (this solution took 2nd place at the semifinal of the All-Russian hackathon "Цифровой прорыв" 2020.)',
      'An application for the services of the Moscow innovation cluster (this solution took 4th place at the All-Russian hackathon of the Moscow Innovation Agency "Moscow City Hack")',
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
  max-width: 900px;
  padding: 32px;
`

const SortSection = styled.section`
  display: inline-flex;
  align-items: center;
  margin-bottom: 8px;
`

const SortText = styled(Text)`
  transition: all ${theme.transition.hover} ease;
`

const SortButton = styled(Button) <{ activated: boolean }>`
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
  margin-left: 56px;

  @media (max-width: ${breakpoints.tablet - 1}px) {
    margin: 16px;
  }
  @media (max-width: ${breakpoints.mobile - 1}px) {
    margin: 8px;
  }
`
const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  color: ${theme.palette.extra_light_grey};
`

const StyledLi = styled.li`
  flex-direction: column;

  &:not(:last-child) {
    margin-bottom: 32px;
  }
`

type TextType = {
  title: string
  text: string[]
}

const SORTED_TEXT = 'About Me'

export const Biography = () => {
  const [isSorted, setIsSorted] = React.useState<boolean>(false)
  const [sortText, setSortText] = React.useState<string>(shuffleStr(SORTED_TEXT))
  const { isMobile } = useDimensions()

  const handlerSortText = async () => {
    if (!isSorted) {
      setIsSorted(true)
      const array = sortText.split('')
      const original = SORTED_TEXT.split('')

      // TODO: исправить для повторяющихся символов строки
      for (let i = 0; i < SORTED_TEXT.length; i++) {
        setTimeout(() => {
          for (let j = 0; j < SORTED_TEXT.length; j++) {
            if (original.indexOf(array[j]) > original.indexOf(array[j + 1])) {
              const temp = array[j]
              array[j] = array[j + 1]
              array[j + 1] = temp
              setSortText(Object.values(array).join(''))
            }
          }
        }, i * 100)
      }
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
                <Text variant={isMobile ? 't1' : 'h2'}>{el.title}</Text>
                {el.text.map((text, idx) => (
                  <Text key={idx} variant={isMobile ? 't0' : 't1'} text_align="justify">
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
