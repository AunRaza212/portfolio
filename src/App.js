
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Feed, NavBar, VideoDetails, ChannelDetail, SearchFeed } from "./components";
import {Box} from "@mui/material";


function App() {
  return (
      <BrowserRouter>
        <Box sx={{ backgroundColor: '#000' }} />
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Feed />} />
          <Route path="/video/:id" element={<VideoDetails />} />
          <Route path="/channel/:id" element={<ChannelDetail />} />
          <Route path="/search/:searchTerm" element={<SearchFeed />} />
        </Routes>
      </BrowserRouter>
      
  );
}

export default App;
