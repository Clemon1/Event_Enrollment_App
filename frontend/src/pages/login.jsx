import { useState } from "react";
import {
  Box,
  Typography,
  Stack,
  FormControl,
  Input,
  InputLabel,
  Snackbar,
  Alert,
  Button,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { Pending, Success, Rejected } from "../features/authSlice";
import { useDispatch } from "react-redux";
import axios from "axios";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [message, setMessage] = useState("");
  const [message1, setMessage1] = useState("");
  const [erroR, setErroR] = useState(false);
  const URL = "http://localhost:4000/student/login";
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
    setOpen1(false);
  };

  const handleLogin = async (e) => {
    try {
      e.preventDefault();
      dispatch(Pending());
      const res = await axios.post(URL, {
        email,
        password,
      });
      dispatch(await Success(res.data));
      setMessage("login Succesfully");

      navigate("/home");
      setOpen(true);
    } catch (error) {
      dispatch(Rejected(setMessage1(error.response.data)));
      setErroR(true);
      setOpen1(true);
      console.log(error.response.data);
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
          width: ["90%", "90%", "80%", "40%"],
          borderRadius: 3,
          height: "fit-content",
          bgcolor: "#082036",

          padding: 2,
        }}>
        <form>
          <Typography
            variant='h4'
            fontWeight={500}
            align='center'
            paddingBottom={2}
            color={"primary.light"}>
            Login
          </Typography>
          <FormControl sx={{ width: "100%", marginBottom: 2 }}>
            <InputLabel
              sx={{
                color: "#ffffff",
                fontWeight: 500,
              }}>
              Email
            </InputLabel>
            <Input
              onChange={(e) => setEmail(e.target.value)}
              type='email'
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
            onClick={handleLogin}
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
            Login
          </Button>

          <Typography
            variant='body1'
            padding={2}
            textAlign={"center"}
            fontWeight={500}
            color={"#ffffff"}>
            Don't have an account?{" "}
            <Link
              to='/register'
              style={{ textDecoration: "none", color: "#ffffff" }}>
              Register
            </Link>
          </Typography>
        </form>
      </Box>
      <Snackbar
        open={open}
        onClose={handleClose}
        autoHideDuration={4000}
        action={
          <>
            <Button size='small'>X</Button>
          </>
        }>
        <Alert severity='success'>{message}</Alert>
      </Snackbar>

      {erroR && (
        <Snackbar
          open={open1}
          onClose={handleClose}
          autoHideDuration={3000}
          action={
            <>
              <Button size='small'>X</Button>
            </>
          }>
          <Alert severity='error' onClose={handleClose}>
            {message1}
          </Alert>
        </Snackbar>
      )}
    </Stack>
  );
};

export default Login;
