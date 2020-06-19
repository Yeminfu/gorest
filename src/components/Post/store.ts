import { api } from "./api";
import { observable, action } from "mobx";
import { status, postType } from "./types";

class Store {
  @observable status: status = "pending";
  @observable post: postType = {
    title: "",
    body: "",
  };

  @action.bound
  async fetcher(post_id: string | number) {
    this.status = "pending";
    try {
      const response = await api(post_id);
      const { success, error } = response;
      if (success) {
        this.status = "done";
        this.post = success.result;
      } else if (error) {
        this.status = "error";
      }
    } catch (error) {
      this.status = "error";
    }
  }
}

export default Store;
