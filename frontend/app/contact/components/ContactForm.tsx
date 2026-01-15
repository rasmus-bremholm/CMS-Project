"use client";

import {
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import ContactInformation from "./ContactInformation";

export default function ContactForm() {
  return (
    <Grid container spacing={6}>
      <Grid size={{ xs: 12, md: 7 }}>
        <Paper
          elevation={0}
          sx={{
            p: { xs: 3, md: 4 },
            borderRadius: 3,
            border: "1px solid",
            borderColor: "brand.silver",
            bgcolor: "background.default",
          }}
        >
          <Typography variant="h5" fontWeight={600} mb={3}>
            Send us a Message
          </Typography>

          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField fullWidth label="Name" />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField fullWidth label="Email" />
            </Grid>

            <Grid size={{ xs: 12 }}>
              <TextField fullWidth label="Subject" />
            </Grid>

            <Grid size={{ xs: 12 }}>
              <TextField fullWidth multiline rows={4} label="Message" />
            </Grid>

            <Grid size={{ xs: 12 }}>
              <Button
                variant="contained"
                fullWidth
                sx={{
                  mt: 2,
                  px: 4,
                  textTransform: "none",
                  bgcolor: "brand.latte",
                  color: "text.secondary",
                  fontWeight: "600",
                }}
              >
                Send Message
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>

      <ContactInformation />
    </Grid>
  );
}
