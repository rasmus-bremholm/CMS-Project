"use client";

import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    brand: {
      whiteSmoke: string;
      silver: string;
      coffeeBean: string;
      darkCoffee: string;
      carbonBlack: string;
      latte: string;
    };
  }
  interface PaletteOptions {
    brand?: {
      whiteSmoke: string;
      silver: string;
      coffeeBean: string;
      darkCoffee: string;
      carbonBlack: string;
      latte: string;
    };
  }
}

export const theme = createTheme({
  palette: {
    brand: {
      whiteSmoke: "#f5f5f5",
      silver: "#c4bbaf",
      coffeeBean: "#7f5539",
      darkCoffee: "#432818",
      carbonBlack: "#222323",
      latte: "#CEC5BA",
    },
    primary: {
      main: "#1a1a1a",
    },
    background: {
      default: "#fafafa",
    },
    text: {
      primary: "#222323",
      secondary: "#432818",
      disabled: "#4a4a4aff",
    },
  },
  typography: {
    fontFamily: "var(--font-inter), sans-serif",
    h1: {
      fontFamily: "var(--font-merriweather), serif",
      fontWeight: 700,
      lineHeight: 1.15,
    },
    h2: {
      fontFamily: "var(--font-merriweather), serif",
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h3: { fontFamily: "var(--font-merriweather), serif", fontWeight: 400 },
  },
});
