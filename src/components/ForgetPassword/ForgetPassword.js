import "./ForgetPassword.css";
import { useState } from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { ForwardToInbox, Done } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ForgetPassword() {

  const [emailId, setEmailid] = useState("");
  const [emailOtp, setEmailOtp] = useState("");
  const [emlOtp, setEmlOtp] = useState("");
  const [emailVerified, setEmailVerified] = useState(false);
  const [emailCnf, setEmailCnf] = useState(false);
  const [submitDisabled, setSubmitDisabled] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Regex patterns for validation
  const usernameRegex = /^[a-zA-Z\d\s]{4,40}$/;
  const emailRegex = /^[^\s@]{1,50}@[^\s@]{1,50}\.[^\s@]{2,50}$/;
  const passwordRegex =
    /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;

    const navigate = useNavigate();


  const handleConfirmEmail = async () => {
    
    if(emailRegex.test(emailId)){
      try{
        setEmailCnf(true);
        const res = await axios.post(`${process.env.REACT_APP_EWABEY_BACKEND_URL}/mail/fg-psw/verify-email`,{
          email: emailId,
        })
        const otp = res.data.msg;
        setEmailOtp(otp);
        toast.info('Otp sent to your email address', {
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
          // Enable the confirm button after 90 seconds
          setTimeout(() => {
            setEmailCnf(false);
          }, 90000);
      } catch(error){
        toast.error('Error in mail otp service', {
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
    } else {
      toast.warn("Please enter a valid email address", {
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

  };

  const handleVerifyEmail = async () => {
    
    if(emailOtp === emlOtp && emailOtp!=="") {
      setEmailVerified(true);
      toast.success('Email id verified!', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
        });
    } else {
      toast.error("Invalid OTP", {
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

  };

  const validate = async () => {

    if(!emailVerified){
      toast.warn("Email is not verified!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
        onClose: () => {
          setSubmitDisabled(false);
        }
        });
      return false;
    }
    if(!usernameRegex.test(username)){
      toast.warn("Username should be in a-z or A-Z or 0-9 and 4-40 character long", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
        onClose: () => {
          setSubmitDisabled(false);
        }
        });
      return false;
    }
    if(!passwordRegex.test(password)){
      toast.warn("Password must contain 1 upper case letter, 1 lower case letter, 1 number or special character", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
        onClose: () => {
          setSubmitDisabled(false);
        }
        });
      return false;
    }
    if(password !== confirmPassword){
      toast.warn("Password does not match with confirm password", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
        onClose: () => {
          setSubmitDisabled(false);
        }
        });
      return false;
    }
    try{
      const res = await axios.get(`${process.env.REACT_APP_EWABEY_BACKEND_URL}/mail/fg-usr/send-usrname/${emailId}`);
      const usernames = res.data;
      if(usernames===""){
        toast.warn("Email is not registered!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
          onClose: () => {
            setSubmitDisabled(false);
          }
          });
        return false;
      } else {
        const usernameArr = usernames.split('|');
        const isUsernameMatched = usernameArr.includes(username);
        if(isUsernameMatched){
          return true;
        } else {
          toast.warn("Username does not linked to this email id!", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
            onClose: () => {
              setSubmitDisabled(false);
            }
            });
          return false;
        }
      }
    } catch(error){
      toast.error('Failed to fetch data from server', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
        onClose: () => {
          setSubmitDisabled(false);
        }
        });
      return false;
    }

  };

  const handleForgetPassword = async () => {

    setSubmitDisabled(true);
    const res = await validate();
    if(res){
      try{
        await axios.patch(`${process.env.REACT_APP_EWABEY_BACKEND_URL}/auth/psw`, {
          email: emailId,
          username,
          password,
        });
  
        // Push the home page into the browsing history
        window.history.pushState({ page: 'home' }, '', '/');
        toast.success('Password changed!', {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
          onClose: () => {
            navigate("/login");
          }
          });
  
      } catch (error) {
        toast.error('Failed to change password!', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
          onClose: () => {
            setSubmitDisabled(false);
          }
          });
      }
    }

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
                  Forget Password
                </Typography>
                <TextField
                  fullWidth
                  label="Username"
                  variant="outlined"
                  placeholder="Enter Username"
                  onChange={(e) => setUsername(e.target.value)}
                  sx={{ mb: 2 }}
                />
                <TextField
                  fullWidth
                  label="Email Address"
                  variant="outlined"
                  placeholder="Enter Email"
                  onChange={(e) => setEmailid(e.target.value)}
                  disabled={emailVerified || emailCnf}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={handleConfirmEmail} disabled={emailVerified || emailCnf} size="large">
                          <ForwardToInbox />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  fullWidth
                  label="OTP"
                  variant="outlined"
                  placeholder="Enter OTP"
                  onChange={(e) => setEmlOtp(e.target.value)}
                  disabled={emailVerified}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={handleVerifyEmail} disabled={emailVerified} size="large">
                          <Done />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  sx={{ mt: 1 }}
                />
                <TextField
                  fullWidth
                  label="New Password"
                  variant="outlined"
                  type="password"
                  placeholder="Enter New Password"
                  onChange={(e) => setPassword(e.target.value)}
                  sx={{ mt: 2 }}
                />
                <TextField
                  fullWidth
                  label="Confirm Password"
                  variant="outlined"
                  type="password"
                  placeholder="Confirm Password"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  sx={{ mt: 1 }}
                />
                <Button
                  type="button"
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={handleForgetPassword}
                  disabled={submitDisabled}
                  sx={{ mt: 3 }}
                >
                  Submit
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <ToastContainer />
    </div>
  );
}
