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
import { useGetSingleEventsQuery } from "../features/eventSlice";
import { useCreateBookingsMutation } from "../features/bookingSlice";
import { useParams } from "react-router-dom";
import LeftSideBar from "../components/leftSidebar";
import RightSideBar from "../components/rightSidebar";
import moment from "moment";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { useSelector } from "react-redux";
import { currentUSer } from "../features/authSlice";

const SingleEvent = () => {
  const user = useSelector(currentUSer);

  const { id } = useParams();
  const { data: category } = useGetSingleEventsQuery(id);
  const [createBooking] = useCreateBookingsMutation();
  const [student, setStudent] = useState("");
  const [event, setEvent] = useState("");
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [errMessage, setErrMessage] = useState("");

  const body = {
    student: user.user._id,
    event: category && category._id,
  };
  console.log(body);
  console.log(category);
  const handleBooking = async (e) => {
    e.preventDefault();
    try {
      await createBooking(body).unwrap();
      setOpen(true);
    } catch (error) {
      console.log(error.data);
      setErrMessage(error.data);
      setOpen1(true);
    }
  };
  handleBooking();
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
    setOpen1(false);
  };
  return (
    <Stack direction={"row"} marginTop={"65px"}>
      <LeftSideBar />
      <Box
        sx={{
          width: ["100%", "100%", "47.4rem"],
          height: "100vh",
          marginLeft: ["0", "0", "297px"],
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
            paddingX: ["12px", "14px", "15px"],
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
              <Typography
                variant='body1'
                fontSize={[14, 15, 16]}
                color={"#42f1c1"}
                fontWeight={500}>
                {category &&
                  moment(category.dateOfEvent).format(" MMMM Do YYYY")}
              </Typography>
            </Stack>

            <Button
              onClick={handleBooking}
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
            <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
              <Alert
                onClose={handleClose}
                severity='success'
                sx={{ width: "100%" }}>
                Event booked successfully
              </Alert>
            </Snackbar>
            <Snackbar
              open={open1}
              autoHideDuration={4000}
              onClose={handleClose}>
              <Alert
                onClose={handleClose}
                severity='error'
                sx={{ width: "100%" }}>
                {errMessage}
              </Alert>
            </Snackbar>
          </Stack>
          <Typography
            variant='h6'
            fontSize={[16, 17, 20, 20]}
            fontWeight={400}
            color={"#ffffff"}>
            {category && category.description}
          </Typography>
        </Stack>
      </Box>
      <RightSideBar />
    </Stack>
  );
};

export default SingleEvent;
