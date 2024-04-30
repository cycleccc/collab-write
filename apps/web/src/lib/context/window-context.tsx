'use client'
import { createContext, useContext, useEffect, useState } from 'react'
import type { ReactNode } from 'react'

interface WindowSize {
  width: number
  height: number
}

type TWindowContext = WindowSize & {
  isMobile: boolean
}

export const WindowContext = createContext<TWindowContext | null>(null)

interface WindowContextProviderProps {
  children: ReactNode
}

export function WindowContextProvider({
  children,
}: WindowContextProviderProps): JSX.Element {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: window.innerWidth,
    height: window.innerHeight,
  })

  useEffect(() => {
    const handleResize = (): void =>
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const value: TWindowContext = {
    ...windowSize,
    isMobile: windowSize.width < 500,
  }

  return (
    <WindowContext.Provider value={value}>{children}</WindowContext.Provider>
  )
}

export function useWindow(): TWindowContext {
  const context = useContext(WindowContext)

  if (!context)
    throw new Error('useWindow must be used within an WindowContextProvider')

  return context
}
