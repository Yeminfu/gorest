import React from "react";
import { hookWrapper } from "./hooksWrapper";
import { observer } from "mobx-react";
import store from "./store";
import { propsType } from "./types";
import { Spin } from "antd";

@observer
class Post extends React.Component<propsType> {
  componentDidMount() {
    this.props.store.fetcher(this.props.post_id);
  }
  render() {
    const { title, body } = this.props.store.post;
    const { status } = this.props.store;
    switch (status) {
      case "pending":
        return <Spin />;
      case "done":
        return (
          <>
            <h1>{title}</h1>
            <p>{body}</p>
          </>
        );
      case "error":
        return <>ooops O_O</>;
      default:
        return <>ooops O_O</>;
    }
  }
}

export default hookWrapper((props: any) => (
  <Post {...props} store={new store()} />
));
