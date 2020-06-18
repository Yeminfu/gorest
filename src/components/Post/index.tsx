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
    // stateData.status = "ddddd";
    const { title, body } = this.props.stateData.post;
    return (
      <>
        <h1>{title}</h1>
        <p>{body}</p>
        {/* {stateData.status} */}
        {/* <pre>{JSON.stringify({ stateData }, null, " ")}</pre> */}
      </>
    );
  }
}

export default hookWrapper((props: any) => (
  <Post {...props} stateData={stateData} />
));
