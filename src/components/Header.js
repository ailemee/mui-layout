import * as React from "react";
import { AppBar, Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import { AccountCircle, Settings } from "@mui/icons-material";
import { Grid } from "@mui/material";
import { IconButton } from "@mui/material";
import { Menu } from "@mui/material";
import { MenuItem } from "@mui/material";
import { Avatar } from "@mui/material";
import { ListItemIcon } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { Divider } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { ListItemText } from "@mui/material";
import { Link } from "react-router-dom";

export default function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <AppBar position="static" style={{ background: "#4B0082" }}>
        <Toolbar>
          <Grid justify={"space-between"} container>
            <Grid item xs={11} />
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem>
                <ListItemIcon>
                  <Avatar />
                </ListItemIcon>
                <ListItemText style={{ textAlign: "center" }}>
                  Black Cat
                </ListItemText>
              </MenuItem>
              <Link
                to="/profile"
                style={{ textDecoration: "none", color: "black" }}
              >
                <MenuItem>
                  <ListItemIcon>
                    <PersonIcon fontSize="small" />
                  </ListItemIcon>
                  Profile View
                </MenuItem>
              </Link>
              <Divider />
              <Link
                to="/settings"
                style={{ textDecoration: "none", color: "black" }}
              >
                <MenuItem>
                  <ListItemIcon>
                    <Settings fontsize="small" />
                  </ListItemIcon>
                  Settings View
                </MenuItem>
              </Link>

              <Divider />
              <MenuItem>
                <ListItemIcon>
                  <LogoutIcon />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
