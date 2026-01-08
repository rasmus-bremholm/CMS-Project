"use client";

import {
  Box,
  Card,
  CardContent,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

export default function ContactCard() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Grid container spacing={4}>
        <Stack spacing={4}>
          <Card>
            <CardContent>
              <Typography variant="h3" fontWeight={600} mb={2}>
                Contact Information
              </Typography>

              <Stack spacing={2}>
                <TextField
                  label="Email"
                  type="email"
                  required
                  placeholder="your@email.com"
                  fullWidth
                />
                <TextField
                  label="Phone"
                  type="tel"
                  required
                  placeholder="+46 00 00 000"
                  fullWidth
                />
              </Stack>
            </CardContent>
          </Card>
        </Stack>
      </Grid>
    </Box>
  );
}
