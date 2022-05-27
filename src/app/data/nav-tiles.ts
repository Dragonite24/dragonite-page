import { createRef } from 'react'

const headerRef = createRef<HTMLDivElement>()
const aboutMeRef = createRef<HTMLDivElement>()
const expRef = createRef<HTMLDivElement>()
const basedRef = createRef<HTMLDivElement>()

enum Tiles {
  home = 'Home',
  aboutMe = 'About Me',
  experience = 'Experience',
  based = 'Based'
}

export type TilesT = {
  title: string
  tileRef: React.RefObject<HTMLDivElement>
}

export const NAVIGATION_TILES: TilesT[] = [
  {
    title: Tiles.home,
    tileRef: headerRef
  },
  {
    title: Tiles.aboutMe,
    tileRef: aboutMeRef
  },
  {
    title: Tiles.experience,
    tileRef: expRef
  },
  {
    title: Tiles.based,
    tileRef: basedRef
  }
]
