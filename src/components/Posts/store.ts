import { api } from "./api";
import { observable, action } from "mobx";
import { status, userType } from "./types";
class Store {
  @observable status: status = "pending";
  @observable posts: userType[] = [];
  @observable meta = {};

  @action.bound
  setUsersForce(posts: userType[]) {
    this.posts = posts;
  }

  @action.bound
  async fetcher(page: string | number, user_id: string | number) {
    this.status = "pending";
    try {
      const response = await api(page, user_id);
      const { success, error } = response;
      if (success) {
        this.status = "done";
        this.posts = success.result.map((user: userType) => ({
          ...user,
          key: user.id,
        }));
        this.meta = success._meta;
      }
      if (error) {
        this.status = "error";
      }
    } catch (error) {
      this.status = "error";
    }
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
}

export default Store;
