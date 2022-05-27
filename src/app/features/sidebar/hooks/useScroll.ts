import React from 'react'
import { RootState } from 'root-reducer'
import { useDispatch, useSelector } from 'react-redux'

import { setActiveSection } from 'store/sections/actions'

import { sections } from 'nav-sections'

type FX = {
  startTime: number
  duration: number
  startScroll: number
  endScroll: number
}

export const useScroll = () => {
  const dispatch = useDispatch()

  const activeSection = useSelector((state: RootState) => state.popup.activeSection)

  let fx: FX | null = null

  React.useEffect(() => {
    const handleScroll = (): void => {
      if (fx) return
      for (let i = sections.length - 1; i > 0; i--) {
        const target = document.getElementById(sections[i].id)!

        if (window.scrollY >= target.offsetTop - target.offsetHeight / 2) {
          dispatch(setActiveSection(i))
          return
        }
      }
      dispatch(setActiveSection(0))
    }

    // clean up code
    window.removeEventListener('scroll', handleScroll)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [dispatch, fx])

  const handleNewAnimationFrame = (): void => {
    const now = Date.now()
    const timePos = Math.min(1, (now - fx!.startTime) / fx!.duration)
    const scrollPos = 1 - Math.pow(1 - timePos, 3) // easing
    const scroll = fx!.startScroll + (fx!.endScroll - fx!.startScroll) * scrollPos
    window.scrollTo({ top: scroll })

    if (timePos === 1) {
      fx = null
    } else {
      window.requestAnimationFrame(handleNewAnimationFrame)
    }
  }
  const goto = (i: number): void => {
    const id = sections[i].id
    const target = document.getElementById(id)!

    if (!fx) {
      window.requestAnimationFrame(handleNewAnimationFrame)
    }

    fx = {
      startTime: Date.now(),
      duration: 700,
      startScroll: window.scrollY,
      endScroll: target.offsetTop
    }

    dispatch(setActiveSection(i))
  }

  return { activeSection, goto, handleNewAnimationFrame }
}
