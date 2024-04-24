import React from 'react'
import { useWindow } from '@lib/context/window-context'
import RightSidebar from './components/RightSidebar'
import CenterContent from './components/CenterContent'

const ThreeColumnLayoutPage: React.FC = () => {
//   const { isMobile } = useWindow()
  return (
    <>
      <CenterContent />
      <RightSidebar />
    </>
  )
}

export default ThreeColumnLayoutPage
