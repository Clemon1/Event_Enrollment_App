import {
  Backdrop,
  Box,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";

import LeftSideBar from "../components/leftSidebar";
import RightSideBar from "../components/rightSidebar";
import { useGetCategoriesQuery } from "../features/categorySlice";
const Category = () => {
  const { data, isLoading } = useGetCategoriesQuery();
  console.log(data);
  return (
    <Stack direction={"row"} marginTop={"65px"}>
      <LeftSideBar />
      <Box
        sx={{
          width: ["100%", "100%", "100%", "56%"],
          height: "100vh",
          marginLeft: [0, 0, 0, "297px"],
          bgcolor: "#04263a",
        }}>
        <Typography
          variant='h5'
          fontWeight={500}
          color={"primary.light"}
          paddingBottom={2}>
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
            padding: 2,
            bgcolor: "#04263a",
          }}>
          {data &&
            data?.map((c) => (
              <Card
                key={c._id}
                sx={{
                  borderRadius: [4, 4, 6, 8],
                  width: ["46%", "40%", "40%", "32%"],
                  height: "40vh",
                  background: "#fafafa",
                }}>
                <CardMedia
                  sx={{ height: "100%" }}
                  image={c.image}
                  title={c.name}
                />
                <Stack
                  direction={"row"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  sx={{
                    width: "100%",
                    height: "25%",
                    position: "relative",
                    zIndex: 10000,
                    color: "#ffffff",
                    backgroundColor: "#030f18c9",
                    top: "-62px",

                    backdropFilter: "blur(5px)",
                  }}>
                  <Typography variant='h6'>{c.name}</Typography>
                </Stack>
              </Card>
            ))}
        </Stack>
      </Box>
      <RightSideBar />
    </Stack>
  );
};

export default Category;
