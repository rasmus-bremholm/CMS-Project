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

	const activeProducts = category === "coffee" ? coffeeProducts : teaProducts

  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button onClick={() => setCategory("coffee")}>Kaffe</Button>
        <Button onClick={() => setCategory("tea")}>Te</Button>
      </Box>
      <Grid container spacing={3}>
        {activeProducts.map((product) => (
          <PopularProductCard product={product} key={product.id} />
        ))}
      </Grid>
    </Box>
  );
};
