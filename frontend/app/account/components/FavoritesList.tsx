"use client";
import { Box, Typography, Divider } from "@mui/material";
import { Favorite } from "@/types/favorite";
import { useLanguage } from "@/app/context/LanguageContext";
import { FavoritesLocale } from "../lib/AccountDashBoard";
import Image from "next/image";

interface FavoritesListProps {
  favorites: Favorite[];
}

export default function FavoritesList({ favorites }: FavoritesListProps) {
  const currentLocale = useLanguage().locale;
  console.log(favorites);

  return (
    <Box sx={{ display: "flex", gap: 2 }}>
      {favorites
        ? favorites.map(favorite => (
            <Box key={favorite.id}>
              <Image
                src={`http://localhost:1337${favorite.product.img.formats.thumbnail.url}`}
                width={favorite.product.img.formats.thumbnail.width}
                height={favorite.product.img.formats.thumbnail.height}
                alt={favorite.product.img.alternativeText}
              />
              <Typography>{favorite.product.title}</Typography>
            </Box>
          ))
        : null}
    </Box>
  );
}
