import { h, VNode } from 'snabbdom'
import { IDomEditor, DomEditor, IModuleConf, SlateElement } from '@wangeditor/editor'
import { MentionElement } from './custom-types'
import { DOMElement } from '@wangeditor/editor/dist/editor/src/utils/dom'
// 定义inline和void插件

function withMetion<T extends IDomEditor>(editor: T) {
    const { isInline } = editor
    const newEditor = editor
    console.log('test', 'withMetion')
    newEditor.isInline = elem => {
        const type = DomEditor.getNodeType(elem)
        if (type === 'mention') return true
        return isInline(elem)
    }
    return newEditor
}
// 渲染“@人”元素到编辑器
function renderMention(elem: SlateElement, children: VNode[] | null, editor: IDomEditor): VNode {
    // 当前节点是否选中
    console.log('test', 'renderMention')
    const selected = DomEditor.isNodeSelected(editor, elem)
    const { value = '' } = elem as MentionElement
    // 构建 vnode
    const vnode = h(
        'span',
        {
            props: {
                // 不可编辑
                contentEditable: false,
            },
            style: {
                marginLeft: '3px',
                marginRight: '3px',
                backgroundColor: 'var(--w-e-textarea-slight-bg-color)',
                // 选中/不选中，样式不一样
                border: selected
                    ? '2px solid var(--w-e-textarea-selected-border-color)' // wangEditor 提供了 css var https://www.wangeditor.com/v5/theme.html
                    : '2px solid transparent',
                borderRadius: '3px',
                padding: '0 3px',
            },
        },
        `@${ value }`
    )
    return vnode
}
// 解析 HTML 字符串，生成“@人”元素
function mentionParseHtml(elem: DOMElement) {
    console.log('test', 'mentionParseHtml')
    // elem HTML 结构 <span data-w-e-type="mention" data-w-e-is-void data-w-e-is-inline data-value="张三" data-info="xxx">@张三</span>
    const value = elem.getAttribute('data-value') || ''
    return {
        type: 'mention',
        value,
        children: [{ text: '' }], // void node 必须有一个空白 text
    }
}
// 生成“@人”元素的 HTML
function mentionToHtml(elem: SlateElement) {
    console.log('test', 'mentionToHtml')
    const { value = '' } = elem as MentionElement
    return `<span data-w-e-type="mention" data-w-e-is-void data-w-e-is-inline data-value="${ value }">@${ value }</span>`
}
const mentionToHtmlConf = {
    type: 'mention',
    elemToHtml: mentionToHtml,
}
const renderMentionConf = {
    type: 'mention',
    renderElem: renderMention,
}
const metionParseHtmlConf = {
    selector: 'span[data-w-e-type="mention"]',
    parseElemHtml: mentionParseHtml,
}

const metionModule: Partial<IModuleConf> = {
    editorPlugin: withMetion,
    renderElems: [renderMentionConf],
    elemsToHtml: [mentionToHtmlConf],
    parseElemsHtml: [metionParseHtmlConf],
}

export default metionModule