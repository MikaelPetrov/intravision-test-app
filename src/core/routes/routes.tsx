import React from "react";
import Assets from "../../components/pages/Assets";
import Clients from "../../components/pages/Clients";
import Home from "../../components/pages/Home";
import Knowledgebase from "../../components/pages/Knowledgebase";
import Requests from "../../components/pages/Requests";
import Settings from "../../components/pages/Settings";
import Staff from "../../components/pages/Staff";
import { Page, paths } from "./constants";
import { TypeRoute } from "./types";

export function getRoutes(): TypeRoute[] {
  return [
    {
      type: Page.HOME,
      path: paths[Page.HOME],
      component: <Home />,
      exact: true,
    },
    {
      type: Page.KNOWLEDGEBASE,
      path: paths[Page.KNOWLEDGEBASE],
      component: <Knowledgebase />,
    },
    {
      type: Page.REQUESTS,
      path: paths[Page.REQUESTS],
      component: <Requests />,
    },
    {
      type: Page.STAFF,
      path: paths[Page.STAFF],
      component: <Staff />,
    },
    {
      type: Page.CLIENTS,
      path: paths[Page.CLIENTS],
      component: <Clients />,
    },
    {
      type: Page.ASSETS,
      path: paths[Page.ASSETS],
      component: <Assets />,
    },
    {
      type: Page.SETTINGS,
      path: paths[Page.SETTINGS],
      component: <Settings />,
    },
  ];
}
