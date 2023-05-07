import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { selectSubreddit } from "./subredditsSlice";
import Spinner from "components/Spinner";
import { Subreddit } from "types/store";
import { fetchList as postFetchList } from "features/post/postSlice";
import "./subreddits.css";
import { AppDispatch } from "store";
const defaultImage =
  "https://styles.redditmedia.com/t5_37k5y/styles/communityIcon_e9xvw609p7r21.png";
export default function Subreddits() {
  const dispatch = useDispatch<AppDispatch>();
  const storeSubreddit = useSelector(selectSubreddit);
  const [active, setActive] = useState("");
  const changeSubreddit = (item: Subreddit) => {
    setActive(item.id);
    dispatch(postFetchList(`r/${item.title}/.json`));
  };
  const list = storeSubreddit.list.map((item) => {
    return (
      <li
        key={item.id}
        className={active === item.id ? "selected-subreddit" : undefined}
        onClick={() => changeSubreddit(item)}
      >
        <button type="button">
          <img
            src={item.image ? item.image : defaultImage}
            alt="Home"
            className="subreddit-icon"
            style={{ border: `3px solid ${item.key_color}` }}
          />
          {item.title}
        </button>
      </li>
    );
  });

  return (
    <div className="card subreddit-card">
      <h2>Subreddits</h2>
      <ul className="subreddits-list">
        {storeSubreddit.status === "loading" ? (
          <Spinner />
        ) : storeSubreddit.status === "succeeded" ? (
          list
        ) : storeSubreddit.status === "failed" ? (
          storeSubreddit.error
        ) : (
          "idle"
        )}
      </ul>
    </div>
  );
}
