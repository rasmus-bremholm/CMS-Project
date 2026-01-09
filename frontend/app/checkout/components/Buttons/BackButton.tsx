"use client";

import { ArrowBack } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";

type BackButtonProps = {
  label: string;
};

export default function BackButton({ label = "Back", ...props }: BackButtonProps) {
  const router = useRouter();

  return (
    <Button
      onClick={() => router.back()}
      startIcon={<ArrowBack />}
      sx={{
        textTransform: "none",
      }}
      {...props}
    >
      {label}
    </Button>
  );
}
