"use client"
import '@wangeditor/editor/dist/css/style.css' // 引入 css

import React, { useState, useEffect } from 'react'
import { Editor, Toolbar } from '@wangeditor/editor-for-react'
import { IDomEditor, IEditorConfig, IToolbarConfig, i18nGetResources, t } from '@wangeditor/editor'
function MyEditor() {
    // editor 实例
    const [editor, setEditor] = useState<IDomEditor | null>(null)   // TS 语法
    console.log(editor?.getAllMenuKeys())
    console.log(editor?.getMenuConfig('fontSize'))
    // 编辑器内容
    const [html, setHtml] = useState("<p>hello</p>");
    const jsonContent = [
        {
            type: "paragraph",
            children: [{ text: "试试是不是黑体" }],
            fontSize: "48px",
            fontFamily: "黑体",
            lineHeight: 3,
        },
    ];
    // const resources = i18nGetResources('en') // 'en' 或 'zh-CN'
    // useEffect(() => {
    //     editor?.insertText('hello world~~~')
    // }, [editor])

    // 工具栏配置
    const toolbarConfig: Partial<IToolbarConfig> = {}  // TS 语法

    // 编辑器配置
    const editorConfig: Partial<IEditorConfig> = {    // TS 语法
        placeholder: '请输入内容...',
    }

    // 及时销毁 editor ，重要！
    useEffect(() => {
        return () => {
            if (editor == null) return
            editor.destroy()
            setEditor(null)
        }
    }, [editor])

    useEffect(() => {
        console.log('getFragment', editor?.getFragment())
        console.log('getHtml', editor?.getHtml())
        // editor?.insertBreak()
    }, [editor, html])

    return (
        <>
            <div className='h-100  w-100 z-0'>
                <Toolbar
                    editor={ editor }
                    defaultConfig={ toolbarConfig }
                    mode="default"
                    style={ { borderBottom: '1px solid #ccc' } }
                />
                <Editor
                    defaultConfig={ editorConfig }
                    value={ html }
                    // defaultContent={ jsonContent }
                    onCreated={ setEditor }
                    onChange={ editor => setHtml(editor.getHtml()) }
                    mode="default"
                    style={ { height: '500px', overflowY: 'hidden' } }
                />
            </div>
            <div style={ { marginTop: '15px' } }>
                { html }
            </div>
        </>
    )
}
export default MyEditor