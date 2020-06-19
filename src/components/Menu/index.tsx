import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import userIcon from "./icons/user.svg";
import { Icon } from "./icon";
class MenuComponent extends React.Component {
  items = [
    {
      path: "/users",
      label: "main",
      icon: userIcon,
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
          {this.items.map((item, i) => (
            <Menu.Item key={i} icon={<Icon src={item.icon} alt="user" />}>
              <Link to={item.path}>{item.label}</Link>
            </Menu.Item>
          ))}
        </Menu>
      </div>
    );
  }
}

export default MenuComponent;
