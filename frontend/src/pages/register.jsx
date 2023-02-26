import { useState } from "react";
import {
  Box,
  Typography,
  Stack,
  FormControl,
  Input,
  InputLabel,
  Button,
  Snackbar,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [state, setState] = useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal, open } = state;

  const handleClose = () => {
    setState({ ...state, open: false });
  };
  const navigate = useNavigate();
  const URL = "http://localhost:4000/student/register";
  const body = {
    fullname,
    email,
    password,
  };
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = axios.post(URL, body);
      const data = await res.data;
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        message='SignUp succesfully, please login'
        key={vertical + horizontal}
      />;
      console.log(data);
      navigate("/home");
    } catch (err) {
      console.log(err.response.message);
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        message={"error somewhere"}
        key={vertical + horizontal}
      />;
    }
  };
  return (
    <Stack
      direction={"row"}
      width={"100%"}
      marginTop={"65px"}
      justifyContent={"center"}
      height={"100vh"}
      bgcolor={"primary.main"}
      paddingY={5}>
      <Box
        sx={{
          width: ["70%", "75%", "80%", "40%"],
          borderRadius: 3,
          height: "fit-content",
          bgcolor: "#082036",
          padding: 2,
        }}>
        <form onSubmit={handleRegister}>
          <Typography
            variant='h4'
            fontWeight={500}
            align='center'
            paddingBottom={2}
            color={"primary.light"}>
            Register
          </Typography>
          <FormControl sx={{ width: "100%", marginBottom: 2 }}>
            <InputLabel
              sx={{
                color: "#ffffff",
                fontWeight: 500,
              }}>
              Full Name
            </InputLabel>
            <Input
              onChange={(e) => setFullname(e.target.value)}
              sx={{
                background: "#030f18",
                padding: 1,
                borderRadius: 5,
                color: "#ffffff",
                ":focus-visible": {
                  color: "#ffffff !important",
                },
              }}
            />
          </FormControl>
          <FormControl sx={{ width: "100%", marginBottom: 2 }}>
            <InputLabel
              sx={{
                color: "#ffffff",
                fontWeight: 500,
              }}>
              Email
            </InputLabel>
            <Input
              type='email'
              onChange={(e) => setEmail(e.target.value)}
              sx={{
                background: "#030f18",
                padding: 1,
                borderRadius: 5,
                color: "#ffffff",
                ":focus-visible": {
                  color: "#ffffff !important",
                },
              }}
            />
          </FormControl>
          <FormControl sx={{ width: "100%", marginBottom: 2 }}>
            <InputLabel
              htmlFor='my-input'
              sx={{ color: "#ffffff", fontWeight: 500 }}>
              Password
            </InputLabel>
            <Input
              onChange={(e) => setPassword(e.target.value)}
              id='my-input'
              type='password'
              aria-describedby='my-helper-text'
              sx={{
                background: "#030f18",
                borderRadius: 5,
                paddingX: 4,
                padding: 1,
                color: "#ffffff",
              }}
            />
          </FormControl>
          <Button
            type='submit'
            sx={{
              width: "100%",
              padding: 1,
              background: "#03a075",
              borderRadius: 4,
              color: "#ffffff",
              fontWeight: 600,
              ":hover": {
                background: "#ffffff",
                color: "#030f18",
              },
            }}>
            Register
          </Button>

          <Typography
            variant='body1'
            padding={2}
            textAlign={"center"}
            fontWeight={500}
            color={"#ffffff"}>
            Already registered?
            <Link
              to='/login'
              style={{ textDecoration: "none", color: "#ffffff" }}>
              Login
            </Link>
          </Typography>
        </form>
      </Box>
    </Stack>
  );
};

export default Register;
