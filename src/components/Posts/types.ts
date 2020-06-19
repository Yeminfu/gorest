export interface userType {
  id: number;
}
export type status = "pending" | "done" | "error";
export interface propsType {
  user_id: string | number;
  store: {
    posts: userType[];
    status: status;
    meta: { totalCount: number; currentPage: number };
    fetcher: (page: number | string, user_id: number | string) => void;
    setUsersForce: (users: userType[]) => void;
  };
}
