import React, { useState } from "react";
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import yt from "./ytt.png";
import SearchIcon from "@mui/icons-material/Search";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Avatar from "@mui/material/Avatar";
import { Link, useNavigate } from "react-router-dom";
const Header = () => {
  const [inputSearch, setInputSearch] = useState("");
  const navigate = useNavigate();

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      redirectToSearchPage();
    }
  };
  const redirectToSearchPage = () => {
    if (inputSearch.trim() !== "") {
      navigate(`/search/${inputSearch}`);
    }
  };
  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon />
        <Link to={"/"}>
          <img className="header__logo" src={yt} alt="" />
        </Link>
      </div>
      <div className="header__input">
        <input
          value={inputSearch}
          onChange={(e) => setInputSearch(e.target.value)}
          type="text"
          onKeyDown={handleKeyDown}
          placeholder="Search"
        />
        <Link to={`/search/${inputSearch}`}>
          <SearchIcon className="header__inputButton" />
        </Link>
      </div>
      <div className="header__icons">
        <VideoCallIcon className="header__icon" />
        <AppsIcon className="header__icon" />
        <NotificationsIcon className="header__icon" />
        <Avatar
          alt="Remy Sharp"
          src="https://www.w3schools.com/howto/img_avatar.png"
        />
      </div>
    </div>
  );
};

export default Header;
