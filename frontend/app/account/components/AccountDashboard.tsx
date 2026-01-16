"use client";
import { Box, Typography, Button } from "@mui/material";
import OrderList from "./OrderList";
import AdressList from "./AdressList";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { useState } from "react";

export default function AccountDashboard({ orders }) {
  const [tab, setTab] = useState("orders");

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
          Mina Beställningar
        </Button>
        <Button
          variant="contained"
          startIcon={<HomeOutlinedIcon />}
          onClick={() => setTab("shipping")}
        >
          Mina Adresser
        </Button>
        <Button
          variant="contained"
          startIcon={<FavoriteBorderOutlinedIcon />}
          onClick={() => setTab("favorites")}
        >
          Mina Favoriter
        </Button>

        <Button variant="outlined">Kundtjänst</Button>
        <Button variant="outlined">Logga ut</Button>
      </Box>
      <Box id="content" sx={{ flex: 2 }}>
        {tab === "orders" && <OrderList mockOrders={orders} />}
        {tab === "shipping" && <AdressList />}
      </Box>
    </>
  );
}
