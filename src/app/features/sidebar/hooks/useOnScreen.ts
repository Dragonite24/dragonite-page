import React from 'react'

export default function useOnScreen(ref: any, activeSection: number) {
  const [isIntersecting, setIntersecting] = React.useState(false)

  React.useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setIntersecting(entry.isIntersecting))
    observer.observe(ref.current)
    // Remove the observer as soon as the component is unmounted
    return () => {
      observer.disconnect()
    }
  }, [activeSection, ref])

  return isIntersecting
}
