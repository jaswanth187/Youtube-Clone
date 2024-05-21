import React from "react";
import { Link } from "react-router-dom";
const ChannelCard = ({ title, image, subs, video }) => {
  return (
    <div
      className="ChannelCard"
      style={{
        marginRight: "20px",
        // border: "2px solid black",
        textAlign: "center",
        padding: "10px",
      }}
    >
      <Link to={`/channel/${video.id.channelId}`} className="channelRow">
        <img
          src={image}
          alt={title}
          style={{ height: "150px", width: "150px", borderRadius: "50%" }}
        />
      </Link>
      <h4>{title}</h4>
      <p style={{ textDecoration: "none" }}>
        {" "}
        {`${subs ? subs + "Subscribers" : ""}`}
      </p>
    </div>
  );
};

export default ChannelCard;
