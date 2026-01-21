"use client";

import { Box, CardMedia, IconButton, Typography } from "@mui/material";
import { CartItemType } from "@/types/product";
import { useCart } from "@/app/context/CartContext";
import { Add, Close, Remove } from "@mui/icons-material";
import { rootUrl } from "@/app/lib/utils/strapi";

interface CartItemProps {
  item: CartItemType;
}

export default function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeItem } = useCart();
  const { product, quantity } = item;

  const imageUrl = product.img?.url ? `${rootUrl}${product.img.url}` : "";

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
      <CardMedia
        component="img"
        image={imageUrl}
        alt={product.title}
        sx={{ width: 64, height: 64, objectFit: "cover", borderRadius: 1 }}
      />

      <Typography fontWeight={500}>{product.title}</Typography>

      <Box display="flex" alignItems="center" gap={1}>
        <IconButton
          size="small"
          onClick={() => updateQuantity(product.id, quantity - 1)}
        >
          <Remove fontSize="small" />
        </IconButton>

        <Typography>{quantity}</Typography>

        <IconButton
          size="small"
          onClick={() => updateQuantity(product.id, quantity + 1)}
        >
          <Add fontSize="small" />
        </IconButton>
      </Box>

      <Typography color="brand.coffeeBean">
        {(product.price * quantity).toFixed(2)}
      </Typography>

      <IconButton size="small" onClick={() => removeItem(product.id)}>
        <Close fontSize="small" sx={{ color: "brand.coffeeBean" }} />
      </IconButton>
    </Box>
  );
}
