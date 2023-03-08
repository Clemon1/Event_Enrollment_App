import { Box, Stack, Typography, Avatar, Card, CardMedia } from "@mui/material";
import { useGetSingleEventsQuery } from "../features/eventSlice";
import { useParams } from "react-router-dom";
import LeftSideBar from "../components/leftSidebar";
import RightSideBar from "../components/rightSidebar";
const SingleEvent = () => {
  const { id } = useParams();
  const { data: category } = useGetSingleEventsQuery(id);
  console.log(category);
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
          }}>
          <Typography variant='h4' color={"#ffffff"}>
            {" "}
            {category && category.title}
          </Typography>
          <Card sx={{ width: "100%", height: "40vh" }}>
            <CardMedia
              sx={{ width: "100%", height: "100%" }}
              image={category && category.image}
            />
          </Card>
          <Typography variant='h5' color={"#ffffff"}>
            {category && category.description}
          </Typography>
        </Stack>
      </Box>
      <RightSideBar />
    </Stack>
  );
};

export default SingleEvent;
