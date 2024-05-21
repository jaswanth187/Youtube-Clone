import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import HistoryIcon from "@mui/icons-material/History";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";

const Sidebar = ({ selected, setSelected }) => {
  return (
    <div className="sidebar">
      <SidebarRow
        selected={selected}
        setSelected={setSelected}
        title="Home"
        Icon={HomeIcon}
      />
      <SidebarRow
        selected={selected}
        setSelected={setSelected}
        title="Trending"
        Icon={WhatshotIcon}
      />
      <SidebarRow
        selected={selected}
        setSelected={setSelected}
        title="Subscription"
        Icon={SubscriptionsIcon}
      />
      <hr />

      <SidebarRow
        selected={selected}
        setSelected={setSelected}
        title="Library"
        Icon={VideoLibraryIcon}
      />
      <SidebarRow
        selected={selected}
        setSelected={setSelected}
        title="History"
        Icon={HistoryIcon}
      />
      <SidebarRow
        selected={selected}
        setSelected={setSelected}
        title="Your videos"
        Icon={OndemandVideoIcon}
      />
      <SidebarRow
        selected={selected}
        setSelected={setSelected}
        title="Watch later"
        Icon={WatchLaterIcon}
      />
      <SidebarRow
        selected={selected}
        setSelected={setSelected}
        title="Liked videos"
        Icon={ThumbUpAltOutlinedIcon}
      />
      <SidebarRow
        selected={selected}
        setSelected={setSelected}
        title="Show more"
        Icon={ExpandMoreOutlinedIcon}
      />
      <hr />
    </div>
  );
};

export default Sidebar;
