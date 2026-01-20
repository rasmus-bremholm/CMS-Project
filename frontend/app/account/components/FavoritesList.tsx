"use client";
import { Box, Typography, Divider } from "@mui/material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { Favorite } from "@/types/favorite";
import { useLanguage } from "@/app/context/LanguageContext";
import { FavoritesLocale } from "../lib/AccountDashBoard";
import Image from "next/image";
import Link from "next/link";

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
            <Box
              key={favorite.id}
              sx={{
                borderRadius: 2,
                p: 2,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                bgcolor: "brand.whiteSmoke",
                position: "relative",
                overflow: "hidden",
                "& img": {
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.1)",
                  },
                },
              }}
            >
              <FavoriteBorderOutlinedIcon
                sx={{ position: "absolute", top: 12, right: 12 }}
              />
              <Link href={favorite.product.slug}>
                <Image
                  src={`http://localhost:1337${favorite.product.img.formats.thumbnail.url}`}
                  width={favorite.product.img.formats.thumbnail.width}
                  height={favorite.product.img.formats.thumbnail.height}
                  alt={
                    favorite.product.img.alternativeText
                      ? favorite.product.img.alternativeText
                      : ""
                  }
                />
              </Link>

              <Typography>{favorite.product.title}</Typography>
            </Box>
          ))
        : null}
    </Box>
  );
}
