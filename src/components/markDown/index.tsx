import React, {FC, useState} from 'react';
import MarkdownEditor from '@uiw/react-markdown-editor';
import MDEditor from '@uiw/react-md-editor';
import {MessageOutlined, LikeOutlined, StarOutlined} from '@ant-design/icons';

const Md: any = (props: any) => {
    const [markdown, setMarkdown] = useState(props.value || '');
    return !props.value ? <MarkdownEditor
        value=''
        height={500}
        onChange={(editor: any, data: any, value: string) => setMarkdown(value)}
    /> : <MDEditor.Markdown source={markdown}/>
}
export default Md;