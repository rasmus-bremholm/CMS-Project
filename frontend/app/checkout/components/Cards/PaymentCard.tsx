"use client";

import { CreditCard } from "@mui/icons-material";
import {
  Card,
  CardContent,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

export default function PaymentCard({ data }: { data?: any }) {
  const payment = data?.payment;

  return (
    <Card>
      <CardContent>
        <Stack direction="row" alignItems="center" spacing={1} mb={2}>
          <CreditCard sx={{ color: "brand.coffeeBean" }} />
          <Typography variant="h6" fontWeight={600}>
            {payment?.title ?? ""}
          </Typography>
        </Stack>

        <Stack spacing={2}>
          <TextField
            label="Card number"
            required
            placeholder="1234 5678 9012 3456"
            fullWidth
          />

          <Grid container spacing={2}>
            <Grid size={{ xs: 12, sm: 4 }}>
              <TextField label="CVV" required placeholder="123" fullWidth />
            </Grid>
          </Grid>
        </Stack>
      </CardContent>
    </Card>
  );
}
