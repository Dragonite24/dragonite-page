import React from 'react'

import { breakpoints } from 'app/shared'
import { JOBS } from 'app/data/work-experience'
import { Text } from 'ui/components'
import { styled, theme } from 'ui/styles'

const StyledTabList = styled.div`
  width: 140px;

  @media (max-width: ${breakpoints.mobile - 1}px) {
    display: flex;
    overflow-x: auto;
    width: 100%;
    margin-bottom: 20px;
  }
`

const StyledTabButton = styled.button<{ tabIndex: number; isActive: boolean }>`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 250px;
  height: 42px;
  padding: 0 16px;
  border-left: 5px solid ${({ theme, isActive }) => (isActive ? theme.palette.green : theme.palette.dark_grey)};

  color: ${({ isActive, theme }) => (isActive ? theme.palette.white : theme.palette.light_grey)};
  text-align: left;

  transition: border, color, ${theme.transition.hover}ms ease;

  @media (max-width: ${breakpoints.mobile - 1}px) {
    justify-content: center;
    min-width: 120px;
    border-left: 0;
    border-bottom: 2px solid ${({ isActive, theme }) => (isActive ? theme.palette.green : theme.palette.dark_grey)};
    text-align: center;
  }

  @media (hover: hover) {
    &:hover {
      background-color: ${({ theme }) => theme.palette.hover_dark_blue};
      color: ${({ theme }) => theme.palette.white};
    }
  }
`

type Props = {
  activeIndex: number
  setActiveTab: (i: number) => void
}

export const TabList: React.FC<Props> = ({ activeIndex, setActiveTab }) => {
  return (
    <StyledTabList>
      {JOBS &&
        JOBS.map(({ company }, i) => (
          <StyledTabButton
            key={i}
            isActive={activeIndex === i}
            onClick={() => setActiveTab(i)}
            tabIndex={activeIndex === i ? 0 : -1}
          >
            <Text variant="t1">{company}</Text>
          </StyledTabButton>
        ))}
    </StyledTabList>
  )
}
