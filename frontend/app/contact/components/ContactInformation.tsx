"use client";

import {
  EmailOutlined,
  LocationOnOutlined,
  PhoneOutlined,
} from "@mui/icons-material";
import { Box, Grid, Stack, Typography } from "@mui/material";

export default function ContactInformation() {
  return (
    <Grid size={{ xs: 12, md: 5 }}>
      <Typography variant="h5" mb={2}>
        Contact Information
      </Typography>

      <Typography color="text.secondary" mb={4}>
        Drop by, give us a call, or send an email. We’re always happy to chat
        about coffee, answer questions, or help with your order.
      </Typography>

      <Stack spacing={3}>
        <Box display="flex" gap={2}>
          <Box
            sx={{
              width: 44,
              height: 44,
              borderRadius: "50%",
              bgcolor: "brand.latte",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <LocationOnOutlined />
          </Box>
          <Box>
            <Typography fontWeight={600}>Visit Us</Typography>
            <Typography color="text.secondary">123 Coffee Lane</Typography>
            <Typography color="text.secondary">Göteborg, Sweden</Typography>
          </Box>
        </Box>

        <Box display="flex" gap={2}>
          <Box
            sx={{
              width: 44,
              height: 44,
              borderRadius: "50%",
              bgcolor: "#f4ebe3",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <PhoneOutlined />
          </Box>
          <Box>
            <Typography fontWeight={600}>Call Us</Typography>
            <Typography color="text.secondary">123 456 789</Typography>
          </Box>
        </Box>

        <Box display="flex" gap={2}>
          <Box
            sx={{
              width: 44,
              height: 44,
              borderRadius: "50%",
              bgcolor: "#f4ebe3",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <EmailOutlined />
          </Box>
          <Box>
            <Typography fontWeight={600}>Email Us</Typography>
            <Typography color="text.secondary">hello@coffetime.com</Typography>
          </Box>
        </Box>
      </Stack>
    </Grid>
  );
}
