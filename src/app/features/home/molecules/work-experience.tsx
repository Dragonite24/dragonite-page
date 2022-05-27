import { breakpoints } from 'app/shared'
import React, { useState } from 'react'

import { Divider, Text } from 'ui/components'
import { styled, theme } from 'ui/styles'

import { TabList, TabPanel } from '../atoms'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: ${theme.palette.dark_blue};
`

const Header = styled(Text)`
  display: flex;
  position: relative;
  margin: 0 0 16px 18px;

  ::after {
    content: 'Work experience';
    position: absolute;
    color: ${theme.palette.white};
    left: 2px;
  }
`
const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  min-height: 300px;
  justify-content: flex-start;
  width: 100%;

  @media (max-width: ${breakpoints.mobile - 1}px) {
    flex-direction: column;
  }
`

const StyledJobsSection = styled.section`
  width: 100%;
  max-width: 700px;
`

export const WorkExperienceSection: React.FC = () => {
  const [activeTabId, setActiveTabId] = useState(0)

  return (
    <Wrapper>
      <StyledJobsSection>
        <Header variant="h3" color={theme.palette.green}>
          Work experience
        </Header>
        <Divider />
        <Content>
          <TabList activeIndex={activeTabId} setActiveTab={setActiveTabId} />
          <TabPanel activeIndex={activeTabId} setActiveTab={setActiveTabId} />
        </Content>
      </StyledJobsSection>
    </Wrapper>
  )
}
