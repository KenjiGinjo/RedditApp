import { ReactSVG } from "react-svg";
import iconArrowUp from "assets/icons/arrow-up.svg";
import iconArrowDown from "assets/icons/arrow-down.svg";
import Skeleton from "react-loading-skeleton";
export default function PostVotesSkeleton() {
  return (
    <div className="post-votes-container">
      <button
        type="button"
        className="icon-action-button up-vote false"
        aria-label="Up vote"
      >
        <ReactSVG className="icon-action" src={iconArrowUp} />
      </button>
      <p className="post-votes-value ">
        <Skeleton width={25} height={18} />
      </p>
      <button
        type="button"
        className="icon-action-button down-vote false"
        aria-label="Down vote"
      >
        <ReactSVG className="icon-action" src={iconArrowDown} />
      </button>
    </div>
  );
}
