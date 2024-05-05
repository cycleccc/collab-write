'use client'
import { AnimatePresence } from 'framer-motion'
// import { orderBy, where } from 'firebase/firestore'
import { useWindow } from '@lib/context/window-context'
// import { useInfiniteScroll } from '@lib/hooks/useInfiniteScroll'
// import { tweetsCollection } from '@lib/firebase/collections'
import { SEO } from '@components/common/seo'
import { MainContainer } from '@components/home/main-container'
import { Input } from '@components/input/input'
import { UpdateUsername } from '@components/home/update-username'
import { MainHeader } from '@components/home/main-header'
import { Loading } from '@components/ui/loading'
import { Error } from '@components/ui/error'
import { useSession } from 'next-auth/react'

export default function Home(): JSX.Element {
  const { isMobile } = useWindow()
  const data = useSession()
  //   console.log('isMobile', isMobile)
  //   const { data, loading, LoadMore } = useInfiniteScroll(
  //     tweetsCollection,
  //     [where('parent', '==', null), orderBy('createdAt', 'desc')],
  //     { includeUser: true, allowNull: true, preserve: true },
  //   )
  const loading = false
  return (
    <MainContainer>
      <SEO title="Home / Twitter" />
      <MainHeader
        useMobileSidebar
        title="Home"
        className="flex items-center justify-between"
      >
        <UpdateUsername />
      </MainHeader>
      {!isMobile && <Input />}
      <section className="mt-0.5 xs:mt-0">
        {loading
          ? (
            <Loading className="mt-5" />
            )
          : !data
              ? (
                <Error message="Something went wrong" />
                )
              : (
                <>
                  <AnimatePresence mode="popLayout">
                    {/* {data.map(tweet => (
                      <Tweet {...tweet} key={tweet.id} />
                    ))} */}
                  </AnimatePresence>
                  {/* <LoadMore /> */}
                </>
                )}
      </section>
    </MainContainer>
  )
}
