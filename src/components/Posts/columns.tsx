import React from "react";
import { Space } from "antd";
import { RouteButton } from "../UI/RouteButton";

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
  {
    title: "Action",
    key: "action",
    render: (record: any) => (
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
