"use client";

import { Stack, Typography } from "@mui/material";
import { useLanguage } from "../context/LanguageContext";

export default function LanguageToggle() {
  const { locale, setLocale } = useLanguage();

  return (
    <Stack
      direction="row"
      alignItems="center"
      spacing={1}
      sx={{
        cursor: "pointer",
      }}
    >
      <Typography
        variant="navLink"
        onClick={() => setLocale("sv")}
        sx={{
          fontWeight: locale === "sv" ? 600 : 400,
          color: locale === "sv" ? "brand.darkCoffee" : "text.disabled",
          transition: "color 0.2s ease",
        }}
      >
        SV
      </Typography>

      <Typography
        variant="navLink"
        onClick={() => setLocale("en")}
        sx={{
          fontWeight: locale === "en" ? 600 : 400,
          color: locale === "en" ? "brand.darkCoffee" : "text.disabled",
          transition: "color 0.2s ease",
        }}
      >
        EN
      </Typography>
    </Stack>
  );
}
