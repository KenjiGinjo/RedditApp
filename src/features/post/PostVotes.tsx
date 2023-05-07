import { ReactSVG } from "react-svg";
import iconArrowUp from "assets/icons/arrow-up.svg";
import iconArrowDown from "assets/icons/arrow-down.svg";
export default function PostVotes(props: { vote: number }) {
  const voteNum =
    props.vote < 1000
      ? props.vote
      : `${Math.floor((props.vote / 1000) * 10) / 10}k`;
  return (
    <div className="post-votes-container">
      <button
        type="button"
        className="icon-action-button up-vote false"
        aria-label="Up vote"
      >
        <ReactSVG className="icon-action" src={iconArrowUp} />
      </button>
      <p className="post-votes-value ">{voteNum}</p>
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
