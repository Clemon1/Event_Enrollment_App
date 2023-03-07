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
import CategoryIcon from "@mui/icons-material/Category";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
const LeftSideBar = () => {
  return (
    <Stack
      direction={"column"}
      sx={{
        width: "22%",
        height: "90vh",
        paddingX: 5,
        justifyContent: "space-between",
        paddingY: 5,
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
        <NavLink to={"/categories"} style={{ textDecoration: "none" }}>
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <CategoryIcon sx={{ fontSize: 30, color: "primary.light" }} />
              </ListItemIcon>
              <Typography
                variant='body1'
                sx={{ fontSize: 18, fontWeight: 500, color: "primary.light" }}>
                Categories
              </Typography>
            </ListItemButton>
          </ListItem>
        </NavLink>
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
        <NavLink to={"/profile"} style={{ textDecoration: "none" }}>
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
        </NavLink>
      </List>
      <List>
        <ListItem alignItems='center'></ListItem>
      </List>
    </Stack>
  );
};

export default LeftSideBar;
