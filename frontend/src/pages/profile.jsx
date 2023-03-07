import { Box, Stack, Typography, Avatar } from "@mui/material";
import { currentUSer } from "../features/authSlice";
import { useSelector } from "react-redux";
import LeftSideBar from "../components/leftSidebar";
import RightSideBar from "../components/rightSidebar";
const Profile = () => {
  const user = useSelector(currentUSer);
  console.log(user);
  function stringToColor(string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = "#";

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  }

  function stringAvatar(name) {
    return {
      sx: {
        width: "200px",
        height: "200px",
        fontSize: 45,
        fontWeight: 500,
        marginBottom: 2,
        bgcolor: stringToColor(name),
      },
      children: `${name.split(" ")[0][0]}`,
    };
  }
  return (
    <Stack direction={"row"} marginTop={"65px"}>
      <LeftSideBar />
      <Box
        sx={{
          width: "47.4rem",
          height: "100vh",
          marginLeft: "297px",
          bgcolor: "#04263a",
          padding: 2,
        }}>
        <Typography variant='h4' color={"#ffffff"} marginBottom={2}>
          Profile
        </Typography>
        <Avatar {...stringAvatar(user.user.fullname)} />
        <Stack
          direction={"column"}
          bgcolor={"primary.main"}
          width={"100%"}
          padding={2}
          borderRadius={6}
          gap={2}>
          <Box width={"100%"} height={"5vh"}>
            <Typography variant='h5' fontWeight={500} color={"#ffffff"}>
              Name: {user.user.fullname}
            </Typography>
          </Box>
          <Box width={"100%"} height={"5vh"}>
            <Typography variant='h5' fontWeight={500} color={"#ffffff"}>
              Email: {user.user.email}
            </Typography>
          </Box>
        </Stack>
      </Box>
      <RightSideBar />
    </Stack>
  );
};

export default Profile;
