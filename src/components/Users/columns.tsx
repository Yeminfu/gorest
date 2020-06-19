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
    title: "First Name",
    dataIndex: "first_name",
    key: "first_name",
  },
  {
    title: "Last Name",
    dataIndex: "last_name",
    key: "last_name",
  },
  {
    title: "Action",
    key: "action",
    render: (text: any, record: any) => (
      <Space size="middle">
        <RouteButton
          path={`/users/posts/${record.id}`}
          disabled={!record.isSelected}
        >
          View posts
        </RouteButton>
      </Space>
    ),
  },
];
