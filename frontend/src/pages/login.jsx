import {
  Box,
  Typography,
  Stack,
  FormControl,
  Input,
  InputLabel,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <Stack
      direction={"row"}
      width={"100%"}
      justifyContent={"center"}
      height={"100vh"}
      bgcolor={"primary.main"}
      paddingY={5}>
      <Box
        sx={{
          width: ["70%", "75%", "80%", "40%"],
          borderRadius: 3,
          height: "60vh",
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
            sx={{
              width: "100%",
              padding: 1,
              background: "#03a075",
              borderRadius: 4,
              color: "#ffffff",
              fontWeight: 500,
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
    </Stack>
  );
};

export default Login;
