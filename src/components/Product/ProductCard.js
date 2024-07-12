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
        <Typography variant="h6" gutterBottom>
          {productName}
        </Typography>
        <Link to={`/product-details/${productId}`}>
          <StyledMedia
            image={productPhoto}
            title={productName}
          />
        </Link>
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
  )
}
