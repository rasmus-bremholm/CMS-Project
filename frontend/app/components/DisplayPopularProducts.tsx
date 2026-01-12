"use client";

import { useState } from "react";
import { Box, Button, Grid } from "@mui/material";
import { PopularProductCard } from "./PopularProductCard";

//types
import { Product } from "@/types/product";

interface Props {
  coffeeProducts: Product[];
  teaProducts: Product[];
}

export const DisplayPopularProducts = ({
  coffeeProducts,
  teaProducts,
}: Props) => {
  const [category, setCategory] = useState<"coffee" | "tea">("coffee");

  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button>Kaffe</Button>
        <Button>Te</Button>
      </Box>
      <Grid container spacing={3}>
        {coffeeProducts.map((product) => (
          <PopularProductCard product={product} key={product.id} />
        ))}
      </Grid>
    </Box>
  );
};
