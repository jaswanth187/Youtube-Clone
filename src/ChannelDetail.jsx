import React from "react";
import { useState, useEffect } from "react";
import Videocard from "./VideoCard";
import ChannelCard from "./ChannelCard";
import { useParams } from "react-router-dom";
import { fetchApiData } from "./FetchApiData";
import VideoCard from "./VideoCard";
const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const { channelId } = useParams();

  useEffect(() => {
    fetchApiData(`channels?part=snippet&id=${channelId}`)
      .then((data) => setChannelDetail(data?.items[0]))
      .catch((error) => console.error("Error fetching data:", error));

    fetchApiData(`search?channelId=${channelId}&part=snippet&order=date`).then(
      (data) => setVideos(data?.items)
    );
  }, [channelId]);

  return (
    <div>
      {/* <h1>Channel Detail</h1> */}
      <div className="feed">
        {channelDetail && (
          <ChannelCard
            video={channelDetail}
            title={channelDetail?.snippet?.title}
            image={channelDetail?.snippet?.thumbnails?.high?.url}
            subs={channelDetail?.statistics?.subscriberCount}
          />
        )}
        {videos.map(
          (video) =>
            video.id.videoId && (
              <VideoCard
                key={video.id}
                title={video.snippet.title}
                views="2.3M Views"
                timestamp="3 days ago"
                channelImage={video.snippet.thumbnails.medium.url}
                channel={video?.snippet?.channelTitle}
                image={video?.snippet?.thumbnails?.high?.url}
              />
            )
        )}
      </div>
    </div>
  );
};

export default ChannelDetail;
