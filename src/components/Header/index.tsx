import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ReactSVG } from "react-svg";
import iconLogo from "assets/logo.svg";
import iconSearch from "assets/icons/search.svg";
import "./Header.css";
import { selectApp, setSearch } from "features/appSlice";
import { useState } from "react";
import { AppDispatch } from "store";
export default function Header() {
  const app = useSelector(selectApp);
  const dispatch = useDispatch<AppDispatch>();
  const [searchStr, setSearchStr] = useState("");
  const searchHandle = () => {
    dispatch(setSearch(searchStr));
  };
  return (
    <header>
      <Link to="/" className="logo">
        <ReactSVG src={iconLogo} className="logo-icon" />
        <p>{app.name}</p>
      </Link>
      <div className="search">
        <input
          type="text"
          placeholder="Search"
          aria-label="Search posts"
          onChange={(e) => setSearchStr(e.target.value)}
        />
        <button aria-label="Search" onClick={searchHandle}>
          <ReactSVG src={iconSearch} className="search-icon" />
        </button>
      </div>
    </header>
  );
}
