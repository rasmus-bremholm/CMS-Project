"use client";

import { Card, CardContent, Stack, TextField, Typography } from "@mui/material";

export default function ContactCard({ data }: { data?: any }) {
  const contact = data?.contact;

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" fontWeight={600} mb={2}>
          {contact?.title ?? ""}
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
