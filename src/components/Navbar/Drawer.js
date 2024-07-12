import { useState, useContext } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { AuthContext } from "../AuthProvider";
import { deleteTokenCookie, setLoginStateCookie } from "../cookieUtils";
import MenuIcon from "@mui/icons-material/Menu";
import { AccountCircleRounded } from "@mui/icons-material";
import { NavLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const {
    loggedin,
    setLoggedin,
    setUsername,
    setProfile,
    setTokenContext,
    setProductsContext,
  } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    setLoginStateCookie(false); // Set login state cookie to false
    await setLoggedin(false); // Set loggedin context state to false
    await setUsername(""); // Reset username in context
    await setTokenContext("");
    await setProductsContext([]);
    await setProfile(null); // Reset profile in context
    deleteTokenCookie();
    toast.success("Logged Out Successfully!", {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
      onClose: () => {
        navigate("/");
      },
    });
  };

  return (
    <>
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List>
          <ListItemButton
            key="home"
            component={NavLink}
            style={({ isActive }) => {
              return {
                backgroundColor: isActive ? "#422a56" : "inherit",
                color: isActive ? "white" : "inherit",
              };
            }}
            to="/"
          >
            <ListItemText>Home</ListItemText>
          </ListItemButton>
          {loggedin && (
            <ListItemButton
              key="orders"
              component={NavLink}
              style={({ isActive }) => {
                return {
                  backgroundColor: isActive ? "#422a56" : "inherit",
                  color: isActive ? "white" : "inherit",
                };
              }}
              to="/orders"
            >
              <ListItemText>My Orders</ListItemText>
            </ListItemButton>
          )}
          <ListItemButton
            key="products"
            component={NavLink}
            style={({ isActive }) => {
              return {
                backgroundColor: isActive ? "#422a56" : "inherit",
                color: isActive ? "white" : "inherit",
              };
            }}
            to="/products"
          >
            <ListItemText>Products</ListItemText>
          </ListItemButton>
          <ListItemButton
            key="coupons"
            component={NavLink}
            style={({ isActive }) => {
              return {
                backgroundColor: isActive ? "#422a56" : "inherit",
                color: isActive ? "white" : "inherit",
              };
            }}
            to="/coupons"
          >
            <ListItemText>Coupons</ListItemText>
          </ListItemButton>
          <ListItemButton
            key="about"
            component={NavLink}
            style={({ isActive }) => {
              return {
                backgroundColor: isActive ? "#422a56" : "inherit",
                color: isActive ? "white" : "inherit",
              };
            }}
            to="/about"
          >
            <ListItemText>About</ListItemText>
          </ListItemButton>
          <ListItemButton
            key="contactUs"
            component={NavLink}
            style={({ isActive }) => {
              return {
                backgroundColor: isActive ? "#422a56" : "inherit",
                color: isActive ? "white" : "inherit",
              };
            }}
            to="/contact-us"
          >
            <ListItemText>Contact Us</ListItemText>
          </ListItemButton>
          <ListItemButton
            key="policies"
            component={NavLink}
            style={({ isActive }) => {
              return {
                backgroundColor: isActive ? "#422a56" : "inherit",
                color: isActive ? "white" : "inherit",
              };
            }}
            to="/policies"
          >
            <ListItemText>Policies</ListItemText>
          </ListItemButton>
          {loggedin ? (
            <ListItemButton key="logout" onClick={handleLogout}>
              <AccountCircleRounded />
              <ListItemText>Logout</ListItemText>
            </ListItemButton>
          ) : (
            <ListItemButton
              key="login"
              component={NavLink}
              style={({ isActive }) => {
                return {
                  backgroundColor: isActive ? "#422a56" : "inherit",
                  color: isActive ? "white" : "inherit",
                };
              }}
              to="/login"
            >
              <AccountCircleRounded />
              <ListItemText>Login</ListItemText>
            </ListItemButton>
          )}
        </List>
      </Drawer>
      <IconButton
        sx={{ color: "#0d0811", marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon color="#0d0811" />
      </IconButton>
      <ToastContainer />
    </>
  );
};

export default DrawerComp;
