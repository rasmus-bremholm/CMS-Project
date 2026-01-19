"use client";
import { Box, Typography, Divider } from "@mui/material";
import { Product } from "@/types/product";
import { useLanguage } from "@/app/context/LanguageContext";
import { FavoritesLocale } from "../lib/AccountDashBoard";

interface FavoritesListProps {
  favorites: Product[];
}

export default function FavoritesList({ favorites }: FavoritesListProps) {
  //const currentLocale = useLanguage().locale;

  return (
    <Box sx={{ display: "flex", gap: 2 }}>
      {favorites
        ? favorites.map(favorite => <Box key={favorite.id}></Box>)
        : null}
    </Box>
  );
}
