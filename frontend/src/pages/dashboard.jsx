import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import pic6 from "../assets/pic6.jpg";
import pic2 from "../assets/pic2.jpg";
import LeftSideBar from "../components/leftSidebar";
import RightSideBar from "../components/rightSidebar";
const Dashboard = () => {
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
          direction={"column"}
          gap='0.9rem'
          width={"100%"}
          height={"fit-content"}
          sx={{
            bgcolor: "#04263a",
            paddingX: 4,
            paddingY: 2,
          }}>
          <Card
            sx={{
              width: "100%",
              display: "flex",
              height: "14rem",
              borderRadius: 3,
            }}>
            <CardMedia component='img' sx={{ width: "40%" }} image={pic6} />
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
                <Typography variant='body2' color={"#f5365a"} fontWeight={600}>
                  Fri, Mar 10th 2023
                </Typography>
                <Typography
                  variant='h5'
                  noWrap:true
                  color={"primary.light"}
                  sx={{ fontWeight: 500 }}>
                  This is a test ticket system
                </Typography>
                <Typography
                  variant='subtitle2'
                  noWrap:true
                  color={"primary.light"}
                  sx={{}}>
                  {" "}
                  SVG elements should be scaled for a 24x24px viewport so that
                  the resulting icon can be used as is, or included as a child
                  for
                </Typography>
              </Stack>
              <Stack
                direction={"column"}
                justifyContent={"space-between"}
                sx={{
                  width: "30%",
                  height: "100%",
                }}>
                <Stack direction={"row"} gap={1}>
                  <Button sx={{ bgcolor: "primary.main" }}>
                    <OpenInNewIcon sx={{ color: "primary.light" }} />
                  </Button>

                  <Button>
                    <BookmarkIcon sx={{ color: "primary.light" }} />
                  </Button>
                </Stack>
                <Typography
                  variant='h5'
                  color={"primary.light"}
                  fontSize={28}
                  fontWeight={500}
                  textAlign={"center"}>
                  $ 100
                </Typography>
              </Stack>
            </Stack>
          </Card>

          {/* Second Card for test */}

          <Card
            sx={{
              width: "100%",
              display: "flex",
              height: "14rem",
              borderRadius: 3,
            }}>
            <CardMedia component='img' sx={{ width: "40%" }} image={pic2} />
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
                <Typography variant='body2' color={"#f5365a"} fontWeight={600}>
                  Mon, July 10th 2023
                </Typography>
                <Typography
                  variant='h5'
                  color={"primary.light"}
                  sx={{
                    fontWeight: 500,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}>
                  This is another ticket test
                </Typography>
                <Typography
                  variant='subtitle2'
                  color={"primary.light"}
                  sx={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}>
                  {" "}
                  SVG elements should be scaled for a 24x24px viewport
                  soincluded as a child for dcjkcdcdn cdkcddjdck dcndc
                </Typography>
              </Stack>
              <Stack
                direction={"column"}
                justifyContent={"space-between"}
                sx={{
                  width: "30%",
                  height: "100%",
                }}>
                <Stack direction={"row"} gap={1}>
                  <Button sx={{ bgcolor: "primary.main" }}>
                    <OpenInNewIcon sx={{ color: "primary.light" }} />
                  </Button>

                  <Button>
                    <BookmarkIcon sx={{ color: "success.main" }} />
                  </Button>
                </Stack>
                <Typography
                  variant='h5'
                  color={"primary.light"}
                  fontSize={28}
                  fontWeight={500}
                  textAlign={"center"}>
                  $ 23
                </Typography>
              </Stack>
            </Stack>
          </Card>
        </Stack>
      </Box>
      <RightSideBar />
    </Stack>
  );
};

export default Dashboard;
