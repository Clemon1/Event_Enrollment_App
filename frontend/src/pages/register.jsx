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
  Alert,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [message, setMessage] = useState("");
  const [message1, setMessage1] = useState("");
  const [erroR, setErroR] = useState(false);

  const navigate = useNavigate();
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen1(false);
    setOpen(false);
  };
  const URL = "http://localhost:4000/student/register";
  const body = {
    fullname,
    email,
    password,
  };
  const handleRegister = async (e) => {
    try {
      e.preventDefault();
      const res = await axios.post(URL, body);
      const data = await res.data;
      setMessage1("Registered Succesfully");

      navigate("/login");

      setOpen1(true);
      console.log(data);
    } catch (error) {
      setErroR(true);
      setMessage(error.response.data);
      setOpen(true);

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
          width: ["70%", "75%", "80%", "40%"],
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
            onClick={handleRegister}
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
      <Snackbar
        open={open1}
        autoHideDuration={4000}
        ClickAwayListenerProps={{
          mouseEvent: false,
          touchEvent: false,
        }}
        action={
          <>
            <Button
              size='small'
              onClick={handleClose}
              sx={{
                color: "primary.light",
                fontSize: 14,
                fontWeight: 500,
              }}>
              X
            </Button>
          </>
        }>
        <Alert onClose={handleClose} severity='success' sx={{ width: "100%" }}>
          {message1}
        </Alert>
      </Snackbar>
      {erroR && (
        <>
          <Snackbar
            open={open}
            autoHideDuration={4000}
            onClose={handleClose}
            action={
              <>
                <Button
                  size='small'
                  onClick={handleClose}
                  sx={{
                    color: "primary.light",
                    fontSize: 14,
                    fontWeight: 500,
                  }}>
                  X
                </Button>
              </>
            }>
            <Alert
              onClose={handleClose}
              severity='error'
              sx={{ width: "100%" }}>
              {message}
            </Alert>
          </Snackbar>
        </>
      )}
      ;
    </Stack>
  );
};

export default Register;
