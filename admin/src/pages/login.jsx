import {
  Box,
  Flex,
  Input,
  FormControl,
  FormLabel,
  Text,
  Button,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Pending, Success, Rejected } from "../features/authSlice";
import { apiName } from "../API/api";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const body = {
    email,
    password,
  };
  const toast = useToast();
  console.log(body);
  const dispatch = useDispatch();
  const hangleLogin = async (e) => {
    try {
      e.preventDefault();
      dispatch(Pending());
      const res = await axios.post(`${apiName}/admin/login`, {
        email,
        password,
      });

      dispatch(Success(await res.data));
      toast({
        title: "Logged in Succesfully",
        position: "top-right",
        variant: "left-accent",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
      navigate("/dashboard");
    } catch (error) {
      dispatch(Rejected(error.response.data));
      toast({
        title: error.response.data,
        position: "top-right",
        variant: "left-accent",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      console.log(error.response.data);
    }
  };
  return (
    <Flex
      justifyContent={"center"}
      alignItems={"center"}
      width={"100%"}
      height={"100vh"}
      bgColor={"bgMain.primary"}>
      <Box
        width={["86%", "70%", "50%", "35%"]}
        bgColor={"bgMain.secondary"}
        padding={3}
        borderRadius={12}
        justifyContent={"center"}>
        <form onSubmit={hangleLogin}>
          <Text
            as={"h5"}
            color={"#ffffff"}
            fontSize={23}
            fontWeight={600}
            textAlign={"center"}>
            Login
          </Text>
          <FormControl marginBottom={5}>
            <FormLabel color={"#ffffff"}>Email</FormLabel>
            <Input
              width={"100%"}
              type='email'
              border={"2px #ffffff solid"}
              placeholder='Email'
              color={"#ffffff"}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl marginBottom={5}>
            <FormLabel color={"#ffffff"}>Password</FormLabel>
            <Input
              type='password'
              width={"100%"}
              border={"2px #ffffff solid"}
              color={"#ffffff"}
              placeholder='password'
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>
          <FormControl>
            <Button type='submit' bgColor={"bgMain.blue"} width={"100%"}>
              Submit
            </Button>
          </FormControl>
        </form>
      </Box>
    </Flex>
  );
};

export default Login;
