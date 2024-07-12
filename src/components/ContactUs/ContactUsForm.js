import { useState } from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  TextField,
  TextareaAutosize,
  Button,
} from "@mui/material";

import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactUsForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [sendDisabled, setSendDisabled] = useState(false);

  // Regex patterns for validation
  const nameRegex = /^[a-zA-Z\s]{4,40}$/;
  const mobileRegex = /^[\d\+\-]{4,22}$/;
  const emailRegex = /^[^\s@]{1,50}@[^\s@]{1,50}\.[^\s@]{2,50}$/;
  const subjectRegex = /^[a-zA-Z\d\s!"'()*+,-./:;<=>?@[\\\]^_`{|}]{4,120}$/;
  const messageRegex = /^[a-zA-Z\d\s!"'()*+,-./:;<=>?@[\\\]^_`{|}]{4,4000}$/;

  const navigate = useNavigate();

  const validate = async () => {
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
          setSendDisabled(false);
        },
      });
      return false;
    }
    if (!emailRegex.test(email)) {
      toast.warn("Enter a valid email address", {
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
          setSendDisabled(false);
        },
      });
      return false;
    }
    if (!mobileRegex.test(mobile)) {
      toast.warn("Enter a valid mobile number", {
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
          setSendDisabled(false);
        },
      });
      return false;
    }
    if (!subjectRegex.test(subject)) {
      toast.warn(
        "Subject should be 4-120 characters long and should not contains special characters like '#', '$', '$'",
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
            setSendDisabled(false);
          },
        }
      );
      return false;
    }
    if (!messageRegex.test(message)) {
      toast.warn(
        "Message should be 4-4000 characters long and should not contains special characters like '#', '$', '$'",
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
            setSendDisabled(false);
          },
        }
      );
      return false;
    }
    return true;
  };

  const handleSend = async () => {
    setSendDisabled(true);
    const res = await validate();
    if (res) {
      try {
        await axios.post(`${process.env.REACT_APP_EWABEY_BACKEND_URL}/mail/contact-us`, {
          name,
          email,
          mobile,
          subject,
          message,
        });

        toast.success(
          "Message sent! Our support team will reach out to you very soon.",
          {
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
              navigate("/");
            },
          }
        );
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
              setSendDisabled(false);
            },
          });
        } else {
          toast.error(`Some error occured. Can't send message.`, {
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
              setSendDisabled(false);
            },
          });
        }
      }
    }
  };

  return (
    <div className="contactus-container">
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "7rem",
        }}
      >
        <Grid container justifyContent="center">
          <Grid item xs={12} md={6}>
            <Card
              sx={{
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
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Mobile Number with country code"
                        variant="outlined"
                        placeholder="Enter Mobile with country code"
                        onChange={(e) => setMobile(e.target.value)}
                      />
                    </Grid>
                  </Grid>
                  <TextField
                    fullWidth
                    label="Subject"
                    variant="outlined"
                    placeholder="Enter Subject"
                    onChange={(e) => setSubject(e.target.value)}
                    sx={{ mt: 2 }}
                  />
                  <TextareaAutosize
                    minRows={5}
                    maxRows={10}
                    aria-label="maximum height"
                    placeholder="Enter Message"
                    onChange={(e) => setMessage(e.target.value)}
                    style={{
                      width: "100%",
                      marginTop: "1rem",
                      resize: "vertical",
                    }}
                  />
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={handleSend}
                    disabled={sendDisabled}
                    sx={{ mt: 3 }}
                  >
                    Send
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
