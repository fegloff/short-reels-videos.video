import React from "react";
import { Routes, Route } from "react-router-dom";
import VideoReels from "./routes/video-reels/VideoReels";
import VideoHome from "./routes/video-home/VideoHome";
import Navigation from "./routes/navigation/Navigation";
import VideoUpload from "./routes/video-upload/VideoUpload";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<VideoReels />} />
        <Route path="/:vanityUrl" element={<VideoReels />} />
        <Route path="home/" element={<Navigation />} >
          <Route index element={<VideoHome />} />
          <Route path="upload/" element={<VideoUpload />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
