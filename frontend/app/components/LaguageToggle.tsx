"use client";

import { Button } from "@mui/material";
import { useLanguage } from "../context/LanguageContext";

export default function LanguageToggle() {
  const { locale, toggleLanguage } = useLanguage();

  return (
    <Button
      variant="outlined"
      onClick={toggleLanguage}
      sx={{
        textTransform: "uppercase",
        borderColor: "brand.coffeeBean",
        color: "brand.coffeeBean",
      }}
    >
      {locale === "sv" ? "EN" : "SV"}
    </Button>
  );
}
