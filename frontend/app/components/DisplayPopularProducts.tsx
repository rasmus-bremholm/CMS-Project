"use client";

import { useState } from "react";
import { alpha, Box, Button, Grid } from "@mui/material";
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

  const activeProducts = category === "coffee" ? coffeeProducts : teaProducts;

  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "center", gap: "2em" }}>
        <Button
          sx={{
            backgroundColor:
              category === "coffee"
                ? "brand.darkCoffee"
                : (theme) => alpha(theme.palette.brand.darkCoffee, 0.4),
            color: "brand.whiteSmoke",
						px: 3,
            "&:hover": {
              backgroundColor: (theme) =>
                alpha(theme.palette.brand.darkCoffee, 0.75),
            },
          }}
          onClick={() => setCategory("coffee")}
        >
          Kaffe
        </Button>
        <Button
          sx={{
            backgroundColor:
              category === "tea"
                ? "brand.darkCoffee"
                : (theme) => alpha(theme.palette.brand.darkCoffee, 0.4),
            color: "brand.whiteSmoke",
						px: 3,
            "&:hover": {
              backgroundColor: (theme) =>
                alpha(theme.palette.brand.darkCoffee, 0.75),
            },
          }}
          onClick={() => setCategory("tea")}
        >
          Te
        </Button>
      </Box>
      <Grid container spacing={3}>
        {activeProducts.map((product) => (
          <PopularProductCard product={product} key={product.id} />
        ))}
      </Grid>
    </Box>
  );
};
