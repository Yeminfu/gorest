import { api } from "./api";
import { observable, action } from "mobx";
import { status, userType } from "./types";
class Store {
  @observable status: status = "pending";
  @observable users: userType[] = [];
  @observable meta = {};

  @action.bound
  setUsersForce(users: userType[]) {
    this.users = users;
  }

  @action.bound
  async fetcher(page: string | number) {
    this.status = "pending";
    try {
      const response = await api(page);
      const { success, error } = response;
      if (success) {
        this.status = "done";
        this.users = success.result.map((user: userType) => ({
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
