import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";

import CircularProgress from "@mui/material/CircularProgress";
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

  const { data: events, isLoading } = useGetAllEventsQuery();
  const { data: categoryLimit } = useLimitCategoriesQuery();

  return (
    <Stack direction={"row"} marginTop={"65px"}>
      <LeftSideBar />
      <Box
        sx={{
          width: ["100%", "100%", "100%", "56%"],
          height: "100vh",
          marginLeft: {
            xs: 0,
            sm: 0,
            md: 0,
            lg: "297px",
            xl: "293px",
          },
          // ["0", "0", "0px", "273px", "297px"]
          bgcolor: "#04263a",
        }}>
        <Stack
          direction={"row"}
          display={["none", "none", "none", "flex"]}
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
            gap={["8px", "8px", "10px", "8px"]}
            sx={{
              width: "100%",
              bgcolor: "inherit",
              height: "100%",
            }}>
            {categoryLimit &&
              categoryLimit?.map((category) => (
                <Link
                  to={`/categories/${category._id}`}
                  style={{ textDecoration: "none" }}>
                  <Button
                    key={category._id}
                    sx={{
                      bgcolor: "primary.light",
                      color: "primary.main",
                      fontSize: [11, 12, 12, 14],
                      paddingX: [1, 2, 2, 1],
                      borderRadius: 8,
                      ":hover": {
                        bgcolor: "primary.light",
                        color: "primary.main",
                      },
                    }}>
                    {category.name}
                  </Button>
                </Link>
              ))}
          </Stack>

          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"flex-start"}
            gap={3}
            sx={{
              display: ["none", "none", "flex"],
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
          gap={[2, 2, 1, 1]}
          flexWrap={"wrap"}
          justifyContent={["center", "center", "flex-start"]}
          width={"100%"}
          height={"fit-content"}
          sx={{
            bgcolor: "#04263a",
            paddingX: "15px",
            paddingY: 2,
          }}>
          {isLoading && (
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"center"}
              width={"100%"}
              height={"50vh"}>
              <CircularProgress color='secondary' size={50} />
            </Stack>
          )}
          {events &&
            events.map((event) => (
              <Card
                key={event._id}
                sx={{
                  width: ["47%", "47%", "32%", "32%"],
                  display: "flex",
                  flexDirection: "column",
                  height: ["60vh", "56vh"],
                  borderRadius: 3,
                }}>
                <Link
                  to={`/events/${event._id}`}
                  style={{
                    textDecoration: "none",
                  }}>
                  <CardMedia
                    component='img'
                    sx={{ width: "100%", height: ["30vh", "31vh", "33vh"] }}
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
                          fontSize={[12, 14, 15]}
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
                        fontSize={[16, 17, 18]}
                        sx={{ fontWeight: 600 }}>
                        {event.title.slice(0, 45)}
                      </Typography>
                    </Stack>
                  </Stack>
                </Link>
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
