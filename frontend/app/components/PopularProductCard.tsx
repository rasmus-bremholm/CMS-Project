"use client";

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
      <CardMedia
        component="img"
        height="250"
        image={product.imageUrl}
        alt={product.title}
        sx={{ objectFit: "cover" }}
      />

      <CardContent sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1, gap: 1 }}>
        <Typography variant="h6" component="h3" fontWeight="bold">
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
