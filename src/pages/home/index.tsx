import { useSelector } from "react-redux";
import { selectPost } from "features/post/postSlice";
import { selectApp } from "features/appSlice";
import PostSkeleton from "features/post/PostSkeleton";
import Post from "features/post/Post";
export default function Home() {
  const app = useSelector(selectApp);
  const post = useSelector(selectPost);
  const searchList = post.list.filter(
    (item) => item.title.search(app.search) !== -1
  );
  const list = searchList.map((item) => {
    return (
      <article key={item.id}>
        <div className="card">
          <Post post={item} />
        </div>
      </article>
    );
  });
  return <>{post.status === "loading" ? <PostSkeleton num={6} /> : list}</>;
}
