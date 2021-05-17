import React, {FC} from 'react';
import {renderRoutes} from 'react-router-config'
import {Layout, Menu, Button, Modal} from 'antd';
import {EditOutlined} from "@ant-design/icons/lib";
import MD from "../components/blogList";

const {Header, Content, Footer} = Layout;
const BasicLayout: any = (props: any) => {
    const {route} = props;
    return <Layout className="layout">
        <Header style={{position: 'fixed', zIndex: 1, width: '100%'}}>
            <div className="logo"/>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                <Menu.Item key="1" onClick={()=>{
                    window.location.hash = '/'
                }}>首页</Menu.Item>
                <Menu.Item key="2">java</Menu.Item>
                <Menu.Item key="3">python</Menu.Item>
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
