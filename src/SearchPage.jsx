import React from "react";
import "./SearchPage.css";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";
const SearchPage = () => {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2 className="filter_title">FILTER</h2>
      </div>
      <hr />
      {/* <ChannelRow
        image="https://yt3.googleusercontent.com/ytc/AIdro_nbK_D94OcXEb4TJMW2JzTTtdB6DjfZPQpaSlcLfQ=s176-c-k-c0x00ffffff-no-rj"
        channel="Clever Programmer"
        verified
        subs="660K"
        noOfVideos={382}
        description="You can find awesome programming lessons here! Also, expect programming tips and tricks that will take your coding skills to the ..."
      /> */}
      <hr />
      <VideoRow
        views="1.4M"
        subs="659K"
        description="Do you want a FREE one hour training..."
        timestamp="59 seconds ago"
        channel="Clever Programmer"
        title="Let's build a YouTube Clone with REACT JS for Beginners"
        image="https://i.ytimg.com/vi/NT299zIk2JY/maxresdefault.jpg"
      />
    </div>
  );
};

export default SearchPage;
