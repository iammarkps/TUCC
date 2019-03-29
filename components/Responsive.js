import React, { useState, useEffect } from 'react'
import { DESKTOP_MIN_WIDTH } from '../design'

/**
 *
 * @param {number} breakpoint - Set a breakpoint for a component to render
 * @param {React.ReactNode} children
 */
export function DesktopOnly({ breakpoint = DESKTOP_MIN_WIDTH, children }) {
  const width = useWindowWidth()
  if (width > breakpoint) {
    return children
  } else {
    return null
  }
}

function useWindowWidth() {
  const [width, setWidth] = useState(null)
  useEffect(() => {
    const listener = () => setWidth(window.innerWidth)
    window.addEventListener('resize', listener)
    listener()
    return () => window.removeEventListener('resize', listener)
  }, [])
  return width
}
