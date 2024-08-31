import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../AuthProvider";
import axios from "axios";
import { Container, Grid, Card, CardContent, Typography, Avatar, Box } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function Profile() {
  const { username, profile, setProfile, tokenContext } = useContext(AuthContext);

  const [profileData, setProfileData] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      if (profile) {
        setProfileData(profile);
      } else {
        const token = tokenContext;
        try {
            // Make GET request to retrieve user profile data
            const profileResponse = await axios.get(
              `${process.env.REACT_APP_STYLEKUNJ_BACKEND_URL}/auth/${username}`,
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }
            );
            const userProfile = profileResponse.data;
            setProfile(userProfile);
            setProfileData(userProfile);
        } catch (error) {
            console.error("Error fetching profile data:", error);
        }
      }
    };
    fetchData();
  }, [profileData]);

  return(
    <Container maxWidth="sm" sx={{ mt: "5rem" }}>
      <Card sx={{ mt: 4, p: 2 }}>
        <CardContent>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Avatar sx={{ bgcolor: "#5c3a78", width: 80, height: 80 }}>
              <AccountCircleIcon sx={{ fontSize: 60 }} />
            </Avatar>
            <Typography variant="h4" sx={{ mt: 2 }}>
              {profileData?.name}
            </Typography>
            <Typography variant="body1" color="textSecondary">
              {profileData?.username}
            </Typography>
          </Box>
          <Grid container spacing={2} sx={{ mt: 2 }}>
            <Grid item xs={12}>
              <Typography variant="body1"><strong>Email:</strong> {profileData?.email}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1"><strong>Mobile:</strong> {profileData?.mobile}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1"><strong>Date of Birth:</strong> {profileData?.dob}</Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
}
