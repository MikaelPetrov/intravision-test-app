import { Layout, Menu } from "antd";
import "antd/dist/antd.css";
import { memo } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../../assets/icons/logo.png";
import { Page, paths } from "../../../core/routes/constants";
import { links } from "./constants";
import styles from "./Sider.module.scss";

const { Sider } = Layout;

const AppSider: React.FC = () => {
  const location = useLocation();

  function getKeys() {
    switch (location.pathname) {
      case paths[Page.KNOWLEDGEBASE]:
        return "1";
      case paths[Page.TASKS]:
        return "2";
      case paths[Page.STAFF]:
        return "3";
      case paths[Page.CLIENTS]:
        return "4";
      case paths[Page.ASSETS]:
        return "5";
      case paths[Page.SETTINGS]:
        return "6";
      default:
        return "0";
    }
  }

  return (
    <Sider className={styles["sider"]}>
      <Link to={paths[Page.HOME]}>
        <img src={logo} alt="logo" className={styles["sider__logo"]} />
      </Link>
      <Menu
        theme="dark"
        mode="inline"
        selectedKeys={[getKeys()]}
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
