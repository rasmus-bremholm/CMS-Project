"use client";

import { Box, Card, CardContent, Divider, Stack, Typography } from "@mui/material";
import PayButton from "./Buttons/PayButton";

export default function OrderSummary() {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" fontWeight={600} mb={2}>
          Order Summary
        </Typography>

        <Stack spacing={1.5} mb={2}>
          <Box key={1} display="flex" justifyContent="space-between">
            <Typography variant="body2" color="text.secondary">
              Item 1
            </Typography>
            <Typography variant="body2">$ Item 1</Typography>
          </Box>
        </Stack>

        <Divider sx={{ my: 2 }} />

        <Stack spacing={1}>
          <Box display="flex" justifyContent="space-between">
            <Typography color="text.secondary">Subtotal</Typography>
            <Typography>$total</Typography>
          </Box>

          <Box display="flex" justifyContent="space-between">
            <Typography color="text.secondary">Shipping</Typography>
            <Typography>Shipping cost</Typography>
          </Box>

          <Divider />

          <Box display="flex" justifyContent="space-between">
            <Typography fontWeight={600}>Total</Typography>
            <Typography fontWeight={600}>Final cost</Typography>
          </Box>
        </Stack>

        <PayButton />
      </CardContent>
    </Card>
  );
}
