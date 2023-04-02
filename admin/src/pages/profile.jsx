import { Avatar, Box, Card, Flex, Text } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";

import { currentUSer } from "../features/authSlice";
import { useSelector } from "react-redux";
import moment from "moment";

const Profile = () => {
  const user = useSelector(currentUSer);

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
        height={"100vh"}>
        <Flex>
          <Text fontSize={23} fontWeight={500} color={"#ffffff"}>
            Profile
          </Text>
        </Flex>

        <Flex
          width={"100%"}
          justifyContent={"center"}
          alignItems={"center"}
          height={"60vh"}
          gap={5}>
          <Avatar size={"2xl"} name={user.others.fullname} />
          <Flex gap={4} flexDirection={"column"}>
            <Card
              bgColor={"bgMain.secondary"}
              padding={4}
              rounded={15}
              fontSize={23}
              fontWeight={500}
              color={"#ffffff"}>
              {user.others.fullname}
            </Card>
            <Card
              bgColor={"bgMain.secondary"}
              padding={4}
              rounded={15}
              fontSize={23}
              fontWeight={500}
              color={"#ffffff"}>
              {user.others.email}
            </Card>

            <Card
              bgColor={"bgMain.secondary"}
              padding={4}
              rounded={15}
              fontSize={23}
              fontWeight={500}
              color={"#ffffff"}>
              {moment(user.others.createdAt).format(" Do MM, YYYY")}
            </Card>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Profile;
