import '@wangeditor/editor/dist/css/style.css' // 引入 css

import React, { useState, useEffect } from 'react'
import { Editor, Toolbar } from '@wangeditor/editor-for-react'
import { IDomEditor, IEditorConfig, IToolbarConfig, i18nGetResources, t } from '@wangeditor/editor'
export function MyEditor() {
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
    useEffect(() => {
        //     setTimeout(() => {
        //         setHtml(` <p style="text-indent:2em;text-align:justify"><span style="text-indent:2em">苏式月饼源自江浙地区，始于唐朝，盛于宋朝。到了清代，人们又发明了分层起酥工艺，制作出雪白金黄、酥香满口的酥皮月饼，苏式月饼从此开山创派。而清乾隆时期创立的中华老字号稻香村，对于苏式月饼有着独特的技艺传承和文化积累，可谓这一领域的宗师。今天，我们就来说说苏州稻香村的故事。</span><br> </p> <p style="text-align:center;text-indent:0em;margin-top:20px"><span style="text-indent:2em"><img src="http://resecms.gbxx123.com/img/202311/20231129093823_pugmisf7jt.png" title="" alt="截图20231129093702.png"></span></p> <p></p> <p style="text-align:center;text-indent:0em;margin-bottom:20px"><span style="font-family:'楷体' , '楷体_gb2312' , 'simkai'">苏式月饼</span></p>`)
        //     }, 1500)
        editor?.insertText('hello world~~~')
    }, [])

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