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

import BookmarkIcon from "@mui/icons-material/Bookmark";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import pic6 from "../assets/pic6.jpg";
import pic2 from "../assets/pic2.jpg";
import LeftSideBar from "../components/leftSidebar";
import RightSideBar from "../components/rightSidebar";
const Dashboard = () => {
  const currentUser = useSelector((state) => state.user.User);
  console.log(currentUser);
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
        {/* <Box
          sx={{
            width: "100%",
            bgcolor: "primary.main",
            height: "4.5rem",
          }}></Box> */}
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
          <Card
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
              image={pic6}
            />
            <Stack
              direction={"row"}
              gap={1}
              sx={{
                width: "100%",
                height: "100%",
                padding: "0.9rem",
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
                    color={"#f5365a"}
                    fontWeight={600}>
                    Fri, Mar 10th 2023
                  </Typography>
                  <Button>
                    <BookmarkIcon sx={{ color: "primary.light" }} />
                  </Button>
                </Stack>

                <Typography
                  variant='h5'
                  color={"primary.light"}
                  sx={{ fontWeight: 500 }}>
                  This is a test ticket system
                </Typography>
              </Stack>
            </Stack>
          </Card>

          {/* Second Card for test */}
        </Stack>
      </Box>
      <RightSideBar />
    </Stack>
  );
};

export default Dashboard;
