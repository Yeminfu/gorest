import axios from "axios";

export const api = (page: string | number): Promise<any> =>
  axios
    .get(`https://gorest.co.in/public-api/users`, {
      params: {
        page,
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
