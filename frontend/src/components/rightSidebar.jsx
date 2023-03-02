import { Button, Divider, Stack, Typography } from "@mui/material";

const RightSideBar = () => {
  return (
    <Stack
      direction={"column"}
      gap={2}
      sx={{
        width: "22%",
        height: "90vh",
        bgcolor: "primary.main",
        paddingX: 2,
        position: "fixed",
        top: 65,
        right: 0,
      }}>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        bgcolor={"inherit"}
        sx={{
          width: "100%",
          height: "9vh",
        }}>
        <Typography
          variant='h6'
          sx={{
            color: "primary.light",
            fontWeight: 500,
            fontSize: "1.15rem",
          }}>
          Popular Events
        </Typography>
        <Button sx={{ color: "primary.light" }}>See All</Button>
      </Stack>
      <Divider sx={{ bgcolor: "secondary.light" }} />
      <Stack
        direction={"column"}
        width={"100%"}
        height={"73%"}
        borderRadius={"25px"}
        bgcolor={"#04263a"}></Stack>
    </Stack>
  );
};

export default RightSideBar;
