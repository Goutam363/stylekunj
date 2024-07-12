// import "./FeaturedProduct.css";
import { Card, CardContent, CardMedia, Typography, Box, colors } from '@mui/material';
import { styled } from '@mui/system';
import StarIcon from '@mui/icons-material/Star';

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

export default function FeatureProductCard({ productName, productPhoto, mrp, price }) {
  return (
    <StyledCard>
      <CardContent>
        <NameContainer>
          <Typography variant="h6" gutterBottom>
            {productName}
          </Typography>
          <StarContainer>
          {[1, 2, 3, 4, 5].map((index) => (
            <StarIcon key={index} />
          ))}
        </StarContainer>
        </NameContainer>
        <StyledMedia
          image={productPhoto}
          title={productName}
        />
        <PriceContainer>
          <MrpText variant="body1">
            MRP: ${mrp}
          </MrpText>
          <Typography variant="body1">
            Price: ${price}
          </Typography>
        </PriceContainer>
      </CardContent>
    </StyledCard>
  );
}
