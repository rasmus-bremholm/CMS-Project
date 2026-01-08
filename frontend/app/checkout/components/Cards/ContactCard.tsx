"use client";

import { Card, CardContent, Stack, TextField, Typography } from "@mui/material";

export default function ContactCard() {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" fontWeight={600} mb={2}>
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
  );
}
