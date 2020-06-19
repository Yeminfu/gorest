import React from "react";
import { observer } from "mobx-react";
import { Table } from "antd";
import store from "./store";
import { columns } from "./columns";
import { hookWrapper } from "./hooksWrapper";
import { propsType } from "./types";

@observer
class UsersView extends React.Component<propsType> {
  componentDidMount() {
    const urlParams = new URLSearchParams(window.location.search);
    const initPage = urlParams.get("page");
    this.props.store.fetcher(initPage ? initPage : 1);
  }
  onSelectChange(selected: number[]) {
    const updatedUsers = this.props.store.users.map((item) => ({
      ...item,
      isSelected: selected.includes(item.id),
    }));
    this.props.store.setUsersForce(updatedUsers);
  }
  onPageChange({ current }: any) {
    this.props.store.fetcher(current);
  }
  render() {
    const rowSelection: any = {
      type: "checkbox",
      onChange: this.onSelectChange.bind(this),
    };
    const pagination: any = {
      pageSize: 20,
      position: ["topLeft", "bottomLeft"],
      current: this.props.store.meta.currentPage,
      total: this.props.store.meta.totalCount,
    };
    const { store } = this.props;

    if (store.status === "error") {
      return <>ooops o_O</>;
    } else {
      return (
        <Table
          rowSelection={rowSelection}
          columns={columns}
          dataSource={store.users}
          pagination={pagination}
          onChange={this.onPageChange.bind(this)}
          loading={store.status === "pending"}
        />
      );
    }
  }
}

export default hookWrapper((props: any) => (
  <UsersView {...props} store={new store()} />
));
