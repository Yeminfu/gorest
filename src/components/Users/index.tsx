import React, { useEffect } from "react";
import { observer } from "mobx-react";
import { Button, Table } from "antd";
import { stateData } from "./state";
import { columns } from "./columns";
import { hookWrapper } from "./hooksWrapper";
import { fetcher } from "./fetcher";

interface propsType {
  user_id: string | number;
  stateData: {
    users: Array<{
      id: number;
    }>;
    status: any;
    meta: { totalCount: number; currentPage: number };
  };
}

@observer
class UsersView extends React.Component<propsType> {
  componentDidMount() {
    const urlParams = new URLSearchParams(window.location.search);
    const initPage = urlParams.get("page");
    fetcher(initPage ? initPage : 1);
  }
  onSelectChange(selected: any) {
    const statePosts = stateData.users;
    stateData.users = statePosts.map((item) => ({
      ...item,
      isSelected: selected.includes(item.id),
    }));
  }
  render() {
    const data = this.props.stateData.users.map((x: any) => ({
      ...x,
      key: x.id,
    }));
    // const rowSelection = {
    //   onChange: (selectedRowKeys: any, selectedRows: any) => {},
    //   getCheckboxProps: (record: any) => ({}),
    // };
    const rowSelection: any = {
      // selectedRowKeys,
      type: "checkbox",
      onChange: this.onSelectChange,
    };
    if (stateData.status === "error") {
      return <>ooops o_O</>;
    } else {
      return (
        <>
          <Table
            rowSelection={rowSelection}
            columns={columns}
            dataSource={data}
            pagination={{
              pageSize: 20,
              current: this.props.stateData.meta.currentPage,
              total: this.props.stateData.meta.totalCount,
              position: ["topLeft", "bottomLeft"],
            }}
            onChange={(p: any) => {
              const { current } = p;
              fetcher(current);
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
            loading={this.props.stateData.status === "pending"}
          />
        </>
      );
    }
  }
}

export default hookWrapper((props: any) => (
  <UsersView {...props} stateData={stateData} />
));
