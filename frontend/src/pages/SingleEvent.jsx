import { Box, Stack, Typography, Avatar } from "@mui/material";

import LeftSideBar from "../components/leftSidebar";
import RightSideBar from "../components/rightSidebar";
const SingleEvent = () => {
  return (
    <Stack direction={"row"} marginTop={"65px"}>
      <LeftSideBar />
      <Box
        sx={{
          width: "47.4rem",
          height: "100vh",
          marginLeft: "297px",
          bgcolor: "#04263a",
          padding: 2,
        }}>
        <Typography variant='h4' color={"#ffffff"} marginBottom={2}>
          Single Event
        </Typography>
      </Box>
      <RightSideBar />
    </Stack>
  );
};

export default SingleEvent;
