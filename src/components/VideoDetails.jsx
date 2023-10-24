import React from "react";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import Videos from "./Videos";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const VideoDetails = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data.item[0])
    );
  }, [id]);
  if(!videoDetail?.snippet) return 'Loading...'
  const {snippet: {title,channelId,channelTitle},statistics:{viewCount,likeCount}}=videoDetail;
  return (
    <Box minHeight="85vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className='react=player' controls/>
          <Typography color='#fff' variant="h5" fontWeight='bold' p={2} >
            {title}
          </Typography>
          <Stack direction='row' justifyContent='space-between' sx={{color:'#fff'}} py={1} px={2}  >
<Link to={`channel/${channelId}`} >
  <Typography variant={{sm:'subtitle1' , md:'h6'}} color='#fff' >
    {channelTitle}
  <CheckCircle sx={{fontSize:'12px', color:'gray', ml: '5px'}} />
  
  </Typography>
</Link>
<Stack>
  <Typography>

  </Typography>
</Stack>


          </Stack>
          
          
          
          </Box>


        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetails;
