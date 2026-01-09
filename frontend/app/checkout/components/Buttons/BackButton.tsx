"use client";

import Link from "next/link";
import { ArrowBack } from "@mui/icons-material";
import { Button } from "@mui/material";

export default function BackButton() {
  return (
    <Button
      component={Link}
      href="/cart"
      startIcon={<ArrowBack />}
      sx={{
        mb: 4,
        textTransform: "none",
      }}
    >
      Back to cart
    </Button>
  );
}
