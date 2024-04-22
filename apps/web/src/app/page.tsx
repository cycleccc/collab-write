'use client'
import '@wangeditor/editor/dist/css/style.css' // 引入 css

import React from 'react'
import Link from 'next/link'

function home() {
  return (
    <Link href="/home">跳转到首页</Link>
  )
}
export default home
