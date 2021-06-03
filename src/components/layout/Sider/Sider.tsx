import { Layout, Menu } from "antd";
import "antd/dist/antd.css";
import { memo } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../../assets/icons/logo.png";
import { Page, paths } from "../../../core/routes/constants";
import { links } from "./constants";
import { getKeys } from "./getKeys";
import styles from "./Sider.module.scss";

const { Sider } = Layout;

const AppSider: React.FC = () => {
  const location = useLocation();

  return (
    <Sider className={styles["sider"]}>
      <Link to={paths[Page.HOME]}>
        <img src={logo} alt="logo" className={styles["sider__logo"]} />
      </Link>
      <Menu
        theme="dark"
        mode="inline"
        selectedKeys={[getKeys(location.pathname)]}
        className={styles["sider__menu"]}
      >
        {links.map((link) => (
          <Menu.Item key={link.id} className={styles["sider__menu-item"]}>
            <img src={link.icon} alt="menu" />
            <br />
            <Link to={link.path}>{link.name}</Link>
          </Menu.Item>
        ))}
      </Menu>
    </Sider>
  );
};

export default memo(AppSider);
