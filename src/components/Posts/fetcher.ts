import { stateData } from "./state";
import { api } from "./api";

export const fetcher = async (
  page: string | number,
  user_id: string | number
) => {
  window.history.pushState("", "", `?page=${page}`);

  try {
    const response = await api(page, user_id);
    const { success, error } = response;
    if (success) {
      stateData.status = "done";
      stateData.posts = success.result;
      stateData.meta = success._meta;
    } else if (error) {
      stateData.status = "error";
    }
  } catch (error) {
    stateData.status = "error";
  }
};
