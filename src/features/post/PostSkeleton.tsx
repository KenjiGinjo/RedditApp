import { ReactSVG } from "react-svg";
import PostVotesSkeleton from "./PostVotesSkeleton";
import iconComment from "assets/icons/comment.svg";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
export default function PostSkeleton(props: { num: number }) {
  return (
    <SkeletonTheme baseColor="#f3f3f3" highlightColor="#fff">
      {Array(props.num)
        .fill(0)
        .map((_item, index) => (
          <div className="post-skeleton" key={index}>
            <div className="card ">
              <div className="post-wrapper">
                <PostVotesSkeleton />
                <div className="post-container">
                  <h3 className="post-title">
                    <Skeleton style={{ width: "50%" }} />
                  </h3>
                  <div className="post-image-container">
                    <Skeleton height={210} style={{ width: "100%" }} />
                  </div>
                  <div className="post-details">
                    <span className="author-details">
                      <Skeleton width={100} />
                    </span>
                    <span>
                      <Skeleton width={100} />
                    </span>
                    <span className="post-comments-container">
                      <button
                        type="button"
                        className="icon-action-button false"
                        aria-label="Show comments"
                      >
                        <ReactSVG className="icon-action" src={iconComment} />
                      </button>

                      <Skeleton width={100} />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </SkeletonTheme>
  );
}
