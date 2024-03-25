"use client"
import '@wangeditor/editor/dist/css/style.css' // 引入 css

import React, { useState, useEffect } from 'react'
import { IDomEditor, IEditorConfig, IToolbarConfig, i18nGetResources, t } from '@wangeditor/editor'
import Editor from '@/component/layout/home'
import Socket from '@/component/socket'
function home() {
    return <div>
        {/* <Editor /> */ }
        <Socket />
    </div>
}
export default home