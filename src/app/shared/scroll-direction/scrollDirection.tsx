import { useCallback, useState, useEffect, createContext, useContext } from 'react'

type TScrollDirection = 'down' | 'up'

const ScrollDirectionContext = createContext<TScrollDirection>('down')

export const ScrollDirectionProvider: React.FC = ({ children }): JSX.Element => {
  const [direction, setDirection] = useState<TScrollDirection>('down')
  const [y, setY] = useState<number>(window.scrollY)

  const handleNavigation = useCallback(
    (e) => {
      const window = e.currentTarget
      if (y > window.scrollY) {
        setDirection('up')
      } else if (y < window.scrollY) {
        setDirection('down')
      }
      setY(window.scrollY)
    },
    [y]
  )

  useEffect(() => {
    setY(window.scrollY)
    window.addEventListener('scroll', handleNavigation)

    return () => {
      window.removeEventListener('scroll', handleNavigation)
    }
  }, [handleNavigation])

  return <ScrollDirectionContext.Provider value={direction}>{children}</ScrollDirectionContext.Provider>
}

export const useScrollDirection = (): TScrollDirection => useContext(ScrollDirectionContext)
