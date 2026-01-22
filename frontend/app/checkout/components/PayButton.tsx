"use client";

import { Button } from "@mui/material";

type PayButtonProps = {
  total: number;
  label: string;
};

export default function PayButton({ total, label }: PayButtonProps) {
  return (
    <>
      <Button
        type="submit"
        href="/"
        variant="contained"
        size="large"
        fullWidth
        sx={{
          mt: 3,
          bgcolor: "brand.coffeeBean",
        }}
      >
        {label} {total.toFixed(2)}
      </Button>
    </>
  );
}
