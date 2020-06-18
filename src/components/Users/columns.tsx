import React from "react";
import { Button, Space } from "antd";
import { Link } from "react-router-dom";

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
        <Button type="primary">
          <Link to={`/users/posts/${record.id}`}>Перейти к постам</Link>
        </Button>
      </Space>
    ),
  },
];
