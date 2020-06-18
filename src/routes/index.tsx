import React from "react";
import { Switch, Route } from "react-router-dom";
import { Main } from "../components/main";
import Users from "../components/Users";
import Posts from "../components/Posts";
import Post from "../components/Post";

// const Posts = () => <>Posts</>;

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        {/* <Route path="/about">
          <About />
        </Route>
      */}
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/users">
          <Users />
        </Route>
        <Route exact path="/users/posts/:id">
          <Posts />
        </Route>
        <Route exact path="/users/posts/post/:id">
          <Post />
        </Route>
      </Switch>
    );
  }
}

export default Routes;
