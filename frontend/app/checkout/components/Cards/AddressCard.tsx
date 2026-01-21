"use client";

import { LocalShipping } from "@mui/icons-material";
import {
  Card,
  CardContent,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

export default function AddressCard({ data }: { data?: any }) {
  const adress = data?.adress;

  return (
    <Card>
      <CardContent>
        <Stack direction="row" alignItems="center" spacing={1} mb={2}>
          <LocalShipping sx={{ color: "brand.coffeeBean" }} />
          <Typography variant="h6" fontWeight={600}>
            {adress?.title ?? ""}
          </Typography>
        </Stack>

        <Stack spacing={2}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField label={adress?.first_name ?? ""} required fullWidth />
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField label={adress?.last_name ?? ""} required fullWidth />
            </Grid>
          </Grid>

          <TextField
            label={adress?.adress ?? ""}
            required
            placeholder={adress?.adress_placeholder ?? ""}
            fullWidth
          />

          <Grid container spacing={2}>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField label={adress?.city ?? ""} required fullWidth />
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField label={adress?.zip ?? ""} required fullWidth />
            </Grid>
          </Grid>
        </Stack>
      </CardContent>
    </Card>
  );
}
