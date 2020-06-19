import React from "react";
import { hookWrapper } from "./hooksWrapper";
import { observer } from "mobx-react";
import { Table } from "antd";
import { columns } from "./columns";
import store from "./store";
import { propsType } from "./types";

@observer
class Posts extends React.Component<propsType> {
  componentDidMount() {
    const urlParams = new URLSearchParams(window.location.search);
    const initPage = urlParams.get("page");
    this.props.store.fetcher(initPage ? initPage : 1, this.props.user_id);
  }
  onSelectChange(selected: number[]) {
    const updatedPosts = this.props.store.posts.map((item) => ({
      ...item,
      isSelected: selected.includes(item.id),
    }));
    this.props.store.setUsersForce(updatedPosts);
  }
  onPageChange({ current }: any) {
    this.props.store.fetcher(current, this.props.user_id);
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
          dataSource={store.posts}
          pagination={pagination}
          onChange={this.onPageChange.bind(this)}
          loading={store.status === "pending"}
        />
      );
    }
  }
}
export default hookWrapper((props: any) => (
  <Posts {...props} store={new store()} />
));
