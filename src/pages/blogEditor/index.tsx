import React, {FC, useState} from 'react';
import MarkdownEditor from '@uiw/react-markdown-editor';
import MDEditor from '@uiw/react-md-editor';
import {MessageOutlined, LikeOutlined, StarOutlined} from '@ant-design/icons';
import {Button, message} from "antd";
import getService from "../../services/api";

const Md: any = (props: any) => {
    const [markdown, setMarkdown] = useState(props.value || '');
    return <div>
        <MarkdownEditor
            value={markdown}
            height={window.innerHeight * 0.7}
            onChange={(editor: any, data: any, value: string) => setMarkdown(value)}
        />
        <Button style={{marginTop: 20, float: 'right'}} type={'primary'} onClick={async () => {
            const {code} = await getService('addArticle',{markdown});
            if (code === 200) {
                message.success('成功')
            } else {
                message.error('成功')
            }
        }
        }>
            保存
        </Button>
    </div>
};
export default Md;
