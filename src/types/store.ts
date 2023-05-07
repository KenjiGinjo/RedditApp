export type FetchProcess = "idle" | "loading" | "succeeded" | "failed";

export type PostList = {
  id: string;
  title: string;
  image: string;
  date: number;
  author: string;
  authorAvatar: string;
  vote: number;
  commentTotal: number;
  permalink: string;
};
export type PostState = {
  list: PostList[];
  status: FetchProcess;
  error: string | undefined;
};

export type Subreddit = {
  id: string;
  title: string;
  image: string | null;
  key_color: string;
};
export type SubredditState = {
  list: Subreddit[];
  currentId: string;
  status: FetchProcess;
  error: string | undefined;
};
