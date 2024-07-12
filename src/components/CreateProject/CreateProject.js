import { useState, useContext } from "react";
import Gear from "../GearAnimation/Gear";
import {
  Container,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
} from "@mui/material";
import { AuthContext } from "../AuthProvider";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FetchProjects } from "../Controller";
export default function CreateProject() {
  const { username, tokenContext, loggedin, setProjectsContext } = useContext(AuthContext);

  const [projectName, setProjectName] = useState("");
  const [emailid, setEmailid] = useState("");
  const [mobile, setMobile] = useState("");
  const [userCountry, setUserCountry] = useState("");
  const [userState, setUserState] = useState("");
  const [userCity, setUserCity] = useState("");
  const [userHouseNo, setUserHouseNo] = useState("");
  const [userZipcode, setUserZipcode] = useState("");

  const [createDisabled, setCreateDisabled] = useState(false);

  const navigate = useNavigate();

  // Regex patterns for validation
  const projectNameRegex = /^[a-zA-Z\s]{4,40}$/;
  const mobileRegex = /^[\d\+\-]{4,22}$/;
  const emailRegex = /^[^\s@]{1,50}@[^\s@]{1,50}\.[^\s@]{2,50}$/;
  const zipcodeRegex = /^\d{6}$/;
  const houseNoRegex = /^[A-Za-z0-9\/,\-\s]{1,30}$/;
  const cityRegex = /^[a-zA-Z\s]{4,40}$/;
  const stateRegex = /^[a-zA-Z\s]{4,40}$/;

  const countries = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo",
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Democratic Republic of the Congo",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "East Timor (Timor-Leste)",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Ivory Coast",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Kosovo",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Myanmar (Burma)",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "North Korea",
    "North Macedonia",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Palestine",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Romania",
    "Russia",
    "Rwanda",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Korea",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Togo",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Vatican City",
    "Venezuela",
    "Vietnam",
    "Yemen",
    "Zambia",
    "Zimbabwe",
  ];

  const handleUserCountryChange = (e) => {
    setUserCountry(e.target.value);
  };

  const validate = () => {
    if (!projectNameRegex.test(projectName)) {
      toast.warn(
        "Project Name should be in a-z or A-Z and 4-40 character long",
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
        }
      );
      return false;
    }
    if (!mobileRegex.test(mobile)) {
      toast.warn("Enter valid mobile No", {
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
      return false;
    }
    if (!emailRegex.test(emailid)) {
      toast.warn("Enter valid email id", {
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
      return false;
    }
    if (!zipcodeRegex.test(userZipcode)) {
      toast.warn("Enter valid Pin code", {
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
      return false;
    }
    if (!houseNoRegex.test(userHouseNo)) {
      toast.warn(
        "House No should be in a-z, A-Z, 0-9, or in '-' '/' ',' and 30 character long",
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
        }
      );
      return false;
    }
    if (!cityRegex.test(userCity)) {
      toast.warn("City should be in a-z or A-Z and 4-40 character long", {
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
      return false;
    }
    if (!stateRegex.test(userState)) {
      toast.warn("State should be in a-z or A-Z and 4-40 character long", {
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
      return false;
    }
    return true;
  };

  const handleCreateProject = async () => {
    setCreateDisabled(true);
    if (validate()) {
        try {
          const address =
            userCountry +
            "|" +
            userState +
            "|" +
            userCity +
            "|" +
            userHouseNo +
            "|" +
            userZipcode;
          await axios.post(
            `${process.env.REACT_APP_EWABEY_BACKEND_URL}/project`,
            {
              username: username,
              project_name: projectName,
              email: emailid,
              mobile,
              address,
            },
            {
              headers: {
                Authorization: `Bearer ${tokenContext}`,
              },
            }
          );
          await FetchProjects(loggedin, setProjectsContext, tokenContext);
          // Push the home page into the browsing history
          window.history.pushState({ page: "home" }, "", "/");
          toast.success(
            "Project Created Successfully! Our executive will contact you very soon...",
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
                navigate("/projects");
              },
            }
          );
        } catch (error) {
          if (error.code === "ERR_NETWORK") {
            setCreateDisabled(false);
            toast.warn("Check your internet connection!", {
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
            return;
          } else {
            setCreateDisabled(false);
            toast.error(
              `Something went wrong! error code "${error.code}". Please contact to ewabey team.`,
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
              }
            );
            return;
          }
        }
    } else {
      setCreateDisabled(false);
      return;
    }
  };

  return (
    <div>
      <Gear />
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "5rem",
          marginBottom: "3rem",
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
                    label="Project Name"
                    variant="outlined"
                    placeholder="Enter Project Name"
                    onChange={(e) => setProjectName(e.target.value)}
                    sx={{ mb: 2 }}
                  />
                  <Grid container spacing={2} sx={{ mb: 2 }}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Email Address"
                        variant="outlined"
                        placeholder="Enter Email"
                        onChange={(e) => setEmailid(e.target.value)}
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
                  <Typography variant="h7" align="left" gutterBottom>
                    Address
                  </Typography>
                  <FormControl fullWidth sx={{ mt: 0.5 }}>
                    <InputLabel id="state-label">Country</InputLabel>
                    <Select
                      labelId="state-label"
                      id="state"
                      value={userCountry}
                      onChange={handleUserCountryChange}
                    >
                      <MenuItem value="">
                        <em>Select Country</em>
                      </MenuItem>
                      {countries.map((country, index) => (
                        <MenuItem key={index} value={country}>
                          {country}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  <TextField
                    fullWidth
                    label="State"
                    variant="outlined"
                    placeholder="Enter State"
                    onChange={(e) => setUserState(e.target.value)}
                    sx={{ mt: 1 }}
                  />
                  <TextField
                    fullWidth
                    label="City"
                    variant="outlined"
                    placeholder="Enter City"
                    onChange={(e) => setUserCity(e.target.value)}
                    sx={{ mt: 1 }}
                  />
                  <TextField
                    fullWidth
                    label="Houser No"
                    variant="outlined"
                    placeholder="Enter House No or Landmark"
                    onChange={(e) => setUserHouseNo(e.target.value)}
                    sx={{ mt: 1 }}
                  />
                  <TextField
                    fullWidth
                    label="Zip Code"
                    variant="outlined"
                    placeholder="Enter Zip Code"
                    onChange={(e) => setUserZipcode(e.target.value)}
                    sx={{ mt: 1 }}
                  />
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={handleCreateProject}
                    disabled={createDisabled}
                    sx={{ mt: 3 }}
                  >
                    Create Project
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
