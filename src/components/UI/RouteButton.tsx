import React from "react";
import { withRouter } from "react-router-dom";
import { Button } from "antd";

export const RouteButton = withRouter(
  ({ history, path, disabled, children }: any) => (
    <Button
      type="primary"
      disabled={disabled}
      onClick={() => history.push(path)}
    >
      {children}
    </Button>
  )
);
