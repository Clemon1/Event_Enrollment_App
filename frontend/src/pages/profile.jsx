import { Box, Stack, Typography } from "@mui/material";

import LeftSideBar from "../components/leftSidebar";
import RightSideBar from "../components/rightSidebar";
const Profile = () => {
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
        <Typography variant='h6' color={"primary.light"}>
          Center Component
        </Typography>
      </Box>
      <RightSideBar />
    </Stack>
  );
};

export default Profile;
