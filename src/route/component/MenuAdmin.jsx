import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { Link } from "react-router-dom";

export const MenuAdmin = () => {
  return (
    <>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
        <Menu.Item key={1}>
          <Link to="/admin/dashboard"> Dashboard</Link>
        </Menu.Item>
        <Menu.Item key={2}>
          <Link to="/admin/usermanager"> User Manager</Link>
        </Menu.Item>
        <Menu.Item key={3}>
          <Link to="/admin/homeworkmanager"> Homework </Link>
        </Menu.Item>
      </Menu>
    </>
  );
};
