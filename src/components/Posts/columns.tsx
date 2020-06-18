import React from "react";
import { Button, Space } from "antd";
import { withRouter } from "react-router-dom";

const RouteButton = withRouter(({ history, path, disabled }: any) => (
  <>
    <Button
      type="primary"
      disabled={disabled}
      onClick={() => history.push(path)}
    >
      Показать
    </Button>
  </>
));

export const columns = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
  },
  // {
  //   title: "Body",
  //   dataIndex: "body",
  //   key: "body",
  // },
  {
    title: "Action",
    key: "action",
    render: (text: any, record: any) => (
      <Space size="middle">
        <RouteButton
          path={`/users/posts/post/${record.id}`}
          disabled={!record.isSelected}
        >
          Показать
        </RouteButton>
      </Space>
    ),
  },
];
