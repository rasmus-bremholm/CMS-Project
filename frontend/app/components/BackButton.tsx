"use client";

import { ArrowBack } from "@mui/icons-material";
import { Button, CircularProgress } from "@mui/material";
import { useRouter } from "next/navigation";
import { getBackButtonData } from "../lib/utils/strapi";
import { useLanguage } from "../context/LanguageContext";
import { useEffect, useState } from "react";

export default function BackButton() {
  const router = useRouter();
  const { locale } = useLanguage();

  const [label, setLabel] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getBackButtonData(locale)
      .then(data => {
        setLabel(data.label ?? "Back");
      })
      .finally(() => setLoading(false));
  }, [locale]);

  return (
    <Button
      onClick={() => router.back()}
      startIcon={<ArrowBack />}
      sx={{
        textTransform: "none",
      }}
    >
      {loading ? <CircularProgress /> : label}
    </Button>
  );
}
