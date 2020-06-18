import axios from "axios";

export const api = (
  page: string | number,
  user_id: string | number
): Promise<any> =>
  axios
    .get(
      `https://gorest.co.in/public-api/posts?_format=json&access-token=1r7E8WptcK0wJduG41LaztXzHLjP_Qg692RZ&user_id=${user_id}&page=${page}`
    )
    .then(function (response) {
      return {
        success: response.data,
      };
    })
    .catch(function (error) {
      return { error };
    });
