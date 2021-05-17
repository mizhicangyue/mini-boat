import React, {FC} from 'react';
import {renderRoutes} from 'react-router-config'
import {Layout, Menu, Button, Modal} from 'antd';
import {EditOutlined} from "@ant-design/icons/lib";
import MD from "../components/blogList";

const {Header, Content, Footer} = Layout;
const BasicLayout: any = (props: any) => {
    const {route} = props;
    console.log(renderRoutes(route.routes))
    return <Layout className="layout">
        <Header style={{position: 'fixed', zIndex: 1, width: '100%'}}>
            <div className="logo"/>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                <Menu.Item key="1">nav 1</Menu.Item>
                <Menu.Item key="2">nav 2</Menu.Item>
                <Menu.Item key="3">nav 3</Menu.Item>
                <Button style={{float: 'right', marginTop: 18}} key="3" type="primary" icon={<EditOutlined/>}
                        onClick={() => {
                            window.location.hash = '/editor'
                        }}>
                    发布文章
                </Button>
            </Menu>
        </Header>
        <Content style={{padding: '80px 50px', overflow: 'scroll'}}>
            {renderRoutes(route.routes)}
        </Content>
        <Footer style={{textAlign: 'center'}}>Ant Design ©2018
            Created by Ant
            UED</Footer>
    </Layout>;
};
export default BasicLayout;