import { Card, CardContent, Grid, Typography, Box } from '@mui/material';
export default function InnerOrderItem({ orderDate, orderTime, productNmae, productQty, orderedPrice, productImage, productStatus }) {
    return (
        <Card sx={{ mt: 3, borderRadius: 2 }}>
        <Grid container spacing={0}>
          <Grid item xs={6}>
            <Box
              component="img"
              src={productImage}
              alt="Product"
              sx={{ width: '100%', objectFit: 'cover', mx: 1, my: 1 }}
            />
          </Grid>
          <Grid item xs={6}>
            <CardContent>
              <Typography variant="h5" component="div">
                {productNmae}
              </Typography>
              <Typography component="div">
                <Typography variant="body1" className="price">₹{orderedPrice}</Typography>
                <Typography variant="body1" className="qty">x({productQty})</Typography>
                <Typography variant="body1" className="timeStamp">{`${orderDate}, ${orderTime}`}</Typography>
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
        <Grid container justifyContent="center" sx={{ mx: 3, mb: 2 }}>
          <Grid item className="d-flex align-items-center col-md-auto">
            <Typography component="div" className="orderStatus">Status: {productStatus}</Typography>
          </Grid>
        </Grid>
      </Card>
    )
  }
  