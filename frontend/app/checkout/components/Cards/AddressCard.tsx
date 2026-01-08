"use client";

import { LocalShipping } from "@mui/icons-material";
import { Card, CardContent, Grid, Stack, TextField, Typography } from "@mui/material";

export default function AddressCard() {
  return (
    <Card>
      <CardContent>
        <Stack direction="row" alignItems="center" spacing={1} mb={2}>
          <LocalShipping color="primary" />
          <Typography variant="h6" fontWeight={600} mb={2}>
            Shipping Address
          </Typography>
        </Stack>

        <Stack spacing={2}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField label="First Name" required fullWidth />
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField label="Last Name" required fullWidth />
            </Grid>
          </Grid>

          <TextField label="Address" required placeholder="Street Address" fullWidth />

          <Grid container spacing={2}>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField label="City" required fullWidth />
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField label="State" required fullWidth />
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField label="ZIP Code" required fullWidth />
            </Grid>
          </Grid>
        </Stack>
      </CardContent>
    </Card>
  );
}
