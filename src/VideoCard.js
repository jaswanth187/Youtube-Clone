import React from "react";

import "./VideoCard.css";
import Avatar from "@mui/material/Avatar";

const VideoCard = ({
  image,
  channel,
  channelImage,
  title,
  views,
  timestamp,
}) => {
  return (
    <div className="videoCard">
      <img src={image} className="videoCard__thumbnail" alt="" />
      <div className="videoCard__info">
        <Avatar
          className="videoCard__avatar"
          alt={channel}
          src={channelImage}
        />
        <div className="videoCard__text">
          <h4>{title}</h4>
          <p>{channel}</p>
          <p>
            {views} • {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
