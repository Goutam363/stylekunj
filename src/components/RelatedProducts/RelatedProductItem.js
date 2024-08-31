import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Box,
  Typography,
} from "@mui/material";
import "./RelatedProducts.css";

export default function RelatedProductItem({ product }) {
  const productImages = product.image.split("|");
  console.log(product.product_name);
  return (
    <Card sx={{ width: "100%", height: "100%" }}>
      {/* Product Name (Top) */}
      <CardHeader title={product.product_name} sx={{ textAlign: "center" }} />
      {/* Product Photo (Middle) */}
      <Box sx={{ position: "relative" }}>
        <Link to={`/product-details/${product.id}`}>
          <CardMedia
            component="img"
            image={productImages[0]}
            alt="Product Photo"
            sx={{
              width: "100%",
              height: "auto",
              transition: "transform 0.3s ease-in-out",
              "&:hover": {
                transform: "scale(1.1)",
              },
            }}
          />
        </Link>
      </Box>
      {/* MRP & Price (Bottom) */}
      <CardContent sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* MRP */}
        <Typography
          variant="body1"
          sx={{
            textDecoration: "line-through",
            color: "red",
            marginRight: "0.5rem",
          }}
        >
          <span style={{ color: "black" }}>Price: </span>₹{product.mrp}
        </Typography>
        {/* Price */}
        <Typography variant="body1"><strong>₹{product.price}</strong></Typography>
      </CardContent>
    </Card>
  );
}
