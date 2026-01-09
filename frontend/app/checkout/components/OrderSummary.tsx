"use client";

import { Box, Card, CardContent, Divider, Stack, Typography } from "@mui/material";
import PayButton from "./Buttons/PayButton";
import storeData from "@/app/checkout/lib/store.json";

const cart = [
  { productId: "coffee_ethiopian", quantity: 1 },
  { productId: "coffee_colombian", quantity: 1 },
  { productId: "coffee_sumatra", quantity: 1 },
];

export default function OrderSummary() {
  const { products, shippingRules } = storeData;

  const subTotal = cart.reduce((sum, item) => {
    const product = products.find((p) => p.id === item.productId);
    return sum + (product?.price ?? 0) * item.quantity;
  }, 0);

  const shipping =
    subTotal >= shippingRules.freeShippingThreshold ? 0 : shippingRules.flatRate;

  const total = subTotal + shipping;

  return (
    <Card sx={{ position: "sticky", top: 96 }}>
      <CardContent>
        <Typography variant="h6" fontWeight={600} mb={2}>
          Order Summary
        </Typography>

        <Stack spacing={1.5} mb={2}>
          {cart.map((item) => {
            const product = products.find((p) => p.id === item.productId);
            if (!product) return null;

            return (
              <Box key={item.productId} display="flex" justifyContent="space-between">
                <Typography variant="body2" color="text.secondary">
                  {product.name} x {item.quantity}
                </Typography>
                <Typography variant="body2">
                  ${(product.price * item.quantity).toFixed(2)}
                </Typography>
              </Box>
            );
          })}
        </Stack>

        <Divider sx={{ my: 2 }} />

        <Stack spacing={1}>
          <Box display="flex" justifyContent="space-between">
            <Typography color="text.secondary">Subtotal</Typography>
            <Typography>${subTotal.toFixed(2)}</Typography>
          </Box>

          <Box display="flex" justifyContent="space-between">
            <Typography color="text.secondary">Shipping</Typography>
            <Typography>{shipping === 0 ? "Free" : `$${shipping}`}</Typography>
          </Box>

          <Divider />

          <Box display="flex" justifyContent="space-between">
            <Typography fontWeight={600}>Total</Typography>
            <Typography fontWeight={600}>${total.toFixed(2)}</Typography>
          </Box>
        </Stack>

        <PayButton total={total} />
      </CardContent>
    </Card>
  );
}
