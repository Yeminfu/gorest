import { observable, action } from "mobx";
import { api } from "./api";

class AppState {
  @observable timer = 0;
  @observable state = "pending";
  @observable users: any[] = [];
  @observable meta = {};

  @action.bound
  async fetchProjects(page: string) {
    this.state = "pending";
    try {
      const response = await api(page);
      const { success, error } = response;
      if (success) {
        this.state = "done";
        this.users = success.result;
        this.meta = success._meta;
      }
      if (error) {
        this.state = "error";
      }
    } catch (error) {
      this.state = "error";
    }
  }
}

export default AppState;
