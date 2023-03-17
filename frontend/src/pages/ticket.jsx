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
import { useGetBookingsQuery } from "../features/bookingSlice";
import LeftSideBar from "../components/leftSidebar";
import RightSideBar from "../components/rightSidebar";
import moment from "moment";

import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { useSelector } from "react-redux";
import { currentUSer } from "../features/authSlice";

const Ticket = () => {
  const user = useSelector(currentUSer);
  const { data: tickets } = useGetBookingsQuery(user.user._id);

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
        <Typography variant='h5' fontWeight={500} padding={2} color={"#ffffff"}>
          Tickets
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
            paddingX: ["12px", "14px", "15px"],
            paddingY: 2,
          }}>
          {tickets && tickets.length <= 0 && (
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"center"}
              width={"100%"}
              height={"50vh"}>
              <Typography variant='h5' color={"#ffffff"}>
                No tickets found
              </Typography>
            </Stack>
          )}

          {tickets &&
            tickets.map((ticket) => (
              <Card
                key={ticket._id}
                sx={{
                  width: "100%",
                  display: "flex",
                  borderRadius: 5,
                  bgcolor: "primary.main",
                }}>
                <CardMedia
                  sx={{ width: "30%", height: 120 }}
                  image={ticket.event.image}
                />
                <Box
                  sx={{
                    width: "50%",
                    height: 120,
                    display: "flex",
                    padding: 1,
                    flexDirection: "column",
                    justifyContent: "center",
                  }}>
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      gap: 1,
                      flexDirection: "column",
                    }}>
                    <Typography
                      variant='h6'
                      fontSize={[14, 14, 16, 17]}
                      color={"#ffffff"}>
                      {ticket.event.title}
                    </Typography>
                  </Box>
                  <Stack
                    direction={"row"}
                    sx={{
                      width: "100%",
                    }}>
                    <CalendarMonthIcon
                      sx={{ color: "#42f1c1", fontSize: [14, 12, 12, 15] }}
                    />
                    <Typography
                      variant='body1'
                      fontSize={[14, 12, 12, 13]}
                      color={"#42f1c1"}
                      fontWeight={500}>
                      {ticket &&
                        moment(ticket.event.dateOfEvent).format(
                          " MMMM Do YYYY",
                        )}
                    </Typography>
                  </Stack>
                </Box>
                <Box
                  sx={{
                    width: "20%",
                    display: "flex",
                    padding: 1,
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}>
                  <Button
                    sx={{
                      bgcolor: "#ffffff",
                      fontSize: [12, 13, 16, 16],
                      color: "crimson",
                    }}>
                    Cancel
                  </Button>
                </Box>
              </Card>
            ))}
        </Stack>
      </Box>
      <RightSideBar />
    </Stack>
  );
};

export default Ticket;
