'use client'
import type { JSXElementConstructor } from 'react'
import { MainLayout } from '@/components/layout/main-layout'
import { Aside } from '@/components/aside/aside'
import { AsideTrends } from '@/components/aside/aside-trends'
import { Suggestions } from '@/components/aside/suggestions'

export default function HomeLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactElement<any, string | JSXElementConstructor<any>> | React.ReactElement<any, string | JSXElementConstructor<any>>[]
}) {
  return (
    <MainLayout>
      { children }
      <Aside>
        <AsideTrends />
        <Suggestions />
      </Aside>
    </MainLayout>
  )
}
