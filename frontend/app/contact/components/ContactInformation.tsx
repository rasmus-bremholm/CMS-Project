"use client";

import {
  EmailOutlined,
  LocationOnOutlined,
  PhoneOutlined,
} from "@mui/icons-material";
import { Box, Grid, Stack, Typography } from "@mui/material";

export default function ContactInformation({ data }: { data?: any }) {
  const contactInformation = data?.contact_information;

  return (
    <Grid size={{ xs: 12, md: 5 }}>
      <Box sx={{ p: { xs: 2, md: 3 }, borderRadius: 3, height: "100%" }}>
        <Typography variant="h5" fontWeight={600} mb={2}>
          {contactInformation?.title ?? ""}
        </Typography>

        <Typography color="text.secondary" mb={4}>
          {contactInformation?.subtitle ?? ""}
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
              <Typography fontWeight={600}>
                {contactInformation?.about.title ?? ""}
              </Typography>
              <Typography color="text.secondary">
                {contactInformation?.about.adress ?? ""}
              </Typography>
              <Typography color="text.secondary">
                {contactInformation?.about.location ?? ""}
              </Typography>
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
              <Typography fontWeight={600}>
                {contactInformation?.phone.title ?? ""}
              </Typography>
              <Typography color="text.secondary">
                {contactInformation?.phone.phone_number ?? ""}
              </Typography>
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
              <Typography fontWeight={600}>
                {contactInformation?.email.title ?? ""}
              </Typography>
              <Typography color="text.secondary">
                {contactInformation?.email.email ?? ""}
              </Typography>
            </Box>
          </Box>
        </Stack>
      </Box>
    </Grid>
  );
}
