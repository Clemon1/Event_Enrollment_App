import {
  Box,
  Stack,
  Typography,
  Avatar,
  Card,
  CardMedia,
  Button,
} from "@mui/material";
import { useGetSingleEventsQuery } from "../features/eventSlice";
import { useParams } from "react-router-dom";
import LeftSideBar from "../components/leftSidebar";
import RightSideBar from "../components/rightSidebar";
import moment from "moment";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
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
          <Typography variant='h5' fontWeight={500} color={"#ffffff"}>
            {category && category.title}
          </Typography>
          <Card sx={{ width: "100%", height: "45vh" }}>
            <CardMedia
              sx={{ width: "100%", height: "100%" }}
              image={category && category.image}
            />
          </Card>
          <Stack
            direction={"row"}
            width={"100%"}
            height={"4vh"}
            justifyContent={"space-between"}
            alignItems={"center"}>
            <Stack direction={"row"} gap={1}>
              <CalendarMonthIcon sx={{ color: "#42f1c1" }} />
              <Typography variant='body1' color={"#42f1c1"} fontWeight={500}>
                {category &&
                  moment(category.dateOfEvent).format(" MMMM Do YYYY")}
              </Typography>
            </Stack>

            <Button
              sx={{
                bgcolor: "#42f1c1",
                color: "primary.main",
                borderRadius: 3,
                fontWeight: 600,
                ":hover": {
                  bgcolor: "#42f1c1",
                },
              }}>
              {" "}
              Book Event
            </Button>
          </Stack>
          <Typography variant='h6' fontWeight={400} color={"#ffffff"}>
            {category && category.description}
          </Typography>
        </Stack>
      </Box>
      <RightSideBar />
    </Stack>
  );
};

export default SingleEvent;
