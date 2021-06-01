import { Layout } from "antd";
import "antd/dist/antd.css";
import React, { memo } from "react";

const { Footer } = Layout;

const AppFooter: React.FC = () => {
  return <Footer style={{ padding: 0 }}></Footer>;
};

export default memo(AppFooter);
