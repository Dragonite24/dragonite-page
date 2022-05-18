import { JOBS } from 'app/data/work-experience'
import React from 'react'
import { Text } from 'ui/components'

import { styled } from 'ui/styles'

const StyledTabList = styled.div`
  width: 140px;
  @media (max-width: 600px) {
    display: flex;
    overflow-x: auto;
    width: 100%;
    padding-left: 50px;
    margin-bottom: 20px;
  }

  @media (max-width: 480px) {
    width: 100%;
    padding-left: 25px;
    margin-left: -25px;
  }
`

const StyledTabButton = styled.button<{ tabIndex: number; isActive: boolean }>`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 250px;
  height: 42px;
  padding: 0 16px;
  border-left: 2px solid ${({ theme, isActive }) => (isActive ? theme.palette.green : theme.palette.dark_grey)};

  color: ${({ isActive, theme }) => (isActive ? theme.palette.white : theme.palette.light_grey)};
  text-align: left;

  @media (max-width: 768px) {
    padding: 0 15px 2px;
  }

  @media (max-width: 600px) {
    min-width: 120px;
    padding: 0 15px;
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
