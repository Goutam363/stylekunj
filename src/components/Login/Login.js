import "./Login.css";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import { setTokenCookie, setLoginStateCookie } from "../cookieUtils";
import { AuthContext } from "../AuthProvider";
import axios from 'axios';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {
  const [isDisabled, setIsDisabled] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setLoggedin, setUsername: setUsernameContext, setProfile, setTokenContext } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsDisabled(true);

    // Handle login logic here
    try {
        // Send POST request to the authentication endpoint
        const response = await axios.post(`${process.env.REACT_APP_EWABEY_BACKEND_URL}/auth/signin`, {
          username: username,
          password: password
        });
  
        // Extract token from the response data
        const token = response.data.accessToken;
  
        // Store token in cookie
        await setTokenContext(token);
        setTokenCookie(token);
        setLoginStateCookie(true) // Set loggedin cookie state to true
        await setLoggedin(true); // Set loggedin context state to true
        await setUsernameContext(username); // Store username in context
  
        // Make GET request to retrieve user profile data
        const profileResponse = await axios.get(`${process.env.REACT_APP_EWABEY_BACKEND_URL}/auth/${username}`,{
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        const userProfile = profileResponse.data;
  
        // Store profile in context
        await setProfile(userProfile);
  
        // Reset form inputs
        setUsername('');
        setPassword('');
  
        setIsDisabled(false);
        navigate('/'); // Navigate home page
  
      } catch (error) {
        setIsDisabled(false);
        if(error.code === 'ERR_BAD_REQUEST'){
          toast.error('Check your login credentials!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
            });
        } else if(error.code === 'ERR_NETWORK') {
          setIsDisabled(false);
          toast.warn('Check your internet connection!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
            });
        } else {
          setIsDisabled(false);
          toast.error(`Some error occured. Can't login.`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
            });
        }
      }

  };

  const handleFgUsr = () => {
    navigate("/fg-usr");
  };

  const handleFgPsw = () => {
    navigate("/fg-psw");
  };

  const handleSignUp = () => {
    navigate("/signup");
  };

  return (
    <div className="login-container">
      <Container
        mt={5}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Grid container justifyContent="center">
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                backgroundColor: "rgba(255, 255, 255, 0.4)",
                borderRadius: "15px",
              }}
            >
              <CardContent>
                <Typography variant="h5" align="center" gutterBottom>
                  Login
                </Typography>
                <form onSubmit={handleSubmit}>
                  <TextField
                    fullWidth
                    id="username"
                    label="Username"
                    variant="outlined"
                    placeholder="Enter username"
                    value={username}
                    disabled={isDisabled}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <Typography variant="body2" align="right" gutterBottom>
                    <Link onClick={handleFgUsr} style={{ color: "#002884" }}>
                      Forget Username?
                    </Link>
                  </Typography>
                  <TextField
                    fullWidth
                    id="password"
                    label="Password"
                    type="password"
                    variant="outlined"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={isDisabled}
                  />
                  <Typography variant="body2" align="right" gutterBottom>
                    <Link onClick={handleFgPsw} style={{ color: "#002884" }}>
                      Forget Password?
                    </Link>
                  </Typography>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    disabled={isDisabled}
                  >
                    Login
                  </Button>
                </form>
                <div style={{ marginTop: "1rem", textAlign: "center" }}>
                  <Typography variant="body1" gutterBottom>
                    Don't have an account?{" "}
                    <Link onClick={handleSignUp} style={{ color: "#002884" }}>
                      Sign up
                    </Link>
                  </Typography>
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <ToastContainer />
    </div>
  );
}
