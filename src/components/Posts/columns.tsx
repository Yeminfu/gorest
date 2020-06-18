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
        <Button type="primary">
          <Link to={`/users/posts/post/${record.id}`}>Показать</Link>
        </Button>
      </Space>
    ),
  },
];
