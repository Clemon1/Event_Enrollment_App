import { Box, Stack, Typography } from "@mui/material";
import Lottie from "lottie-react";
import lottieFIle from "../assets/lottie.json";
const ErorPage = () => {
  return (
    <Stack
      direction={"column"}
      width={"100%"}
      height={"100vh"}
      bgcolor={"primary.main"}
      justifyContent={"center"}
      alignItems={"center"}>
      <Box width={"30%"} height={"58vh"}>
        <Lottie animationData={lottieFIle} loop={true} />
      </Box>
      <Typography variant='h2' color={"#ffffff"}>
        Page does not exist.
      </Typography>
    </Stack>
  );
};

export default ErorPage;
