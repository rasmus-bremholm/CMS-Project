"use client";

import Link from "next/link";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import AddToCartButton from "./AddToCartButton";

//types
import { Product } from "@/types/product";

interface Props {
  product: Product;
}

export const PopularProductCard = ({ product }: Props) => {
  return (
    <Card
      sx={{
        backgroundColor: "brand.silver",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
      <Link href={`product-details/${product.slug}`}>
        <CardMedia
          component="img"
          height="250"
          image={product.imageUrl}
          alt={product.title}
          sx={{ objectFit: "cover" }}
        />
      </Link>

      <CardContent
        sx={{ display: "flex", flexDirection: "column", flexGrow: 1, gap: 1 }}
      >
        <Typography
          variant="h6"
          component={Link}
          href={`product-details/${product.slug}`}
          sx={{
            color: "inherit",
            fontWeight: "semi-bold",
            textDecoration: "none",
            "&:hover": { color: "brand.darkCoffee" },
          }}
        >
          {product.title}
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="body1" color="primary" fontWeight="bold">
            {product.price} kr
          </Typography>
          <AddToCartButton />
        </Box>
      </CardContent>
    </Card>
  );
};
