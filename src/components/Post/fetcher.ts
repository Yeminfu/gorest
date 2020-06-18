import { stateData } from "./state";
import { api } from "./api";

export const fetcher = async (post_id: string | number) => {
  try {
    const response = await api(post_id);
    console.log("response", response);

    const { success, error } = response;
    if (success) {
      stateData.status = "done";
      stateData.post = success.result;
    } else if (error) {
      stateData.status = "error";
    }
  } catch (error) {
    stateData.status = "error";
  }
};