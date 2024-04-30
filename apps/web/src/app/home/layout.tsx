import type { JSXElementConstructor } from 'react'
import { MainLayout } from '@/components/layout/main-layout'

export default function HomeLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactElement<any, string | JSXElementConstructor<any>> | React.ReactElement<any, string | JSXElementConstructor<any>>[]
}) {
  return (
    <MainLayout>
      { children }
    </MainLayout>
  )
}
