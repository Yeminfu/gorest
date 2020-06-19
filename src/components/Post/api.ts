import axios from "axios";

export const api = (post_id: string | number): Promise<any> =>
  axios
    .get(`https://gorest.co.in/public-api/posts/${post_id}`, {
      params: {
        format: "json",
        "access-token": "1r7E8WptcK0wJduG41LaztXzHLjP_Qg692RZ",
      },
    })
    .then(function (response) {
      return {
        success: response.data,
      };
    })
    .catch(function (error) {
      return { error };
    });
