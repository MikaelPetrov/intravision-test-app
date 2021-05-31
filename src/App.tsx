import { Layout } from "antd";
import "antd/dist/antd.css";
import React, { memo } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Sider from "./components/layout/Sider";
import AppRoutes from "./core/routes/AppRoutes";

const { Content } = Layout;

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Sider />
          <Layout className="site-layout">
            <Header />
            <Content style={{ overflow: "initial" }}>
              <div className="site-layout-background">
                <Switch>
                  <AppRoutes />
                </Switch>
              </div>
            </Content>
            <Footer />
          </Layout>
        </Layout>
      </Router>
    </div>
  );
};

export default memo(App);
