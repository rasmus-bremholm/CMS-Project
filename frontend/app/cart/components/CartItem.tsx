"use client";

import Image from "next/image";
import { Box, IconButton, Typography } from "@mui/material";
import { CartItemType } from "@/app/cart/types/product";
import { useCart } from "@/app/cart/lib/CartContext";
import { Add, Close, Remove } from "@mui/icons-material";

interface CartItemProps {
  item: CartItemType;
}

export default function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeItem } = useCart();
  const { product, quantity } = item;

  return (
    <Box
      display="grid"
      gridTemplateColumns="80px 1fr 140px 80px 40px"
      gap={2}
      py={2}
      borderBottom="1px solid"
      borderColor="divider"
      alignItems="center"
    >
      <Image
        src={product.imageUrl}
        alt={product.title}
        width={64}
        height={64}
        style={{ objectFit: "cover", borderRadius: 4 }}
      />

      <Typography fontWeight={500}>{product.title}</Typography>

      <Box display="flex" alignItems="center" gap={1}>
        <IconButton size="small" onClick={() => updateQuantity(product.id, quantity - 1)}>
          <Remove fontSize="small" />
        </IconButton>

        <Typography>{quantity}</Typography>

        <IconButton size="small" onClick={() => updateQuantity(product.id, quantity + 1)}>
          <Add fontSize="small" />
        </IconButton>
      </Box>

      <Typography>${(product.price * quantity).toFixed(2)}</Typography>

      <IconButton size="small" onClick={() => removeItem(product.id)}>
        <Close fontSize="small" />
      </IconButton>
    </Box>
  );
}
