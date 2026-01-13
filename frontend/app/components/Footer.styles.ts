"use client";
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";

export const FooterText = styled(Typography)(({ theme }) => ({
  fontSize: "0.7rem",
  color: theme.palette.brand.whiteSmoke,
}));
export const FooterTitle = styled(Typography)(({ theme }) => ({
  fontSize: "0.8rem",
  fontWeight: "bold",
  marginBottom: theme.spacing(1),
  color: theme.palette.brand.whiteSmoke,
}));
