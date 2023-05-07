import { Comment } from "types/state";
import "./Comment.css";
import ReactTimeAgo from "react-time-ago";
import ReactMarkdown from "react-markdown";
export default function CommentComponent(props: { comment: Comment }) {
  const comment = props.comment;
  const remark = comment.content ? comment.content : "empty...";
  return (
    <div className="comment">
      <div className="comment-metadata">
        <img
          src={comment.avatar}
          alt={`${comment.name}'s avatar`}
          className="avatar-profile-image"
        />
        <p className="comment-author">{comment.name}</p>
        <p className="comment-created-time">
          {<ReactTimeAgo date={comment.date * 1000} />}
        </p>
      </div>
      <ReactMarkdown children={remark} />
    </div>
  );
}
