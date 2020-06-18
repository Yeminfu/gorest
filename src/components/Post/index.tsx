import React from "react";
import { hookWrapper } from "./hooksWrapper";
import { stateData } from "./state";
import { fetcher } from "./fetcher";
import { observer } from "mobx-react";

@observer
class Post extends React.Component<{
  post_id: string | number;
  stateData: any;
}> {
  componentDidMount() {
    fetcher(this.props.post_id);
  }
  render() {
    const { title, body } = this.props.stateData.post;
    return (
      <>
        <h1>{title}</h1>
        <p>{body}</p>
      </>
    );
  }
}

export default hookWrapper((props: any) => (
  <Post {...props} stateData={stateData} />
));
