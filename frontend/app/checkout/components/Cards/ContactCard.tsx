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
            label={contact?.email ?? ""}
            type="email"
            required
            placeholder={contact?.email_placeholder ?? ""}
            fullWidth
          />
          <TextField
            label={contact?.phone ?? ""}
            type="tel"
            required
            placeholder={contact?.phone_placeholder ?? ""}
            fullWidth
          />
        </Stack>
      </CardContent>
    </Card>
  );
}
