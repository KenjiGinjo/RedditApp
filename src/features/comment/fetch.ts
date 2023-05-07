import _request from "request";
import { CommentReturn } from "types/fetchComment";

export const fetchComment = async (url: string) => {
  const res = await _request<CommentReturn, null>({
    url: url,
    method: "GET",
  });
  return res[1].data.children
    .filter((item) => item.kind === "t1")
    .map((item) => {
      return {
        id: item.data.id,
        name: item.data.author,
        avatar: `https://api.adorable.io/avatars/10/${item.data.author}`,
        content: item.data.body,
        date: item.data.created_utc,
      };
    });
};
