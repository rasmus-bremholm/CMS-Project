"use client";

import Image from "next/image";
import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import { CartItemType } from "@/app/cart/types/product";
import { useCart } from "@/app/cart/lib/CartContext";
import { grey } from "@mui/material/colors";
import { Add, Delete } from "@mui/icons-material";

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
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="80px"
          style={{ objectFit: "cover" }}
          priority={false}
        />
      </Box>

      <Box flex={1} minWidth={0}>
        <Typography variant="subtitle1" noWrap>
          {product.name}
        </Typography>
        <Typography variant="subtitle1" color="primary" mt={0.5}>
          ${product.price.toFixed(2)}
        </Typography>
      </Box>

      <Stack spacing={1} alignItems="flex-end">
        <IconButton size="small" onClick={() => updateQuantity(product.id, quantity + 1)}>
          <Add fontSize="small" />
        </IconButton>

        <Button
          startIcon={<Delete fontSize="small" />}
          color="error"
          size="small"
          onClick={() => removeItem(product.id)}
        >
          Remove
        </Button>
      </Stack>
    </Box>
  );
}
