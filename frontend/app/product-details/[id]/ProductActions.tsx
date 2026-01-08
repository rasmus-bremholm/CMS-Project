"use client";

import { useState } from "react";
import { Stack, Button } from '@mui/material';
import { QuantitySelector } from "../../components/QuantitySelector";

export const ProductActions = ({ product }: { product: any }) => {
  const [quantity, setQuantity] = useState(1);

  const handleDecrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  const handleIncrease = () => setQuantity((prev) => prev + 1);

  return (
    <Stack direction="row" spacing={2}>
      <QuantitySelector
        quantity={quantity}
        onDecrease={handleDecrease}
        onIncrease={handleIncrease}
      />

      <Button>Lägg till</Button>
    </Stack>
  );
};
