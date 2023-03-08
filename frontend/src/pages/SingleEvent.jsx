import { Box, Stack, Typography, Avatar } from "@mui/material";
import { useGetSingleEventsQuery } from "../features/eventSlice";
import { useParams } from "react-router-dom";
import LeftSideBar from "../components/leftSidebar";
import RightSideBar from "../components/rightSidebar";
const SingleEvent = () => {
  const { id } = useParams();
  const { data: category } = useGetSingleEventsQuery(id);
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
          Single Event {id}
        </Typography>
        <Stack
          direction={"column"}
          gap='0.9rem'
          flexWrap={"wrap"}
          justifyContent={"flex-start"}
          width={"100%"}
          height={"fit-content"}
          sx={{
            bgcolor: "#04263a",
            paddingX: "15px",
            paddingY: 2,
          }}></Stack>
      </Box>
      <RightSideBar />
    </Stack>
  );
};

export default SingleEvent;
