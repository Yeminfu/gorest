import React from "react";
import { useParams } from "react-router-dom";

export const hookWrapper = (Component: any) => (props: any) => {
  let { id } = useParams();
  return <Component user_id={id} {...props} />;
};
