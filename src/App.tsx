import React from "react";
import "./App.css";
import Routes from "./routes";
import Menu from "./components/Menu";
import "antd/dist/antd.css";
import { Layout } from "antd";
const { Header, Content } = Layout;

function App() {
  return (
    // <div className="App">
    <Layout>
      <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
        <Menu />
      </Header>
      <Content
        className="site-layout"
        style={{
          padding: "20px 50px",
          marginTop: 64,
          minHeight: "calc(100vh - 64px)",
        }}
      >
        <Routes />
      </Content>
    </Layout>
    // </div>
  );
}

export default App;
