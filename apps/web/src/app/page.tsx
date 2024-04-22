'use client'
import '@wangeditor/editor/dist/css/style.css' // 引入 css

import React, { useEffect, useState } from 'react'
import { IDomEditor, IEditorConfig, IToolbarConfig, i18nGetResources, t } from '@wangeditor/editor'
import Editor from '@/component/layout/home'

function home() {
  return (
    <div>
      <Editor />
    </div>
  )
}
export default home
