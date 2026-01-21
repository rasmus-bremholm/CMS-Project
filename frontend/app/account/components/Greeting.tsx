"use client";
import { useLanguage } from "@/app/context/LanguageContext";
import { Typography } from "@mui/material";
import { AccountPageLocale } from "../lib/AccountDashBoard";
import { User } from "@/types/user";

interface GreetingProps {
  user: User;
}

export default function Greeting({ user }: GreetingProps) {
  const currentLocale = useLanguage().locale;
  return (
    <Typography variant="h1">
      {AccountPageLocale.greeting[currentLocale]} {user.username}
    </Typography>
  );
}
