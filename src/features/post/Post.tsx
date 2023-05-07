import "./Post.css";
import { PostList } from "types/store";
import { Comment } from "types/state";
import { ReactSVG } from "react-svg";
import { useState } from "react";
import { fetchComment } from "../comment/fetch";
import PostVotes from "./PostVotes";
import iconComment from "assets/icons/comment.svg";
import ReactTimeAgo from "react-time-ago";
import CommentComponent from "../comment/comment";
import Skeleton from "react-loading-skeleton";
export default function Post(props: { post: PostList }) {
  const post = props.post;
  const [comments, setComments] = useState<Comment[]>([]);
  const [commentsShow, setCommentsShow] = useState(false);

  const [commentsLoading, setCommentsLoading] = useState(false);
  const commmentList = comments.map((comment) => {
    return <CommentComponent key={comment.id} comment={comment} />;
  });
  const commentBtnClass = `icon-action-button ${
    commentsShow && "showing-comments"
  }`;
  const commentBtnHandle = async () => {
    if (commentsShow) {
      setCommentsShow(false);
      setComments([]);
    } else {
      setCommentsLoading(true);
      const comments = await fetchComment(`${post.permalink}/.json`);
      setComments(comments);
      setCommentsLoading(false);
      setCommentsShow(true);
    }
  };

  return (
    <div className="post-wrapper">
      <PostVotes vote={post.vote} />
      <div className="post-container">
        <h3 className="post-title">{post.title}</h3>
        <div className="post-image-container">
          <img src={post.image} alt={post.title} className="post-image" />
        </div>
        <div className="post-details">
          <span className="author-details">
            <img
              src={post.authorAvatar}
              alt={`${post.author}'s avatar`}
              className="avatar-profile-image"
            />
            <span className="author-username">{post.author}</span>
          </span>
          <span>
            <ReactTimeAgo date={post.date * 1000} />
          </span>
          <span className="post-comments-container">
            <button
              type="button"
              className={commentBtnClass}
              aria-label="Show comments"
              onClick={commentBtnHandle}
            >
              <ReactSVG className="icon-action" src={iconComment} />
            </button>
            {post.commentTotal}
          </span>
        </div>
        <div>
          {commentsLoading ? (
            <Skeleton count={4} style={{ width: "100%", marginTop: 10 }} />
          ) : (
            commmentList
          )}
        </div>
      </div>
    </div>
  );
}
