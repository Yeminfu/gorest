import { stateData } from "./state";
import { api } from "./api";

export const fetcher = async (page: string | number) => {
  window.history.pushState("", "", `?page=${page}`);
  stateData.status = "pending";

  try {
    const response = await api(page);
    const { success, error } = response;
    if (success) {
      stateData.status = "done";
      stateData.users = success.result;
      stateData.meta = success._meta;
    } else if (error) {
      stateData.status = "error";
    }
  } catch (error) {
    stateData.status = "error";
  }
};
