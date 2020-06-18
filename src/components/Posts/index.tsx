import React from "react";
import { hookWrapper } from "./hooksWrapper";
import { observer } from "mobx-react";
import { Table } from "antd";
import { columns } from "./columns";
import { stateData } from "./state";
import { fetcher } from "./fetcher";

@observer
class Posts extends React.Component<{
  user_id: string | number;
  stateData: any;
}> {
  componentDidMount() {
    fetcher(1, this.props.user_id);
  }
  render() {
    const { user_id, stateData } = this.props;
    const { status } = stateData;
    if (status === "error") {
      return <>Ooops O_o</>;
    } else {
      return (
        <>
          <Table
            rowSelection={{
              type: "checkbox",
            }}
            columns={columns}
            dataSource={stateData.posts}
            pagination={{
              pageSize: 20,
              current: 1,
              total: stateData.meta.totalCount,
              position: ["topLeft", "bottomLeft"],
            }}
            onChange={(p: any) => {
              const { current } = p;
              console.log("current", current);
              fetcher(current, user_id);
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
            loading={stateData.status === "pending"}
          />
        </>
      );
    }
  }
}

export default hookWrapper((props: any) => (
  <Posts {...props} stateData={stateData} />
));
