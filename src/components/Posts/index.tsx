import React from "react";
import { hookWrapper } from "./hooksWrapper";
import { observer } from "mobx-react";
import { Table } from "antd";
import { columns } from "./columns";
import { stateData } from "./state";
import { fetcher } from "./fetcher";

interface propsType {
  user_id: string | number;
  stateData: {
    posts: Array<{
      id: number;
    }>;
    status: any;
    meta: any;
  };
}

@observer
class Posts extends React.Component<propsType> {
  componentDidMount() {
    const urlParams = new URLSearchParams(window.location.search);
    const initPage = urlParams.get("page");
    fetcher(initPage ? initPage : 1, this.props.user_id);
  }

  onSelectChange(selected: any) {
    const statePosts = stateData.posts;
    stateData.posts = statePosts.map((item) => ({
      ...item,
      isSelected: selected.includes(item.id),
    }));
  }

  onChangePage(p: any) {
    const { current } = p;
    fetcher(current, this.props.user_id);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  render() {
    const { user_id, stateData } = this.props;
    const { status } = stateData;
    const rowSelection: any = {
      // selectedRowKeys,
      type: "checkbox",
      onChange: this.onSelectChange,
    };
    if (status === "error") {
      return <>Ooops O_o</>;
    } else {
      return (
        <Table
          rowSelection={rowSelection}
          columns={columns}
          dataSource={stateData.posts.map((x) => ({ ...x, key: x.id }))}
          pagination={{
            pageSize: 20,
            current: stateData.meta.currentPage,
            total: stateData.meta.totalCount,
            position: ["topLeft", "bottomLeft"],
          }}
          onChange={this.onChangePage}
          loading={stateData.status === "pending"}
        />
      );
    }
  }
}

export default hookWrapper((props: any) => (
  <Posts {...props} stateData={stateData} />
));
