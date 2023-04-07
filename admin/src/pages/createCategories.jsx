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
import {
  useGetCategoriesQuery,
  useCreateCategoriesMutation,
} from "../features/categorySlice";
import SideBTN from "../components/sidebtn";

const CreateCategory = () => {
  const [createCategories, { isLoading }] = useCreateCategoriesMutation();
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");

  const body = {
    image,
    name,
  };
  console.log(body);
  const toast = useToast();
  const navigate = useNavigate();
  const hangleCategory = async (e) => {
    try {
      e.preventDefault();
      const formData = new FormData();
      for (const [key, value] of Object.entries(body)) {
        formData.append(key, value);
      }
      await createCategories(formData).unwrap();
      navigate("/categories");

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
          width={["100%", "100%", "80%", "50%", "50%"]}
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
            onSubmit={hangleCategory}
            style={{
              width: "100%",
            }}>
            <Flex width={"100%"} direction={"column"} gap={2}>
              <Flex
                width={"100%"}
                direction={["column", "column", "column", "column", "column"]}
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
                  <FormLabel color={"#ffffff"}>Category Name</FormLabel>
                  <Input
                    onChange={(e) => setName(e.target.value)}
                    width={"100%"}
                    type='text'
                    color={"#ffffff"}
                  />
                </FormControl>
              </Flex>

              {!isLoading ? (
                <Button
                  type='submit'
                  padding={4}
                  height={"8vh"}
                  width={"100%%"}
                  rounded={"11px"}>
                  Submit
                </Button>
              ) : (
                <Button
                  disabled
                  width={"100%%"}
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

export default CreateCategory;
