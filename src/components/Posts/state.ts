import { observable } from "mobx";

export var stateData = observable({
  status: "pending",
  posts: [],
  meta: {},
});
