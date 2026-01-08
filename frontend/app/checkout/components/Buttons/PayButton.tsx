"use client";

import { Button } from "@mui/material";

export default function PayButton() {
  return (
    <>
      <Button
        type="submit"
        variant="contained"
        size="large"
        fullWidth
        sx={{
          mt: 3,
        }}
      ></Button>
    </>
  );
}
