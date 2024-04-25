import React from 'react'
import { Button } from '@components/ui/button'

interface LeftSidebarProps {}
const LeftSidebar: React.FC<LeftSidebarProps> = () => {
  return (
    <div className="w-1/4 bg-gray-200 h-full">
      Left Sidebar
      <Button>Click me</Button>
    </div>
  )
}

export default LeftSidebar
