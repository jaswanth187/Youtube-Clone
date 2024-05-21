import React from "react";
import "./ChannelRow.css";
import { Avatar } from "@mui/material";
// import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
// import { Link } from "react-router-dom";

const ChannelRow = ({
  image,
  channel,
  subs,
  verified,
  noOfVideos,
  description,
  video,
}) => {
  return (
    <>
      {console.log(video.id.channelId)}
      {/* <Link to={`/channel/${video.id.channelId}`} className="channelRow"> */}
      <div>
        <Avatar alt={channel} src={image} />
        <h4>{channel}</h4>
      </div>
    </>
  );
};

export default ChannelRow;
