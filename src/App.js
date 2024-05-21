import React, { useState } from "react";
import "./App.css";
import Sidebar from "./Sidebar";
import RecommendedVideos from "./RecommendedVideos";
import Header from "./Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchPage from "./SearchPage";
import ChannelDetail from "./ChannelDetail";
function App() {
  const [selected, setSelected] = useState("Home"); // State to manage the selected item in Sidebar

  return (
    <Router>
      <Header />

      <Routes>
        <Route
          path="/"
          element={<AppPage selected={selected} setSelected={setSelected} />}
        />
        <Route
          path="/search/:searchTerm"
          element={<SearchPageRoute setSelected={setSelected} />}
        />
        <Route path="/channel/:channelId" element={<ChannelDetail />} />
      </Routes>
    </Router>
  );
}

function AppPage({ selected, setSelected }) {
  return (
    <div className="app__page">
      <Sidebar selected={selected} setSelected={setSelected} />
      <RecommendedVideos selected={selected} />
    </div>
  );
}

function SearchPageRoute({ selected, setSelected }) {
  // Pass setSelected as a prop here
  return (
    <div className="app__page">
      <Sidebar selected={selected} setSelected={setSelected} />{" "}
      {/* Pass it down to Sidebar */}
      <SearchPage />
    </div>
  );
}

export default App;
