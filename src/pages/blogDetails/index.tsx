import React, {FC, useEffect, useState} from 'react';
import MDEditor from '@uiw/react-md-editor';
import getService from "../../services/api";

const Md: any = (props: any) => {
    const [markdown, setMarkdown] = useState(props.value);
    const getData = async () => {
        const {data} = await getService('getDetails')
        setMarkdown(data)
    };
    useEffect(() => {
        getData()
    }, [])
    return <MDEditor.Markdown style={{height: window.innerHeight * 0.7}} source={markdown}/>
};
export default Md;
