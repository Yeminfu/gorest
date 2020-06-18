import { stateData } from "./state";
import { api } from "./api";

export const fetcher = async (
  page: string | number,
  user_id: string | number
) => {
  try {
    const response = await api(page, user_id);
    const { success, error } = response;
    if (success) {
      stateData.status = "done";
      stateData.posts = success.result;
    } else if (error) {
      stateData.status = "error";
    }
  } catch (error) {
    stateData.status = "error";
  }
};
