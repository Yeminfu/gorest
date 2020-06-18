import { observable } from "mobx";

interface stateType {
  status: "pending" | "done" | "error";
  posts: Array<any>;
  meta: {};
}

const initialState: stateType = {
  status: "pending",
  posts: [],
  meta: {},
};

export var stateData = observable(initialState);
