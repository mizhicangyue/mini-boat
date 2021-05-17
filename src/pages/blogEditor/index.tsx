import React, {FC, useState} from 'react';
import MarkdownEditor from '@uiw/react-markdown-editor';
import MDEditor from '@uiw/react-md-editor';
import {MessageOutlined, LikeOutlined, StarOutlined} from '@ant-design/icons';

const Md: any = (props: any) => {
    const [markdown, setMarkdown] = useState(props.value || '');
    return <MarkdownEditor
        value={markdown}
        height={window.innerHeight*0.7}
        onChange={(editor: any, data: any, value: string) => setMarkdown(value)}
    />
};
export default Md;