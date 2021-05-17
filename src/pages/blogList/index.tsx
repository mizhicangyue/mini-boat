import React, { FC } from 'react';
import List from '../../components/blogList/index'
import {Avatar, Card, Col, Image, Row} from "antd";
import {EditOutlined, EllipsisOutlined, SettingOutlined} from "@ant-design/icons/lib";
import Meta from 'antd/lib/card/Meta';

const BlogList: FC = () => (
    <div className="site-layout-content">
        <Row wrap={true} gutter={20}>
            <Col  flex="1"  style={{marginTop:10}}>
                <Card
                    cover={
                        (
                            <Image
                                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
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
                            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>}
                        title="Card title"
                        description="This is the description"
                    />
                </Card>
            </Col>
            <Col  flex="4" style={{marginTop:10}}>
                <Card>
                    <List />
                </Card>
            </Col>
        </Row>
    </div>
);

export default BlogList;
