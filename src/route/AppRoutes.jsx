import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";

import { useState } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { MenuAdmin } from "./component/MenuAdmin";
import { Dashboard } from "../pages/admin/dashboard";
import { UserManager } from "../pages/admin/user";
import { HomeworkManager } from "../pages/admin/homework";
import React from "react";
import { Layout, Menu, Breadcrumb } from "antd";
const { Header, Content, Footer, Sider } = Layout;

export const ManageRoute = () => {
  var navigate = useNavigate();
  // console.log("navigate", navigate);

  const [collapsed, setCollapsed] = useState(false);
  var history = useNavigate();

  const handleChangeMenu = () => {
    setCollapsed(!collapsed);
  };
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <MenuAdmin />
      </Sider>

      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {!collapsed ? (
            <MenuUnfoldOutlined onClick={handleChangeMenu} />
          ) : (
            <MenuFoldOutlined onClick={handleChangeMenu} />
          )}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          <Routes>
            <Route //localhost:3000/admin/*
              path="/*"
              element={<replace to="/admin/dashboard" />} // redirect localhost:3000/admin/dashboard
            />
            <Route
              path="/dashboard"
              element={<Dashboard />} // localhost:3000/admin/dashboard
            />
            <Route
              path="/usermanager"
              element={<UserManager />} // localhost:3000/admin/usermanager
            />
            <Route
              path="/homeworkmanager"
              element={<HomeworkManager />} // localhost:3000/admin/homeworkmanager
            />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
};

export const PublicRoute = () => {
  // console.log("navigate", navigate);

  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={new Array(15).fill(null).map((_, index) => {
            const key = index + 1;
            return {
              key,
              label: `nav ${key}`,
            };
          })}
        />
      </Header>
      <Content
        style={{
          padding: "0 50px",
        }}
      >
        <Breadcrumb
          style={{
            margin: "16px 0",
          }}
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-content">Content</div>
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
};

