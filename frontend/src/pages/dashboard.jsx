import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";
import moment from "moment";
import BookmarkIcon from "@mui/icons-material/Bookmark";

import LeftSideBar from "../components/leftSidebar";
import RightSideBar from "../components/rightSidebar";
import { currentUSer } from "../features/authSlice";
import { useGetAllEventsQuery } from "../features/eventSlice";
import { useLimitCategoriesQuery } from "../features/categorySlice";
import { Link } from "react-router-dom";
const Dashboard = () => {
  const user = useSelector(currentUSer);

  const { data: events } = useGetAllEventsQuery();
  const { data: categoryLimit } = useLimitCategoriesQuery();

  return (
    <Stack direction={"row"} marginTop={"65px"}>
      <LeftSideBar />
      <Box
        sx={{
          width: "47.4rem",
          height: "100vh",
          marginLeft: "297px",
          bgcolor: "#04263a",
        }}>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"flex-start"}
          gap={3}
          sx={{
            width: "100%",
            bgcolor: "inherit",
            height: "4.5rem",
            padding: 2,
          }}>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"flex-start"}
            gap={3}
            sx={{
              width: "100%",
              bgcolor: "inherit",
              height: "100%",
            }}>
            {categoryLimit &&
              categoryLimit?.map((category) => (
                <Button
                  key={category._id}
                  sx={{
                    bgcolor: "primary.light",
                    color: "primary.main",
                    borderRadius: 8,
                    ":hover": {
                      bgcolor: "primary.light",
                      color: "primary.main",
                    },
                  }}>
                  {category.name}
                </Button>
              ))}
          </Stack>

          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"flex-start"}
            gap={3}
            sx={{
              width: "20%",
              bgcolor: "inherit",
              height: "100%",
            }}>
            <Link to={"/categories"} style={{ textDecoration: "none" }}>
              <Button sx={{ color: "primary.light", fontWeight: 600 }}>
                See all
              </Button>
            </Link>
          </Stack>
        </Stack>
        {/* Home Content */}
        <Stack
          direction={"row"}
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
          {events &&
            events.map((event) => (
              <Card
                key={event._id}
                sx={{
                  width: "32%",
                  display: "flex",
                  flexDirection: "column",
                  height: "56vh",
                  borderRadius: 3,
                }}>
                <CardMedia
                  component='img'
                  sx={{ width: "100%", height: "33vh" }}
                  image={event.image}
                />
                <Stack
                  direction={"row"}
                  gap={1}
                  sx={{
                    width: "100%",
                    height: "100%",
                    padding: "0.5rem",
                    bgcolor: "primary.main",
                  }}>
                  <Stack
                    direction={"column"}
                    gap={2}
                    sx={{
                      width: "100%",
                      height: "100%",
                    }}>
                    <Stack
                      direction={"row"}
                      width={"100%"}
                      alignItems={"center"}
                      justifyContent={"space-between"}>
                      <Typography
                        variant='subtitle2'
                        color={"#42f1c1"}
                        fontWeight={500}>
                        {moment(event.dateOfEvent).format(" MMMM Do YYYY")}
                      </Typography>
                      <Button>
                        <BookmarkIcon sx={{ color: "primary.light" }} />
                      </Button>
                    </Stack>

                    <Typography
                      variant='h6'
                      color={"primary.light"}
                      sx={{ fontWeight: 600 }}>
                      {event.title.slice(0, 45)}
                    </Typography>
                  </Stack>
                </Stack>
              </Card>
            ))}
          {/* Second Card for test */}
        </Stack>
      </Box>
      <RightSideBar />
    </Stack>
  );
};

export default Dashboard;
