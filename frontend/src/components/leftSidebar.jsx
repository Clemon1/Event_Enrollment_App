import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Stack,
  Typography,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link, NavLink } from "react-router-dom";
const LeftSideBar = () => {
  return (
    <Stack
      direction={"column"}
      sx={{
        width: "22%",
        height: "100vh",
        paddingX: 5,
        paddingY: 1,
        bgcolor: "primary.main",
        position: "fixed",
        top: 65,
        left: 0,
      }}>
      <List>
        <NavLink to={"/home"} style={{ textDecoration: "none" }}>
          <ListItem alignItems='center'>
            <ListItemButton>
              <ListItemIcon>
                <HomeIcon sx={{ fontSize: 30, color: "primary.light" }} />
              </ListItemIcon>
              <Typography
                variant='body1'
                sx={{ fontSize: 18, fontWeight: 500, color: "primary.light" }}>
                Home
              </Typography>
            </ListItemButton>
          </ListItem>
        </NavLink>

        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <BookmarkIcon sx={{ fontSize: 30, color: "primary.light" }} />
            </ListItemIcon>
            <Typography
              variant='body1'
              sx={{ fontSize: 18, fontWeight: 500, color: "primary.light" }}>
              Bookmark
            </Typography>
          </ListItemButton>
        </ListItem>

        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <LocalActivityIcon
                sx={{ fontSize: 30, color: "primary.light" }}
              />
            </ListItemIcon>
            <Typography
              variant='body1'
              sx={{ fontSize: 18, fontWeight: 500, color: "primary.light" }}>
              Tickets
            </Typography>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <AccountCircleIcon
                sx={{ fontSize: 30, color: "primary.light" }}
              />
            </ListItemIcon>
            <Typography
              variant='body1'
              sx={{ fontSize: 18, fontWeight: 500, color: "primary.light" }}>
              Profile
            </Typography>
          </ListItemButton>
        </ListItem>
      </List>
    </Stack>
  );
};

export default LeftSideBar;
