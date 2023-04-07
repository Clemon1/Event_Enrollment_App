import {
  Box,
  Flex,
  Text,
  CircularProgress,
  FormControl,
  Input,
  Select,
  Icon,
  FormLabel,
  Image,
  Textarea,
  Button,
  useToast,
} from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiFillCamera } from "react-icons/ai";
import { useGetCategoriesQuery } from "../features/categorySlice";
import { useCreateEventsMutation } from "../features/eventSlice";
import SideBTN from "../components/sidebtn";

const CreateEvent = () => {
  const { data: categories } = useGetCategoriesQuery();
  const [createEvents, { isLoading }] = useCreateEventsMutation();
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [dateOfEvent, setDateofEvent] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const body = {
    image,
    title,
    dateOfEvent,
    category,
    description,
  };
  console.log(body);
  const toast = useToast();
  const navigate = useNavigate();
  const hangleEvent = async (e) => {
    try {
      e.preventDefault();
      const formData = new FormData();
      for (const [key, value] of Object.entries(body)) {
        formData.append(key, value);
      }
      await createEvents(formData).unwrap();
      navigate("/events");

      toast({
        title: "New Event Added",
        position: "top-right",
        variant: "left-accent",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    } catch (err) {
      toast({
        title: err.data,
        position: "top-right",
        variant: "left-accent",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      console.log(err.data);
    }
  };
  return (
    <Box
      justifyContent={"center"}
      width={"100%"}
      bgColor={"bgMain.primary"}
      height={"100vh"}>
      <Sidebar />
      <Flex
        flexDirection={"column"}
        justifyContent={"center"}
        width={["100%", "100%", "100%", "100%", "1134px"]}
        marginLeft={[0, 0, 0, 0, 232]}
        padding={6}
        bgColor={"bgMain.primary"}
        gap={3}
        height={[
          "fit-content",
          "fit-content",
          "fit-content",
          "100vh",
          "100vh",
        ]}>
        <SideBTN />
        <Flex
          width={"100%"}
          height={[
            "fit-content",
            "fit-content",
            "fit-content",
            "fit-content",
            "70vh",
          ]}
          bgColor={"#04263A"}
          rounded={11}
          padding={4}>
          <form
            onSubmit={hangleEvent}
            style={{
              width: "100%",
            }}>
            <Flex width={"100%"} direction={"column"} gap={2}>
              <Flex
                width={"100%"}
                direction={["column", "column", "column", "row", "row"]}
                justifyContent={"center"}
                alignItems={"center"}
                gap={3}
                flex={"1 1 1"}>
                <FormControl>
                  <Image
                    src={
                      !image
                        ? "https://cdn-icons-png.flaticon.com/512/1177/1177568.png"
                        : URL.createObjectURL(image)
                    }
                    borderRadius='full'
                    boxSize='150px'
                    objectFit={"cover"}
                  />
                  <FormLabel
                    htmlFor='Profile'
                    position={"relative"}
                    top={"-35px"}
                    width={"fit-content"}
                    height={"fit-content"}
                    left={109}>
                    <Icon
                      as={AiFillCamera}
                      width={55}
                      padding={3}
                      rounded={"full"}
                      height={55}
                      background={"#ffffff"}
                      color={"#000000"}
                    />
                  </FormLabel>
                  <Input
                    type='file'
                    id='Profile'
                    display={"none"}
                    onChange={(e) => setImage(e.target.files[0])}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel color={"#ffffff"}>Event Title</FormLabel>
                  <Input
                    onChange={(e) => setTitle(e.target.value)}
                    width={"100%"}
                    type='text'
                    color={"#ffffff"}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel color={"#ffffff"}>Categories</FormLabel>
                  <Select
                    onChange={(e) => setCategory(e.target.value)}
                    className='optionTag'
                    variant={"flushed"}
                    placeholder='Select Categories'
                    color={"#ffffff"}>
                    {categories &&
                      categories.map((c) => (
                        <option key={c._id} value={c._id}>
                          {c.name}
                        </option>
                      ))}
                  </Select>
                </FormControl>
                <FormControl>
                  <FormLabel color={"#ffffff"}>Date</FormLabel>
                  <Input
                    onChange={(e) => setDateofEvent(e.target.value)}
                    type='date'
                    color={"#ffffff"}
                  />
                </FormControl>
              </Flex>
              <Flex>
                <FormControl>
                  <FormLabel color={"#ffffff"}>Event Description</FormLabel>
                  <Textarea
                    onChange={(e) => setDescription(e.target.value)}
                    color={"#ffffff"}
                  />
                </FormControl>
              </Flex>
              {!isLoading ? (
                <Button
                  type='submit'
                  padding={4}
                  height={"8vh"}
                  width={"15%"}
                  rounded={"11px"}>
                  Submit
                </Button>
              ) : (
                <Button
                  disabled
                  width={"15%"}
                  padding={4}
                  height={"8vh"}
                  rounded={11}>
                  <CircularProgress isIndeterminate color='#04263A' size={45} />
                </Button>
              )}
            </Flex>
          </form>
        </Flex>
      </Flex>
    </Box>
  );
};

export default CreateEvent;
