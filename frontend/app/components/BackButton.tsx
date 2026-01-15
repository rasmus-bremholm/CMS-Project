"use client";

import { ArrowBack } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <Button
      onClick={() => router.back()}
      startIcon={<ArrowBack />}
      sx={{
        textTransform: "none",
      }}
    >
      Back
    </Button>
  );
}
