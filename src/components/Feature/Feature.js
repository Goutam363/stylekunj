import "./Feature.css";
import FeatureItem from "./FeatureItem";
import { Grid, Container } from "@mui/material";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import SyncAltIcon from "@mui/icons-material/SyncAlt";
import SupportIcon from "@mui/icons-material/Support";
export default function Feature() {
  return (
      <div className="feature" style={{marginTop: "2rem", marginBottom: "2rem"}}>
        <Container maxWidth="xl">
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} lg={3}>
              <FeatureItem
                icon={<CreditCardIcon />}
                heading="Secure Payment"
                content="Lorem ipsum dolor sit amet consectetur elit"
              />
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <FeatureItem
                icon={<LocalShippingIcon />}
                heading="Worldwide Delivery"
                content="Lorem ipsum dolor sit amet consectetur elit"
              />
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <FeatureItem
                icon={<SyncAltIcon />}
                heading="90 Days Return"
                content="Lorem ipsum dolor sit amet consectetur elit"
              />
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <FeatureItem
                icon={<SupportIcon />}
                heading="24/7 Support"
                content="Lorem ipsum dolor sit amet consectetur elit"
              />
            </Grid>
          </Grid>
        </Container>
      </div>
  );
}
