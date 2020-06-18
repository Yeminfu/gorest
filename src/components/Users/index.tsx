import React, { useEffect } from "react";
import { observer } from "mobx-react";
import { Button, Table } from "antd";
import AppState from "./state";
import { columns } from "./columns";

interface stateType {
  appState: {
    state: string;
    fetchProjects: any;
    users: Array<{}>;
    meta: any;
  };
}

const UsersView = observer(({ appState }: stateType) => {
  useEffect(() => {
    appState.fetchProjects(1);
  }, []);

  const data = appState.users.map((x: any) => ({ ...x, key: x.id }));

  const rowSelection = {
    onChange: (selectedRowKeys: any, selectedRows: any) => {},
    getCheckboxProps: (record: any) => ({}),
  };

  if (appState.state === "error") {
    return <>ooops o_O</>;
  } else {
    return (
      <>
        <Table
          rowSelection={{
            type: "checkbox",
            ...rowSelection,
          }}
          columns={columns}
          dataSource={data}
          pagination={{
            pageSize: 20,
            current: 1,
            total: appState.meta.totalCount,
            position: ["topLeft", "bottomLeft"],
          }}
          onChange={(p) => {
            const { current } = p;
            appState.fetchProjects(current);
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
          loading={appState.state === "pending"}
        />
        <Button type="primary" onClick={appState.fetchProjects}>
          Fetch
        </Button>
      </>
    );
  }
});

class Users extends React.Component {
  render() {
    return (
      <div>
        <UsersView appState={new AppState()} />
      </div>
    );
  }
}

export default Users;
