import { Layout } from "antd";
import "antd/dist/antd.css";
import React, { memo, ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";
import styles from "./Layout.module.scss";
import Sider from "./Sider";

const { Content } = Layout;

type Props = {
  children: ReactNode;
};

const AppLayout: React.FC<Props> = (props) => {
  return (
    <Layout>
      <Sider />
      <Layout className={styles["layout"]}>
        <Header />
        <Content className={styles["layout__content"]}>
          {props.children}
        </Content>
        <Footer />
      </Layout>
    </Layout>
  );
};

export default memo(AppLayout);
