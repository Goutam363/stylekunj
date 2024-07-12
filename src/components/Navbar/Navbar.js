import { useState, useEffect, useContext } from "react";
import {
  AppBar,
  Button,
  Tab,
  Tabs,
  Toolbar,
  useMediaQuery,
  useTheme,
  IconButton,
  Box,
} from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import StyleKunjIcon from "../../logos/styleKunjWithout.png";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DrawerComp from "./Drawer";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider";
import { deleteTokenCookie, setLoginStateCookie } from "../cookieUtils";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SearchIcon from "@mui/icons-material/Search";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false);
  const {
    loggedin,
    setLoggedin,
    setUsername,
    setProfile,
    setTokenContext,
    setProductsContext,
    searchKeyword,
    setSearchKeyword,
  } = useContext(AuthContext);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const location = useLocation();
  const showSearch = location.pathname === '/' || location.pathname === '/products';
  const getPathIndex = () => {
    switch (location.pathname) {
      case "/":
        return 0;
      case "/orders":
        return 1;
      case "/products":
        if (loggedin) {
          return 2;
        } else {
          return 1;
        }
      case "/coupons":
        if (loggedin) {
          return 3;
        } else {
          return 2;
        }
      case "/about":
        if (loggedin) {
          return 4;
        } else {
          return 3;
        }
      case "/contact-us":
        if (loggedin) {
          return 5;
        } else {
          return 4;
        }
      case "/policies":
        if (loggedin) {
          return 6;
        } else {
          return 5;
        }
      default:
        return -1; // Default to no tab selected
    }
  };
  const [value, setValue] = useState(getPathIndex());
  useEffect(() => {
    setValue(getPathIndex());
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const isScrollPast20px = window.scrollY > 20;
      setIsSticky(isScrollPast20px);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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

  const handleSearch = async () => {
    setSearchKeyword(searchQuery);
    navigate("/products");
  };

  return (
    <div>
      <AppBar
        sx={{
          background: "#dacce6",
          position: "fixed",
          top: isSticky ? 0 : "20px", // Dynamic top property based on scroll position
          color: "black",
          transition: "top 0.3s", // Smooth transition for changing top property
        }}
      >
        <Toolbar>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <img
              src={StyleKunjIcon}
              alt="Style Kunj Icon"
              style={{ height: "2.8rem", width: "2.8rem", borderRadius: "50%", marginRight: "1rem" }}
            />
          </Link>
          {isMatch ? (
            <>
              {/* <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                <Typography sx={{ fontSize: "2rem", paddingLeft: "10%" }}>
                  Estore
                </Typography>
              </Link> */}
              { showSearch && (<Box display="flex" alignItems="center">
                <Search>
                  <InputBase
                    placeholder={ searchKeyword ? searchKeyword : "Search…" }
                    inputProps={{ "aria-label": "search" }}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    sx={{
                      color: "inherit",
                      width: "100%",
                      "& .MuiInputBase-input": {
                        padding: (theme) => theme.spacing(1, 1, 1, 0),
                        // vertical padding + font size from searchIcon
                        paddingLeft: `calc(1em + ${(theme) =>
                          theme.spacing(4)})`,
                        transition: (theme) =>
                          theme.transitions.create("width"),
                        [theme.breakpoints.up("sm")]: {
                          width: "12ch",
                          "&:focus": {
                            width: "20ch",
                          },
                        },
                      },
                    }}
                  />
                </Search>
                <IconButton onClick={handleSearch} aria-label="search">
                  <SearchIcon />
                </IconButton>
              </Box>)}
              <DrawerComp />
            </>
          ) : (
            <>
              <Tabs
                sx={{ marginLeft: "auto" }}
                textColor="inherit"
                value={value}
                onChange={(e, value) => setValue(value)}
              >
                <Tab label="Home" component={Link} to="/" />
                {loggedin && (
                  <Tab label="My Orders" component={Link} to="/orders" />
                )}
                <Tab label="Products" component={Link} to="/products" />
                <Tab label="Coupons" component={Link} to="/coupons" />
                <Tab label="About" component={Link} to="/about" />
                <Tab label="Contact Us" component={Link} to="/contact-us" />
                <Tab label="Policies" component={Link} to="/policies" />
              </Tabs>
              { showSearch && (<Box display="flex" alignItems="center">
                <Search>
                  <InputBase
                    placeholder={ searchKeyword ? searchKeyword : "Search…" }
                    inputProps={{ "aria-label": "search" }}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    sx={{
                      color: "inherit",
                      width: "100%",
                      "& .MuiInputBase-input": {
                        padding: (theme) => theme.spacing(1, 1, 1, 0),
                        // vertical padding + font size from searchIcon
                        paddingLeft: `calc(1em + ${(theme) =>
                          theme.spacing(4)})`,
                        transition: (theme) =>
                          theme.transitions.create("width"),
                        [theme.breakpoints.up("sm")]: {
                          width: "12ch",
                          "&:focus": {
                            width: "20ch",
                          },
                        },
                      },
                    }}
                  />
                </Search>
                <IconButton onClick={handleSearch} aria-label="search">
                  <SearchIcon />
                </IconButton>
              </Box>)}
              {loggedin ? (
                <Button
                  sx={{
                    marginLeft: "auto",
                    backgroundColor: "#5c3a78",
                    "&:hover": {
                      backgroundColor: "#9065b4", // Change this to the desired hover color
                    },
                  }}
                  variant="contained"
                  onClick={handleLogout}
                >
                  <AccountCircleIcon sx={{ mr: "2px" }} />
                  Logout
                </Button>
              ) : (
                <Button
                  sx={{
                    marginLeft: "auto",
                    backgroundColor: "#5c3a78",
                    "&:hover": {
                      backgroundColor: "#9065b4", // Change this to the desired hover color
                    },
                  }}
                  variant="contained"
                  component={Link}
                  to="/login"
                >
                  <AccountCircleIcon sx={{ mr: "2px" }} />
                  Login
                </Button>
              )}
            </>
          )}
        </Toolbar>
      </AppBar>
      <ToastContainer />
    </div>
  );
}
