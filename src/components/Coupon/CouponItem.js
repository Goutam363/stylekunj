import { Card, CardContent, CardHeader, Typography, IconButton, Tooltip } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
export default function CouponItem({ couponCode, couponDescription }) {

    const handleCopyToClipboard = () => {
        navigator.clipboard.writeText(couponCode).then(() => {
          alert("Coupon code copied to clipboard!");
        }).catch(err => {
          console.error("Failed to copy coupon code: ", err);
        });
      };

  return (
    <Card sx={{ mt: 3, borderRadius: 2, top: "30px" }}>
      <CardHeader
        title={
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {couponCode}
            <Tooltip title="Copy to clipboard">
              <IconButton onClick={handleCopyToClipboard} sx={{ ml: 1 }}>
                <ContentCopyIcon />
              </IconButton>
            </Tooltip>
          </div>
        }
      />
      <CardContent>
        <Typography variant="body1"><strong>{couponDescription}</strong></Typography>
      </CardContent>
    </Card>
  )
}
