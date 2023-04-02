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
        width={["100%", "100%", "100%", "100%", "1134px"]}
        marginLeft={[0, 0, 0, 0, 232]}
        padding={6}
        gap={3}
        height={"100vh"}>
        <Flex alignItems={"center"} justifyContent={"space-between"}>
          <Text fontSize={23} fontWeight={500} color={"#ffffff"}>
            Events
          </Text>
          <Button bgColor={"#FF8749"} rounded={11} color={"#fafafa"}>
            Add Event
          </Button>
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
