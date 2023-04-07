import {
  Box,
  Flex,
  Text,
  Table,
  Thead,
  Button,
  Avatar,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";
import moment from "moment";
import { useGetAllEventsQuery } from "../features/eventSlice";
import { Link } from "react-router-dom";
const Events = () => {
  const { data: events } = useGetAllEventsQuery();
  return (
    <Box
      justifyContent={"center"}
      width={"100%"}
      bgColor={"bgMain.primary"}
      height={"100vh"}>
      <Sidebar />
      <Flex
        flexDirection={"column"}
        width={["100%", "100%", "100%", "100%", "1116px"]}
        marginLeft={[0, 0, 0, 0, 232]}
        gap={3}
        bgColor={"bgMain.primary"}
        padding={6}
        height={"fit-content"}>
        <Flex
          width={"100%"}
          height={"fit-content"}
          alignItems={"center"}
          justifyContent={"space-between"}>
          <Text fontSize={23} fontWeight={500} color={"#ffffff"}>
            Events: {events && events.length}
          </Text>
          <Link to={"/createEvent"}>
            <Button
              bgColor={"#FF8749"}
              rounded={11}
              color={"#fafafa"}
              _hover={{}}>
              Add Event
            </Button>
          </Link>
        </Flex>
        <TableContainer bgColor={"bgMain.secondary"} rounded={15}>
          <Table variant='simple' borderStyle={"hidden"}>
            <Thead borderStyle={"hidden"}>
              <Tr>
                <Th color={"#ffffff"}>Cover</Th>
                <Th color={"#ffffff"}>Title</Th>
                <Th color={"#ffffff"}>Category</Th>
                <Th color={"#ffffff"}>Date</Th>
              </Tr>
            </Thead>
            <Tbody>
              {events &&
                events.map((event) => (
                  <Tr key={event.key} borderStyle={"hidden"}>
                    <Td>
                      <Avatar src={event.image} />
                    </Td>
                    <Td color={"#F2FAFF"}>
                      <Text maxWidth={170} isTruncated>
                        {event.title}
                      </Text>
                    </Td>
                    <Td color={"#F2FAFF"}>
                      <Text> {event.category.name}</Text>
                    </Td>
                    <Td color={"#F2FAFF"}>
                      {moment(event.dateOfEvent).format(" Do MM, YYYY")}
                    </Td>
                  </Tr>
                ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Flex>
    </Box>
  );
};

export default Events;
