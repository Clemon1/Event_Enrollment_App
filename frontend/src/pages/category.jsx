import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";

import LeftSideBar from "../components/leftSidebar";
import RightSideBar from "../components/rightSidebar";
const Category = () => {
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
        <Typography variant='h5' color={"primary.light"}>
          All Categories
        </Typography>
        <Stack
          direction={"r"}
          gap='0.9rem'
          flexWrap={"wrap"}
          justifyContent={"flex-start"}
          width={"100%"}
          height={"fit-content"}
          sx={{
            bgcolor: "#04263a",
          }}>
          <Card
            sx={{
              borderRadius: 8,
              width: "38%",
              height: "40vh",
              background: "#fafafa",
            }}>
            <CardMedia
              sx={{ height: "100%" }}
              image='/static/images/cards/contemplative-reptile.jpg'
              title='green iguana'
            />
          </Card>
        </Stack>
      </Box>
      <RightSideBar />
    </Stack>
  );
};

export default Category;
