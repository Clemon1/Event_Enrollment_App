import { useState } from "react";
import {
  Box,
  Stack,
  Typography,
  Alert,
  Card,
  CardMedia,
  Snackbar,
  Button,
} from "@mui/material";
import { useGetSingleCategoriesQuery } from "../features/categorySlice";
import LeftSideBar from "../components/leftSidebar";
import RightSideBar from "../components/rightSidebar";
import moment from "moment";
import { useParams, Link } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";

import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { useSelector } from "react-redux";
import { currentUSer } from "../features/authSlice";

const SingleCategory = () => {
  const user = useSelector(currentUSer);
  const { id } = useParams();
  const { data, isLoading } = useGetSingleCategoriesQuery(id);
  console.log(data);
  return (
    <Stack direction={"row"} marginTop={"65px"}>
      <LeftSideBar />
      <Box
        sx={{
          width: ["100%", "100%", "47.4rem"],
          height: "100vh",
          marginLeft: ["0", "0", "297px"],
          bgcolor: "#04263a",
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
            paddingX: ["12px", "14px", "15px"],
            paddingY: 2,
          }}>
          <Card sx={{ width: "100%", height: "45vh", borderRadius: 6 }}>
            <CardMedia
              sx={{ width: "100%", height: "100%" }}
              image={data && data.singleCategory.image}
            />
            <Stack
              direction={"row"}
              justifyContent={"center"}
              alignItems={"center"}
              sx={{
                width: "100%",
                height: "103%",
                position: "relative",
                zIndex: 1000,
                color: "#ffffff",
                backgroundColor: "#030f18c9",
                top: ["-243px", "-244px", "-278px", "-278px"],
              }}>
              <Typography
                variant='h5'
                fontWeight={500}
                fontSize={30}
                padding={2}
                color={"#ffffff"}>
                {data && data.singleCategory.name}
              </Typography>
            </Stack>
          </Card>
          {data && data.eventUnderCategory <= 0 && (
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"center"}
              width={"100%"}
              height={"40vh"}>
              <Typography variant='h5' color={"#ffffff"}>
                No events found under this category
              </Typography>
            </Stack>
          )}

          <Stack
            direction={"row"}
            gap={[2, 2, 1, 1]}
            flexWrap={"wrap"}
            justifyContent={[
              "flex-start",
              "flex-start",
              "flex-start",
              "flex-start",
            ]}
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
            {data &&
              data.eventUnderCategory.map((event) => (
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
        </Stack>
      </Box>
      <RightSideBar />
    </Stack>
  );
};

export default SingleCategory;
