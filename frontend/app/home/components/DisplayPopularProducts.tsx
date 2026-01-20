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

  const buttonStyles = (isActive: boolean) => ({
    backgroundColor: isActive
      ? "brand.darkCoffee"
      : theme => alpha(theme.palette.brand.darkCoffee, 0.4),
    color: "brand.whiteSmoke",
    minWidth: "6rem",
    px: 3,
    "&:hover": {
      backgroundColor: theme => alpha(theme.palette.brand.darkCoffee, 0.75),
    },
  });

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 4, px: 2 }}>
      <Box sx={{ display: "flex", justifyContent: "center", gap: "2em" }}>
        <Button
          sx={buttonStyles(category === "coffee")}
          onClick={() => setCategory("coffee")}
        >
          Kaffe
        </Button>
        <Button
          sx={buttonStyles(category === "tea")}
          onClick={() => setCategory("tea")}
        >
          Te
        </Button>
      </Box>
      <Grid
        container
        spacing={3}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        {activeProducts.map(product => (
          <Grid
            key={product.id}
            size={{ xs: 10, sm: 6, md: 4 }}
            sx={{ display: "flex" }}
          >
            <PopularProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
