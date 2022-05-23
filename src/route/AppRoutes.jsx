import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Layout } from "antd";
import { useState } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { MenuAdmin } from "./component/MenuAdmin";
import { Dashboard } from "../pages/admin/dashboard";
import { UserManager } from "../pages/admin/user";
import { HomeworkManager } from "../pages/admin/homework";

const { Header, Sider, Content } = Layout;
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
              element={<Navigate replace to="/admin/dashboard" />} // redirect localhost:3000/admin/dashboard
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
