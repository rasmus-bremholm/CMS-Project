"use client";
import { Box, Button } from "@mui/material";
import Link from "next/link";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { useState } from "react";
import { DashboardLocale } from "../lib/AccountDashBoard";
import { useLanguage } from "@/app/context/LanguageContext";

interface AccountDashboardProps {
  ordersContent: React.ReactNode;
  addressContent: React.ReactNode;
  favoritesContent: React.ReactNode;
}

export default function AccountDashboard({
  ordersContent,
  addressContent,
  favoritesContent,
}: AccountDashboardProps) {
  const [tab, setTab] = useState("orders");
  const currentLocale = useLanguage().locale;

  return (
    <>
      <Box
        id="aside menu"
        sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 2 }}
      >
        <Button
          variant="contained"
          startIcon={<Inventory2OutlinedIcon />}
          onClick={() => setTab("orders")}
        >
          {DashboardLocale.btnOrders[currentLocale]}
        </Button>
        <Button
          variant="contained"
          startIcon={<HomeOutlinedIcon />}
          onClick={() => setTab("shipping")}
        >
          {DashboardLocale.btnShipping[currentLocale]}
        </Button>
        <Button
          variant="contained"
          startIcon={<FavoriteBorderOutlinedIcon />}
          onClick={() => setTab("favorites")}
        >
          {DashboardLocale.btnFavorite[currentLocale]}
        </Button>

        <Button variant="outlined" LinkComponent={Link} href="/contact">
          {DashboardLocale.btnSupport[currentLocale]}
        </Button>
        <Button variant="outlined">
          {DashboardLocale.btnLogout[currentLocale]}
        </Button>
      </Box>
      <Box id="content" sx={{ flex: 2 }}>
        {tab === "orders" && ordersContent}
        {tab === "shipping" && addressContent}
        {tab === "favorites" && favoritesContent}
      </Box>
    </>
  );
}
