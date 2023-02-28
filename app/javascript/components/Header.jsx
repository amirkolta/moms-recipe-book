import React from "react";
import { Layout, Menu } from "antd";

const { Header } = Layout;

export default () => (
  <Header>
    <div className="logo" />
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
      <Menu.Item key="1"><a href="/">Recipes</a></Menu.Item>
      <Menu.Item key="2">New Recipe</Menu.Item>
    </Menu>
  </Header>
);