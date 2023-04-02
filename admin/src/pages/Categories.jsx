import {
  Box,
  Flex,
  Text,
  Table,
  Thead,
  Avatar,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Button,
} from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";
import moment from "moment";
import { useGetCategoriesQuery } from "../features/categorySlice";
const Categories = () => {
  const { data: categories } = useGetCategoriesQuery();
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
            Categories
          </Text>
          <Button bgColor={"#FF8749"} rounded={11} color={"#fafafa"}>
            Add Categories
          </Button>
        </Flex>
        <TableContainer bgColor={"bgMain.secondary"} rounded={15}>
          <Table variant='simple' borderStyle={"hidden"}>
            <Thead borderStyle={"hidden"}>
              <Tr>
                <Th color={"#ffffff"}>Cover</Th>
                <Th color={"#ffffff"}>Name</Th>
                <Th color={"#ffffff"}>Date Created</Th>
                <Th color={"#ffffff"}>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {categories &&
                categories.map((category) => (
                  <Tr key={category._id} borderStyle={"hidden"}>
                    <Td>
                      <Avatar src={category.image} />
                    </Td>

                    <Td color={"#F2FAFF"}>
                      <Text> {category.name}</Text>
                    </Td>
                    <Td color={"#F2FAFF"}>
                      {moment(category.createdAt).format("Do MM, YYYY")}
                    </Td>
                    <Td color={"#F2FAFF"}>
                      <Button
                        rounded={15}
                        bgColor={"#009CF8"}
                        color={"#fafafa"}
                        _hover={{
                          bgColor: "#fafafa",
                          color: "#1A202C",
                        }}>
                        Edit
                      </Button>
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

export default Categories;
