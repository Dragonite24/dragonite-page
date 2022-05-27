import React from 'react'
import { CSSTransition } from 'react-transition-group'

import { Text } from 'ui/components'
import { JOBS } from 'app/data/work-experience'

import { styled, theme } from 'ui/styles'

const StyledTabPanels = styled.div`
  position: relative;
  width: 100%;
`

const StyledTabPanel = styled.div<{ hidden: boolean }>`
  position: absolute;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px;

  &.fade-enter {
    opacity: 0;
  }
  &.fade-enter-active {
    opacity: 1;
    transition: opacity 300ms ease;
  }
  &.fade-exit {
    opacity: 1;
  }
  &.fade-exit-active {
    opacity: 0;
    transition: opacity 300ms ease;
  }
`

const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
`

const StyledLi = styled.li`
  position: relative;
  padding-left: 30px;
  margin-bottom: 10px;
  color: ${theme.palette.extra_light_grey};

  ::before {
    content: '▹';
    width: 20px;
    height: 20px;
    position: absolute;
    left: 0px;
    color: ${theme.palette.green};
  }
`

const Company = styled(Text)`
  margin-bottom: 10px;
`

const Period = styled(Text)`
  margin-bottom: 10px;
`

type Props = {
  activeIndex: number
  setActiveTab: (i: number) => void
}

export const TabPanel: React.FC<Props> = ({ activeIndex, setActiveTab }) => (
  <StyledTabPanels>
    {JOBS.map((el, i) => (
      <CSSTransition key={i} in={activeIndex === i} timeout={250} classNames="fade" mountOnEnter unmountOnExit>
        <StyledTabPanel hidden={activeIndex !== i}>
          <Company variant="t2" color={theme.palette.white}>
            {el.title}
          </Company>
          <Period variant="t1" color={theme.palette.white}>
            {el.period}
          </Period>
          <StyledUl>
            {el.did.map((el, i) => (
              <StyledLi key={i}>{el}</StyledLi>
            ))}
          </StyledUl>
        </StyledTabPanel>
      </CSSTransition>
    ))}
  </StyledTabPanels>
)
