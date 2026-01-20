"use client";

import { Button, Grid, Paper, TextField, Typography } from "@mui/material";
import ContactInformation from "./ContactInformation";
import { useLanguage } from "@/app/context/LanguageContext";
import { useEffect, useState } from "react";
import { getContactpageData } from "@/app/lib/utils/strapi";

export default function ContactForm({ data }: { data?: any }) {
  const { locale } = useLanguage();
  const [contactPage, setContactPage] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const contactForm = data?.contact_form;

  useEffect(() => {
    setLoading(true);
    getContactpageData(locale)
      .then(data => setContactPage(data))
      .finally(() => setLoading(false));
  }, [locale]);

  if (loading) return <div>Loading...</div>;
  if (!contactPage) return <div>No content available</div>;

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
            {contactForm?.title ?? ""}
          </Typography>

          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 6 }}>
              <label>
                {contactForm?.name_label ?? ""}
                <TextField
                  fullWidth
                  placeholder={contactForm?.name_placeholder ?? ""}
                />
              </label>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <label>
                {contactForm?.email_label ?? ""}
                <TextField fullWidth placeholder={contactForm?.email ?? ""} />
              </label>
            </Grid>

            <Grid size={{ xs: 12 }}>
              <label>
                {contactForm?.subject_label ?? ""}
                <TextField
                  fullWidth
                  placeholder={contactForm?.subject_placeholder ?? ""}
                />
              </label>
            </Grid>

            <Grid size={{ xs: 12 }}>
              <label>
                {contactForm?.message_label ?? ""}
                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  placeholder={contactForm?.message_placeholder ?? ""}
                />
              </label>
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
                {contactForm?.button_label ?? ""}
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>

      <ContactInformation data={contactPage} />
    </Grid>
  );
}
