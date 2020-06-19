export interface postType {
  title: string;
  body: string;
}
export type status = "pending" | "done" | "error";
export interface propsType {
  post_id: string | number;
  store: {
    status: status;
    post: postType;
    fetcher: (post_id: number | string) => void;
  };
}
