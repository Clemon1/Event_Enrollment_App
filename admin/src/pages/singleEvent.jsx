import { Box, Flex, Text } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";
import { useState, useEffect } from "react";

const SingleEvent = () => {
  return (
    <Box
      justifyContent={"center"}
      width={"100%"}
      bgColor={"bgMain.primary"}
      height={"100vh"}>
      <Sidebar />
      <Flex
        flexDirection={"column"}
        width={["100%", "100%", "100%", "100%", "1134px"]}
        marginLeft={[0, 0, 0, 0, 232]}
        padding={6}
        gap={3}
        height={"100vh"}></Flex>
    </Box>
  );
};

export default SingleEvent;
