import React from 'react'

import { useScroll } from 'app/features/sidebar'
import { NAVIGATION_TILES } from 'app/data'
import { styled, theme } from 'ui/styles'

import { MenuIcon } from '../atoms'
import { BurgerItem } from '../molecules'

const Wrapper = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 60px;
  background-color: transparent;
`

const Content = styled.div<{ visible: boolean }>`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 60px;
  width: 100%;
  background-color: ${theme.palette.grey};
  z-index: -2;

  opacity: ${({ visible }) => (visible ? '1' : '0')};
  transform: ${({ visible }) => (visible ? 'translateY(0)' : 'translateY(-60px)')};

  transition: transform, opacity, ${theme.transition.hover}ms ease;
`

type Props = {
  isOpened: boolean
}

export const BurgerMenu: React.FC<Props> = ({ isOpened }) => {
  const [opened, setOpened] = React.useState<boolean>(false)
  const onClick = () => setOpened(!opened)

  const { goto } = useScroll()

  React.useEffect(() => {
    if (!isOpened) {
      setOpened(false)
    }
  }, [isOpened])

  return (
    <Wrapper>
      <Content visible={opened}>
        {NAVIGATION_TILES.map((tile, i) => (
          <BurgerItem tile={tile} key={i} onClick={() => goto(i)} />
        ))}
      </Content>

      <MenuIcon onClick={onClick} opened={opened} />
    </Wrapper>
  )
}
