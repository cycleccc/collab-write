import React from 'react'
import LeftSidebar from '../LeftSidebar'
import RightSidebar from './components/RightSidebar'
import CenterContent from './components/CenterContent'

const ThreeColumnLayoutPage: React.FC = () => {
  return (
    <div className="flex h-screen">
      <LeftSidebar />
      <CenterContent />
      <RightSidebar />
    </div>
  )
}

export default ThreeColumnLayoutPage
