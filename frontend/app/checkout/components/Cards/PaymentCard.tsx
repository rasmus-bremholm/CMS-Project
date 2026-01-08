"use client";

import { CreditCard } from "@mui/icons-material";
import { Card, CardContent, Grid, Stack, TextField, Typography } from "@mui/material";

export default function PaymentCard() {
  return (
    <Card>
      <CardContent>
        <Stack direction="row" alignItems="center" spacing={1} mb={2}>
          <CreditCard color="primary" />
          <Typography variant="h6" fontWeight={600}>
            Payment
          </Typography>
        </Stack>

        <Stack spacing={2}>
          <TextField
            label="Card number"
            required
            placeholder="1234 5678 9012 3456"
            fullWidth
          ></TextField>

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
