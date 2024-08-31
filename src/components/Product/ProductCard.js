import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { Link } from "react-router-dom";

const StyledCard = styled(Card)({
    maxWidth: 300,
    margin: 'auto',
  });
  
  const StyledMedia = styled(CardMedia)({
    height: 200,
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

export default function ProductCard({ productId, productName, productPhoto, mrp, price }) {
  return (
    <StyledCard>
      <CardContent>
        <Typography variant="h6" sx={{ textAlign: "center" }} gutterBottom>
          {productName}
        </Typography>
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
  )
}
