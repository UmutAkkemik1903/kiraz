import React from 'react';
import { Layout, Space } from 'antd';
import NavBar from './navbar'
import SideBar from './sidebar'
import {Outlet} from "react-router-dom";
const { Header, Footer, Sider, Content } = Layout;
const headerStyle = {
  height: 64,
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: '#fff',
  boxShadow:'0 1px 2px 0 rgba(0, 0, 0, 0.03), 0 1px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px 0 rgba(0, 0, 0, 0.02)'
};
const contentStyle = {
  textAlign: 'center',
  minHeight: 792,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: 'White',
};
const siderStyle = {
  textAlign: 'center',
  lineHeight: '120px',
  backgroundColor: '#fff',
};
const App = () => (
  <Space
    direction="vertical"
    style={{
      width: '100%',
    }}
    size={[0, 48]}
  >
    
    <Layout>
      <Header style={headerStyle}><NavBar /></Header>
      <Layout hasSider>
        <Sider style={siderStyle}><SideBar /></Sider>
        <Content
            style={ contentStyle}
          >
            <Outlet />
          </Content>
      </Layout>
    </Layout>
  </Space>
);
export default App; 