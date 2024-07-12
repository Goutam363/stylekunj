import "./Signup.css";
import { useState } from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { ForwardToInbox, Done } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Signup() {
  const [name, setName] = useState("");
  const [emailId, setEmailid] = useState("");
  const [emailOtp, setEmailOtp] = useState("");
  const [emlOtp, setEmlOtp] = useState("");
  const [mobile, setMobile] = useState("");
  const [emlOtpVisible, setEmlOtpVisible] = useState(false);
  const [dob, setDob] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailVerified, setEmailVerified] = useState(false);
  const [emailCnf, setEmailCnf] = useState(false);
  const [signupDisabled, setSignupDisabled] = useState(false);

  // Regex patterns for validation
  const nameRegex = /^[a-zA-Z\s]{4,40}$/;
  const usernameRegex = /^[a-zA-Z\d\s]{4,40}$/;
  const mobileRegex = /^[\d\+\-]{4,22}$/;
  const emailRegex = /^[^\s@]{1,50}@[^\s@]{1,50}\.[^\s@]{2,50}$/;
  const dobRegex = /^\d{4}-\d{2}-\d{2}$/;
  const passwordRegex =
    /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;

  const navigate = useNavigate();

  const handleConfirmEmail = async () => {
    if (emailRegex.test(emailId)) {
      try {
        setEmailCnf(true);
        setEmlOtpVisible(true);
        const res = await axios.post(
          `${process.env.REACT_APP_EWABEY_BACKEND_URL}/mail/verify-email`,
          {
            email: emailId,
          }
        );
        const otp = res.data.msg;
        setEmailOtp(otp);
        toast.info("Otp sent to your email address", {
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
      } catch (error) {
        toast.error("Error in mail otp service", {
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
    if (emailOtp === emlOtp && emailOtp !== "") {
      setEmailVerified(true);
      setEmlOtpVisible(false);
      toast.success("Email id verified!", {
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
    if (!emailVerified) {
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
          setSignupDisabled(false);
        },
      });
      return false;
    }
    if (!mobileRegex.test(mobile)) {
      toast.warn("Enter a valid mobile number! (Do not use white space)", {
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
          setSignupDisabled(false);
        },
      });
      return false;
    }
    if (!nameRegex.test(name)) {
      toast.warn("Name should be in a-z or A-Z and 4-40 character long", {
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
          setSignupDisabled(false);
        },
      });
      return false;
    }
    if (!dobRegex.test(dob)) {
      toast.warn("Enter a valid DOB", {
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
          setSignupDisabled(false);
        },
      });
      return false;
    }
    if (!usernameRegex.test(username)) {
      toast.warn(
        "Username should be in a-z or A-Z or 0-9 and 4-40 character long",
        {
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
            setSignupDisabled(false);
          },
        }
      );
      return false;
    }
    if (!passwordRegex.test(password)) {
      toast.warn(
        "Password must contain 1 upper case letter, 1 lower case letter, 1 number or special character",
        {
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
            setSignupDisabled(false);
          },
        }
      );
      return false;
    }
    if (password !== confirmPassword) {
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
          setSignupDisabled(false);
        },
      });
      return false;
    }
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_EWABEY_BACKEND_URL}/auth/check/${username}`
      );
      if (res.data.exist) {
        toast.warn("Username already exists", {
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
            setSignupDisabled(false);
          },
        });
        return false;
      } else {
        return true;
      }
    } catch (error) {
      toast.error("Failed to fetch data from server", {
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
          setSignupDisabled(false);
        },
      });
      return false;
    }
  };

  const handleCreateAccount = async () => {
    setSignupDisabled(true);
    const res = await validate();
    if (res) {
      try {
        await axios.post(`${process.env.REACT_APP_EWABEY_BACKEND_URL}/auth/signup`, {
          name,
          email: emailId,
          mobile,
          dob,
          username,
          password,
        });

        // Push the home page into the browsing history
        window.history.pushState({ page: "home" }, "", "/");
        toast.success("User created!", {
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
          },
        });
      } catch (error) {
        if (error.code === "ERR_NETWORK") {
          toast.error("Check your internet connection!", {
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
              setSignupDisabled(false);
            },
          });
        } else {
          toast.error("Failed to create user!", {
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
              setSignupDisabled(false);
            },
          });
        }
      }
    }
  };

  return (
    <div className="signup-container">
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
                <form>
                  <TextField
                    fullWidth
                    label="Name"
                    variant="outlined"
                    placeholder="Enter Full Name"
                    disabled={signupDisabled}
                    onChange={(e) => setName(e.target.value)}
                    sx={{ mb: 2 }}
                  />
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Email Address"
                        variant="outlined"
                        placeholder="Enter Email"
                        onChange={(e) => setEmailid(e.target.value)}
                        disabled={emailVerified || emailCnf || signupDisabled}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton
                                onClick={handleConfirmEmail}
                                disabled={emailVerified || emailCnf || signupDisabled}
                                size="large"
                              >
                                <ForwardToInbox />
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                      />
                      {emlOtpVisible && (
                        <TextField
                          fullWidth
                          label="OTP"
                          variant="outlined"
                          placeholder="Enter OTP"
                          onChange={(e) => setEmlOtp(e.target.value)}
                          disabled={emailVerified || signupDisabled}
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="end">
                                <IconButton
                                  onClick={handleVerifyEmail}
                                  disabled={emailVerified || signupDisabled}
                                  size="large"
                                >
                                  <Done />
                                </IconButton>
                              </InputAdornment>
                            ),
                          }}
                          sx={{ mt: 1 }}
                        />
                      )}
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Mobile Number with country code"
                        variant="outlined"
                        placeholder="Enter Mobile with country code"
                        onChange={(e) => setMobile(e.target.value)}
                        disabled={signupDisabled}
                      />
                    </Grid>
                  </Grid>
                  <TextField
                    fullWidth
                    label="Date of Birth"
                    type="date"
                    variant="outlined"
                    disabled={signupDisabled}
                    onChange={(e) => setDob(e.target.value)}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    sx={{ mt: 2 }}
                  />
                  <TextField
                    fullWidth
                    label="Username"
                    variant="outlined"
                    placeholder="Enter Username"
                    disabled={signupDisabled}
                    onChange={(e) => setUsername(e.target.value)}
                    sx={{ mt: 2 }}
                  />
                  <TextField
                    fullWidth
                    label="Password"
                    variant="outlined"
                    type="password"
                    placeholder="Enter Password"
                    disabled={signupDisabled}
                    onChange={(e) => setPassword(e.target.value)}
                    sx={{ mt: 2 }}
                  />
                  <TextField
                    fullWidth
                    label="Confirm Password"
                    variant="outlined"
                    type="password"
                    placeholder="Confirm Password"
                    disabled={signupDisabled}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    sx={{ mt: 1 }}
                  />
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={handleCreateAccount}
                    disabled={signupDisabled}
                    sx={{ mt: 3 }}
                  >
                    Create Account
                  </Button>
                </form>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <ToastContainer />
    </div>
  );
}
