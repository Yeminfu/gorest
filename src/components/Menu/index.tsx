import React from "react";
import { MailOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { Link } from "react-router-dom";

class MenuComponent extends React.Component {
  items = [
    {
      path: "/",
      label: "/main",
    },
  ];
  state = {
    current: "...",
  };

  handleClick = (e: { key: any }) => {
    this.setState({
      current: e.key,
    });
  };

  render() {
    return (
      <div>
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal"
        >
          <Menu.Item key="mail" icon={<MailOutlined />}>
            <Link to="/users">Users</Link>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default MenuComponent;
