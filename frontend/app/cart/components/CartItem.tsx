"use client";

import { Box } from "@mui/material";
import { CartItemType } from "@/app/cart/types/product";
import { useCart } from "@/app/cart/lib/CartContext";
import { grey } from "@mui/material/colors";

interface CartItemProps {
  item: CartItemType;
}

export default function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeItem } = useCart();
  const { product, quantity } = item;

  return (
    <Box
      display="flex"
      gap={2}
      py={2}
      borderBottom={1}
      borderColor="divider"
      alignItems="center"
    >
      <Box
        width={80}
        height={80}
        borderRadius={1}
        overflow="hidden"
        flexShrink={0}
        bgcolor={grey}
        display="flex"
        justifyContent="center"
      ></Box>
    </Box>
  );
}
