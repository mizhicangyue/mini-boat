import React, {FC, useEffect, useState} from 'react';
import List from '../../components/blogList/index'
import {Avatar, Card, Col, Image, Row, Space, Tag} from "antd";
import {
    EditOutlined,
    EllipsisOutlined,
    LikeOutlined,
    MessageOutlined,
    SettingOutlined,
    StarOutlined
} from "@ant-design/icons/lib";
import Meta from 'antd/lib/card/Meta';
import getService from '../../services/api';
import ProList, {ProListProps} from "@ant-design/pro-list";

const IconText = ({icon, text}: { icon: any; text: string }) => (
    <span>
    {React.createElement(icon, {style: {marginRight: 8}})}
        {text}
  </span>
);
const BlogList: FC = () => {
    const [list, setList] = useState()
    const [userInfo, setUserInfo] = useState<any>({})
    const getData = async () => {
        const {data} = await getService('getUser')
        setUserInfo(data)
    };
    useEffect(() => {
        getData()
    }, [])
    const listProps: ProListProps<any, any> = {
        request: async () => {
            const {data} = await getService('getList')
            return {
                data
            }
        },
        rowKey: 'id',
        metas: {
            title: {
                dataIndex: 'user',
                title: '用户',
                search: false,
            },
            avatar: {
                dataIndex: 'extraUrl',
                search: false,
            },
            description: {
                dataIndex: 'content',
                render: (_, row) => (
                    <Space size={0}>
                        {row.labels?.map((label: { name: string, color: string }) => (
                            <Tag color={'blue'} key={label.name}>
                                {label.name}
                            </Tag>
                        ))}
                    </Space>
                ),
                search: false,
            },
            actions: {
                render: (_, record) => [
                    <IconText icon={StarOutlined} text={record.details.star || 0} key="list-vertical-star-o"/>,
                    <IconText icon={LikeOutlined} text={record.details.like || 0} key="list-vertical-like-o"/>,
                    <IconText icon={MessageOutlined} text={record.details.like || 0} key="list-vertical-message"/>,
                ],
            },
            content: {
                render: (_, record) => {
                    return (
                        <div onClick={() => {
                            window.location.hash = `/details?id=${record.id}`;
                        }}>
                            {record.content}
                        </div>
                    );
                },
            },
            extra: {
                render: (_, record) => (
                    <Image
                        width={'50%'}
                        src={record.extraUrl}
                    />)
            }
        }
    }
    return <div className="site-layout-content">
        <Row wrap={true} gutter={20}>
            <Col flex="1" style={{marginTop: 10}}>
                <Card
                    cover={
                        (
                            <Image
                                src={userInfo.cover}
                            />
                        )
                    }
                    actions={[
                        <SettingOutlined key="setting"/>,
                        <EditOutlined key="edit"/>,
                        <EllipsisOutlined key="ellipsis"/>,
                    ]}
                >
                    <Meta
                        avatar={<Avatar
                            src={userInfo.avatar}/>}
                        title={userInfo.user}
                        description={userInfo.des}
                    />
                </Card>
            </Col>
            <Col flex="4" style={{marginTop: 10}}>
                <Card>
                    <List {...listProps}/>
                </Card>
            </Col>
        </Row>
    </div>
};

export default BlogList;
