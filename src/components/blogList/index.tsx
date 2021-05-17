import React, {useEffect} from 'react';
import request from 'umi-request';
import {Image, Tag} from 'antd';
import {MessageOutlined, LikeOutlined, StarOutlined} from '@ant-design/icons';
import ProList, {ProListProps} from '@ant-design/pro-list';
import Title from "antd/es/typography/Title";

const IconText = ({icon, text}: { icon: any; text: string }) => (
    <span>
    {React.createElement(icon, {style: {marginRight: 8}})}
        {text}
  </span>
);

const dataSource = [
    {
        title: '语雀的天空',
    },
    {
        title: 'Ant Design',
    },
    {
        title: '蚂蚁金服体验科技',
    },
    {
        title: 'TechUI',
    },
];
const BlogList: any = (props: ProListProps<any, any>) => {
    return <div style={{textAlign: 'left'}}>
        <ProList<{ title: string }>
            itemLayout="vertical"
            rowKey="id"
            split={true}
            toolBarRender={() => [
                <Title level={2}>文章列表</Title>
                /**<Carousel  style={{width:'100%'}} autoplay>
                 <div>
                 <Title level={2}>1</Title>
                 </div>
                 <div>
                 <Title level={2}>1</Title>
                 </div>
                 <div>
                 <Title level={2}>1</Title>
                 </div>
                 <div>
                 <Title level={2}>1</Title>
                 </div>
                 </Carousel>**/
            ]}
            {...props}
            // headerTitle="竖排样式"
            // dataSource={dataSource}
            // metas={{
            //     title: {},
            //     description: {
            //         render: () => (
            //             <>
            //                 <Tag>语雀专栏</Tag>
            //                 <Tag>设计语言</Tag>
            //                 <Tag>蚂蚁金服</Tag>
            //             </>
            //         ),
            //     },
            //     actions: {
            //         render: () => [
            //             <IconText icon={StarOutlined} text="156" key="list-vertical-star-o"/>,
            //             <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o"/>,
            //             <IconText icon={MessageOutlined} text="2" key="list-vertical-message"/>,
            //         ],
            //     },
            //     extra: {
            //         render: () => (
            //             <Image
            //                 width={'50%'}
            //                 src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
            //             />
            //         ),
            //     },
            //     content: {
            //         render: () => {
            //             return (
            //                 <div onClick={() => {
            //                     console.log(props)
            //                     window.location.hash='/details';
            //                 }}>
            //                     段落示意：蚂蚁金服设计平台
            //                     design.alipay.com，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台
            //                     design.alipay.com，用最小的工作量，无缝接入蚂蚁金服生态提供跨越设计与开发的体验解决方案。
            //                 </div>
            //             );
            //         },
            //     },
            // }}
        />
    </div>
};
export default BlogList;
