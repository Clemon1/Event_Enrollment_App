import {
  Box,
  Flex,
  Text,
  Table,
  Thead,
  Avatar,
  Tbody,
  Icon,
  Tr,
  Th,
  Td,
  TableContainer,
  Button,
  CircularProgress,
  CircularProgressLabel,
} from "@chakra-ui/react";
import moment from "moment";
import Sidebar from "../components/Sidebar";
import { useState, useEffect } from "react";
import { currentUSer } from "../features/authSlice";
import { useSelector } from "react-redux";
import { CiMenuKebab } from "react-icons/ci";
import ChartPie from "../components/PieChart";
import { useGetTopBookingQuery } from "../features/bookingSlice";
import { useGetUserNumberQuery } from "../features/userSlice";
import SideBTN from "../components/sidebtn";

const Dashboard = () => {
  const [greeting, setGreeting] = useState("");
  const [subGreeting, setSubGreeting] = useState("");
  const user = useSelector(currentUSer);
  const { data: topBooking } = useGetTopBookingQuery();
  const { data: getTotal } = useGetUserNumberQuery();

  console.log(getTotal);
  useEffect(() => {
    const date = new Date();
    const hours = date.getHours();

    if (hours >= 6 && hours < 12) {
      setGreeting("Good morning");
      setSubGreeting("Have a lovely day");
    } else if (hours >= 12 && hours < 18) {
      setGreeting("Good afternoon");
      setSubGreeting("Enhance your energy to give the best in what you do.");
    } else {
      setGreeting("Good evening");
      setSubGreeting("Wish you a peaceful evening");
    }
  }, []);

  return (
    <Box
      justifyContent={"center"}
      bgColor={"bgMain.primary"}
      width={"100%"}
      height={"fit-content"}>
      <Sidebar />
      <Flex
        flexDirection={"column"}
        width={["100%", "100%", "100%", "100%", "1134px"]}
        marginLeft={[0, 0, 0, 0, 232]}
        padding={6}
        bgColor={"bgMain.primary"}
        gap={3}
        height={["100%", "100%", "100%", "100%", "100vh"]}>
        <SideBTN />
        <Flex
          width={"100%"}
          flexDirection={["column", "column", "row", "row", "row"]}
          height={["60vh", "60vh", "36vh", "30vh"]}>
          <Flex
            flexDirection={"column"}
            justifyContent={"center"}
            width={["100%", "100%", "100%", "55%"]}
            padding={4}
            height={"100%"}>
            <Text color={"bgMain.white"} fontWeight={500} fontSize={34}>
              {greeting}, <br />
              {user.others.fullname}
            </Text>
            <Text color={"bgMain.white"} fontWeight={400} fontSize={16}>
              {subGreeting}
            </Text>
          </Flex>
          <Flex
            width={["100%", "100%", "46%", "45%"]}
            rounded={14}
            padding={4}
            background={"#FF8749"}
            height={"100%"}>
            <Flex
              direction={"column"}
              alignItems={"center"}
              justifyContent={"center"}
              width={"100%"}
              height={"100%"}>
              <Text color={"#031a27"} fontWeight={600} fontSize={20}>
                Student
              </Text>
              <CircularProgress value={100} size={"90px"} color='#C4FCF0'>
                <CircularProgressLabel color={"#031a27"} fontWeight={500}>
                  {getTotal && getTotal.studentNumber}
                </CircularProgressLabel>
              </CircularProgress>
            </Flex>
            <Flex
              direction={"column"}
              alignItems={"center"}
              justifyContent={"center"}
              width={"100%"}
              height={"100%"}>
              <Text color={"#031a27"} fontWeight={600} fontSize={20}>
                Admin
              </Text>
              <CircularProgress value={100} size={"90px"} color='#FFE8D3'>
                <CircularProgressLabel color={"#031a27"} fontWeight={500}>
                  {getTotal && getTotal.adminNumber}
                </CircularProgressLabel>
              </CircularProgress>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          width={"100%"}
          flexDirection={["column", "column", "row", "row", "row"]}
          gap={3}
          height={[
            "fit-content",
            "fit-content",
            "fit-content",
            "70vh",
            "70vh",
          ]}>
          <Box
            width={["100%", "100%", "40%", "40%"]}
            rounded={14}
            padding={4}
            height={"100%"}
            bgColor={"bgMain.secondary"}>
            <Flex
              width={"100%"}
              justifyContent={"space-between"}
              alignItems={"center"}>
              <Text fontSize={20} fontWeight={500} color={"#ffffff"}>
                Top Categories
              </Text>
              <Button
                bg={"transparent"}
                _hover={{
                  bg: "transparent",
                }}>
                <Icon as={CiMenuKebab} color={"#ffffff"} />
              </Button>
            </Flex>
            <Flex
              width={"100%"}
              height={"100%"}
              justifyContent={"center"}
              alignItems={"center"}>
              <ChartPie />
            </Flex>
          </Box>
          <Box
            width={["100%", "100%", "60%", "60%"]}
            rounded={14}
            padding={4}
            height={"100%"}
            bgColor={"#006C6D"}>
            <Flex
              width={"100%"}
              justifyContent={"space-between"}
              alignItems={"center"}
              padding={2}>
              <Text fontSize={20} fontWeight={500} color={"#ffffff"}>
                Top booked Events
              </Text>
              <Button
                bg={"transparent"}
                _hover={{
                  bg: "transparent",
                }}>
                <Icon as={CiMenuKebab} color={"#ffffff"} />
              </Button>
            </Flex>
            <TableContainer>
              <Table variant='simple' borderStyle={"hidden"}>
                <Thead borderStyle={"hidden"}>
                  <Tr>
                    <Th color={"#ffffff"}>Cover</Th>
                    <Th color={"#ffffff"}>Title</Th>
                    <Th color={"#ffffff"}>Date</Th>
                    <Th color={"#ffffff"} isNumeric>
                      Booked
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {topBooking &&
                    topBooking.map((book) => (
                      <Tr key={book._id} borderStyle={"hidden"}>
                        <Td>
                          <Avatar src={book.image} />
                        </Td>
                        <Td color={"#F2FAFF"}>
                          <Text maxWidth={170} isTruncated>
                            {book.name}
                          </Text>
                        </Td>
                        <Td color={"#F2FAFF"}>
                          {moment(book.date).format("MM Do YYYY")}
                        </Td>
                        <Td color={"#F2FAFF"} isNumeric>
                          {book.bookingsCount}
                        </Td>
                      </Tr>
                    ))}
                </Tbody>
              </Table>
            </TableContainer>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Dashboard;
