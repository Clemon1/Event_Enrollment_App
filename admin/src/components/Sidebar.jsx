import {
  Box,
  Text,
  Flex,
  VStack,
  ListItem,
  UnorderedList,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { LogOut } from "../features/authSlice";
import { useState } from "react";
const Sidebar = () => {
  const [slide, setSLide] = useState(true);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(LogOut());
  };
  return (
    <VStack
      width={["45%", "38%", "232px", "232px"]}
      py={4}
      px={4}
      transform={[
        "translateX(-305px)",
        "translateX(-305px)",
        "translateX(-305px)",
        "translateX(-305px)",
        "translateX(0px)",
      ]}
      bgColor={"#031a27"}
      height={["100vh", "100vh", "100vh", "100vh", "100vh"]}
      position={"fixed"}
      top={0}
      left={0}>
      <Flex paddingBottom={20}>
        <Link to={"/dashboard"}>
          <Text
            className='fonta'
            fontSize={29}
            fontWeight={400}
            color={"#ffffff"}>
            Event-O
          </Text>
        </Link>
      </Flex>
      <UnorderedList
        width={"100%"}
        display={"flex"}
        flexDirection={"column"}
        listStyleType={"none"}
        color={"#ffffff"}
        fontSize={18}
        gap={3}
        fontWeight={500}>
        <Link to={"/dashboard"}>
          <ListItem bgColor={"#fff"} color={"#000"} rounded={11} padding={2}>
            <Text paddingLeft={"4.2rem"}>Home</Text>
          </ListItem>
        </Link>
        <Link to={"/events"}>
          <ListItem padding={2}>
            <Text paddingLeft={"4.2rem"}>Events</Text>
          </ListItem>
        </Link>
        <Link to={"/categories"}>
          <ListItem padding={2}>
            <Text paddingLeft={"4.2rem"}>Categories</Text>
          </ListItem>
        </Link>
        <Link to={"/profile"}>
          <ListItem padding={2}>
            <Text paddingLeft={"4.2rem"}> Profile</Text>
          </ListItem>
        </Link>
      </UnorderedList>
      <Flex width={"100%"} marginTop={"13rem !important"}>
        <Button
          onClick={handleLogout}
          width={"100%"}
          rounded={11}
          color={"#fafafa"}
          bgColor={"#FF8749"}>
          LogOut
        </Button>
      </Flex>
    </VStack>
  );
};

export default Sidebar;
