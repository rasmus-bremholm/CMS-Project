"use client";

import { Button } from "@mui/material";

type PayButtonProps = {
  total: number;
};

export default function PayButton({ total }: PayButtonProps) {
  return (
    <>
      <Button
        type="submit"
        variant="contained"
        size="large"
        fullWidth
        sx={{
          mt: 3,
          bgcolor: "brand.coffeeBean",
        }}
      >
        Pay ${total.toFixed(2)}
      </Button>
    </>
  );
}
