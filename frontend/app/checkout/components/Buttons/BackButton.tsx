"use client";

import { Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function BackButton() {
  return (
    <>
      <Button
        variant="contained"
        sx={{
          gap: 1,
          background: "none",
          boxShadow: "none",
          textTransform: "none",
          px: 3,
        }}
      >
        <ArrowBackIcon /> Back to cart
      </Button>
    </>
  );
}
