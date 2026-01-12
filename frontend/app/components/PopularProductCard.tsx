"use client";

import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";

//types
import { Product } from "@/types/product";

interface Props {
  product: Product;
}

export const PopularProductCard = ({ product }: Props) => {
  return (
    <Card
      sx={{
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

      <CardContent sx={{ flexGrow: 1 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 1,
          }}
        >
          <Typography variant="h6" component="h3" fontWeight="bold">
            {product.title}
          </Typography>
        </Box>

        <Typography variant="body1" color="primary" fontWeight="bold">
          {product.price} kr
        </Typography>
      </CardContent>
    </Card>
  );
};
