"use client";

import { useState } from "react";
import { Stack } from "@mui/material";
import { QuantitySelector } from "../../components/QuantitySelector";
import AddToCartButton from "@/app/components/AddToCartButton";

export const ProductActions = ({ product }: { product: any }) => {
  const [quantity, setQuantity] = useState(1);

  const handleDecrease = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  const handleIncrease = () => setQuantity(prev => prev + 1);

  return (
    <Stack direction="row" spacing={2}>
      <QuantitySelector
        quantity={quantity}
        onDecrease={handleDecrease}
        onIncrease={handleIncrease}
      />

      <AddToCartButton product={product} />
    </Stack>
  );
};
