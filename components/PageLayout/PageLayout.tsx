import { Layout } from "antd";
import AppHeader from "../AppHeader/AppHeader";
import React from 'react';

const { Content } = Layout;

export default function PageLayout({ children }) {
  return (
    <Layout>
      <AppHeader />
      <Layout style={{ padding: '0 24px 24px' }}>
        <Content 
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}>
            {children}
        </Content>
      </Layout>
    </Layout>
  )
}