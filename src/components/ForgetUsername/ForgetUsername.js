import "./ForgetUsername.css";
import { useState } from 'react'
import { Container, Grid, Card, CardContent, TextField, IconButton, InputAdornment, Typography } from '@mui/material';
import { ForwardToInbox, Done } from '@mui/icons-material';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ForgetUsername() {
  const [emailId, setEmailid] = useState("");
  const [emailOtp, setEmailOtp] = useState("");
  const [emlOtp, setEmlOtp] = useState("");
  const [emailVerified, setEmailVerified] = useState(false);
  const [emailCnf, setEmailCnf] = useState(false);

  const navigate = useNavigate();

  // Regex patterns for validation
  const emailRegex = /^[^\s@]{1,50}@[^\s@]{1,50}\.[^\s@]{2,50}$/;

  const handleConfirmEmail = async () => {
    
    if(emailRegex.test(emailId)){
      try{
        setEmailCnf(true);
        const res = await axios.post(`${process.env.REACT_APP_EWABEY_BACKEND_URL}/mail/fg-usr/verify-email`,{
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

        try{
          await axios.post(`${process.env.REACT_APP_EWABEY_BACKEND_URL}/mail/fg-usr/send-usrname`,{
            email: emailId,
          })
          window.history.pushState({ page: 'home' }, '', '/');
          toast.info('username sent to your email address', {
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
              navigate("/login");
            }
            });
        } catch(error){
          if(error.code === 'ERR_BAD_REQUEST') {
          toast.error('Error either email id not found or network error', {
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
            } else if(error.code ==='ERR_NETWORK'){
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
              toast.error('Can not send username', {
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

  return (
    <div className="login-container">
    <Container mt={5} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Grid container justifyContent="center">
        <Grid item xs={12} md={6}>
          <Card sx={{ backgroundColor: 'rgba(255, 255, 255, 0.4)', borderRadius: '15px' }}>
            <CardContent>
            <Typography variant="h5" align="center" gutterBottom>Forget Username</Typography>
              <div className="form-group">
              <TextField
                      fullWidth
                      label="Email Address"
                      variant="outlined"
                      placeholder="Enter Email"
                      onChange={(e) => setEmailid(e.target.value)}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              onClick={handleConfirmEmail}
                              disabled={emailVerified || emailCnf}
                              size="large"
                            >
                              <ForwardToInbox />
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                      disabled={emailVerified || emailCnf}
                    />
                    <TextField
                      fullWidth
                      label="OTP"
                      variant="outlined"
                      placeholder="Enter OTP"
                      onChange={(e) => setEmlOtp(e.target.value)}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              onClick={handleVerifyEmail}
                              disabled={emailVerified}
                              size="large"
                            >
                              <Done />
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                      disabled={emailVerified}
                      sx={{ mt: 1 }}
                    />
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
