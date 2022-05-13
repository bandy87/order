import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import "antd-css-utilities/utility.min.css";
import { Layout } from "antd";
import { Routes, Route } from "react-router-dom";

import AppHeader from "./components/common/AppHeader";
import MenuPage from "./components/modules/menu/MenuPage";
import ProductPage from "./components/modules/product/ProductPage";
import AuthModal from "./components/modules/auth/AuthModal";
import CartContainer from "./components/modules/cart/CartContainer";

const { Content } = Layout;

function App() {
  return (
    <>
      <Layout className="layout">
        <CartContainer />
        <AppHeader />
        <Content style={{ padding: "0 50px" }}>
          <div className="site-layout-content">
            <Routes>
              <Route path={"/menu"} element={<MenuPage />} />
              <Route path={"/menu/:slug/:id"} element={<ProductPage />} />
            </Routes>
          </div>
        </Content>
      </Layout>
      <AuthModal />
    </>
  );
}

export default App;
