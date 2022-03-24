import React, { useState, useEffect, useContext } from 'react'

import * as watcher from './watcher'

const DimensionsContext = React.createContext(watcher.values)
export const useDimensions = () => useContext(DimensionsContext)

export const DimensionsProvider: React.FC = ({ children }) => {
  const [state, setState] = useState(watcher.values)

  useEffect(() => {
    const updateState = () => setState(watcher.values)
    watcher.on('type', updateState)
    return () => watcher.off('type', updateState)
  }, [])

  return <DimensionsContext.Provider value={state}>{children}</DimensionsContext.Provider>
}
