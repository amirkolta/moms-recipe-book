import { Layout } from "antd";
import React from "react";
import Recipes from "./Recipes";
import Header from "./Header";

const { Content, Footer } = Layout;

export default () => (
  <Layout className="layout">
    <Header />
    <Content style={{ padding: "0 50px" }}>
      <div className="site-layout-content" style={{ margin: "100px auto" }}>
        <Recipes/>
      </div>
    </Content>
    <Footer style={{ textAlign: "center" }}>YourMomsRecipes ©2022.</Footer>
  </Layout>
);