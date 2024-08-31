import { Card, CardContent, CardMedia, Typography, Box, colors } from '@mui/material';
import { styled } from '@mui/system';
import StarIcon from '@mui/icons-material/Star';
import { Link } from "react-router-dom";

const StyledCard = styled(Card)({
  maxWidth: 250,
  margin: 'auto',
  // backgroundColor: '#f0f0f0', // Change the background color of the card
});

const StyledMedia = styled(CardMedia)({
  height: 200,
});

const NameContainer = styled('div')({
  textAlign: 'center', // Center align the product name
});

const StarContainer = styled(Box)({
  marginBottom: '5px',
  display: 'flex',
  justifyContent: 'center',
  color: '#9065b4',
});

const PriceContainer = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: 10,
});

const MrpText = styled(Typography)({
  textDecoration: 'line-through',
  color: 'red',
});

export default function FeatureProductCard({ productId, productName, productPhoto, mrp, price }) {
  return (
    <StyledCard>
      <CardContent>
        <NameContainer>
          <Typography variant="h6">
            {productName}
          </Typography>
          <StarContainer>
          {[1, 2, 3, 4, 5].map((index) => (
            <StarIcon key={index} />
          ))}
        </StarContainer>
        </NameContainer>
        <Link to={`/product-details/${productId}`}>
        <StyledMedia
          image={productPhoto}
          title={productName}
          sx={{
            transition: "transform 0.3s ease-in-out",
            "&:hover": {
              transform: "scale(1.1)",
            },
          }}
        />
        </Link>
        <PriceContainer>
          <MrpText variant="body1">
            <span style={{ color: "black" }}>Price: </span>₹{mrp}
          </MrpText>
          <Typography variant="body1">
            <strong>₹{price}</strong>
          </Typography>
        </PriceContainer>
      </CardContent>
    </StyledCard>
  );
}
