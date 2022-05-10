import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import Divider from "@mui/material/Divider";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Avatar, Typography } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { MenuItem } from "@mui/material";
import { Button } from "@mui/material";
import { Settings } from "@mui/icons-material";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";

const drawerWidth = 240;

export default function DrawerLeft() {
  const [hide, setHide] = useState(false);

  const toggleHide = () => {
    setHide((oldState) => !oldState);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            background: "black",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar style={{ background: "#4B0082" }}>
          <ListItemText style={{ color: "white", textAlign: "center" }}>
            <p>TAMK</p>
          </ListItemText>
        </Toolbar>
        <Divider />
        <ListItemIcon>
          <Avatar sx={{ width: 100, height: 100 }} />
        </ListItemIcon>
        <Typography
          style={{
            padding: "5px",
            textAlign: "center",
            color: "white",
          }}
        >
          Your name here
        </Typography>
        <Typography
          style={{
            padding: "1px",
            textAlign: "center",
            color: "darkgray",
          }}
        >
          Add title or description here
        </Typography>
        <Link to="/home" style={{ textDecoration: "none", color: "black" }}>
          <MenuItem style={{ padding: "16px" }}>
            <ListItemIcon>
              <DashboardIcon fontSize="small" style={{ color: "darkgray" }} />
            </ListItemIcon>
            <ListItemText style={{ color: "white" }}>Home</ListItemText>
          </MenuItem>
        </Link>
        <MenuItem>
          <Button style={{ color: "white" }} onClick={toggleHide}>
            Menu
          </Button>
        </MenuItem>
        {hide && (
          <Link
            to="/profile"
            style={{ textDecoration: "none", color: "black" }}
          >
            <MenuItem>
              <ListItemIcon>
                <PersonIcon fontSize="small" style={{ color: "darkgray" }} />
              </ListItemIcon>
              <ListItemText style={{ color: "white" }}>
                Profile View
              </ListItemText>
            </MenuItem>
          </Link>
        )}
        {hide && (
          <Link
            to="/settings"
            style={{ textDecoration: "none", color: "black" }}
          >
            <MenuItem>
              <ListItemIcon>
                <Settings fontSize="small" style={{ color: "darkgray" }} />
              </ListItemIcon>
              <ListItemText style={{ color: "white" }}>
                Settings View
              </ListItemText>
            </MenuItem>
          </Link>
        )}
        <Divider />
      </Drawer>
    </Box>
  );
}
