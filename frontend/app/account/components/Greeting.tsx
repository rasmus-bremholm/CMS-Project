"use client";
import { useLanguage } from "@/app/context/LanguageContext";
import { Typography } from "@mui/material";
import { AccountPageLocale } from "../lib/AccountDashBoard";

export default function Greeting({ user }) {
  const currentLocale = useLanguage().locale;
  return (
    <Typography variant="h1">
      {AccountPageLocale.greeting[currentLocale]} {user.firstName}
    </Typography>
  );
}
