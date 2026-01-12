"use client";

import { useState } from "react";
import { Box, Button, Grid } from "@mui/material";

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
      <Box>
        <Button>Kaffe</Button>
        <Button>Te</Button>
      </Box>
      <Grid></Grid>
    </Box>
  );
};
