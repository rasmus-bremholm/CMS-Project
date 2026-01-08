"use client";

import Link from "next/link";
import { ArrowBack } from "@mui/icons-material";
import { Box } from "@mui/material";

export default function BackButton() {
  return (
    <Box
      component={Link}
      href="/cart"
      sx={{
        display: "inline-flex",
        alignItems: "center",
        mb: 4,
        color: "white",
        textDecoration: "none",
        "&:hover": { color: "text.primary" },
      }}
    >
      <ArrowBack fontSize="small" sx={{ mr: 1 }} /> Back to cart
    </Box>
  );
}
