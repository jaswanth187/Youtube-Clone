import React, { useEffect, useState } from "react";
import "./RecommendedVideos.css";
import VideoCard from "./VideoCard.js";
import { fetchApiData } from "./FetchApiData";
import ChannelCard from "./ChannelCard";

const RecommendedVIdeos = ({ selected }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    let query = selected === "Home" ? "" : `&q=${selected}`;
    fetchApiData(`search?part=snippet${query}`)
      .then((data) => setVideos(data.items))
      .catch((error) => console.error("Error fetching data:", error));
  }, [selected]);

  return (
    <div className="recommended_videos">
      <h2>Recommended Videos</h2>

      <div className="recommendedVideos__videos">
        {videos.map((video) => (
          <div className="cont">
            {video.id.channelId && (
              <ChannelCard
                title={video?.snippet?.title}
                image={video?.snippet?.thumbnails?.high?.url}
                subs={
                  video?.statistics?.subscriberCount
                    ? parseInt(
                        video?.statistics?.subscriberCount
                      ).toLocaleString()
                    : null
                }
                video={video}
                key={video.id}
              />
            )}

            {video.id.videoId && (
              <VideoCard
                title={video.snippet.title}
                views="2.3M Views"
                timestamp="3 days ago"
                channelImage={video.snippet.thumbnails.medium.url}
                channel={video?.snippet?.channelTitle}
                image={video?.snippet?.thumbnails?.high?.url}
                key={video.id}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedVIdeos;
