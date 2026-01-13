"use client";

import { Box, Button, MenuItem, Paper, Select, Stack, Typography } from "@mui/material";
import { useCart } from "../lib/CartContext";
import { ArrowForward, ShoppingBag } from "@mui/icons-material";
import Link from "next/link";
import CartItem from "./CartItem";

import products from "@/app/mockdata/products.json";
import { useEffect } from "react";

export default function Cart() {
  const { items, subtotal, total, itemCount, shippingCost, setShippingCost, addItem } =
    useCart();

  useEffect(() => {
    if (items.length === 0) {
      products.slice(0, 3).forEach((product) => {
        addItem(product);
      });
    }
  }, [items.length, addItem]);

  if (items.length === 0) {
    return (
      <Box
        minHeight="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
        py={12}
      >
        <Box textAlign="center">
          <Box
            width={64}
            height={64}
            borderRadius="50%"
            bgcolor="grey"
            display="flex"
            justifyContent="center"
            alignItems="center"
            mx="auto"
            mb={2}
          >
            <ShoppingBag fontSize="large" color="disabled" />
          </Box>

          <Typography variant="h5" fontWeight={600} mb={3}>
            Your cart is empty
          </Typography>
          <Typography color="text.secondary" mb={3}>
            Discover our selection of premium products
          </Typography>
          <Link href="/products" passHref>
            <Button variant="contained" endIcon={<ArrowForward />} size="medium">
              Continue Shopping
            </Button>
          </Link>
        </Box>
      </Box>
    );
  }

  return (
    <Box minHeight="100vh" py={{ xs: 4, md: 8 }}>
      <Box maxWidth="1200px" mx="auto" px={2}>
        <Typography variant="h4" fontWeight={600} mb={4}>
          Shopping Cart
        </Typography>

        <Stack spacing={4}>
          <Paper sx={{ p: 2 }}>
            <Box
              display="grid"
              gridTemplateColumns="80px 1fr 140px 80px 40px"
              mb={2}
              fontWeight={600}
            >
              <Typography fontWeight={600}>Product</Typography>
              <Box />
              <Typography fontWeight={600}>Quantity</Typography>
              <Typography fontWeight={600}>Total</Typography>
              <Box />
            </Box>
            <Stack spacing={1}>
              {items.map((item) => (
                <CartItem key={item.product.id} item={item} />
              ))}
            </Stack>
          </Paper>

          <Paper
            sx={{
              p: 3,
            }}
          >
            <Typography variant="h6" fontWeight={600} mb={2}>
              Order Summary
            </Typography>

            <Box display="flex" justifyContent="flex-start" fontWeight={600} mb={2}>
              <Typography fontWeight={600} marginRight={3}>
                {itemCount} x items
              </Typography>
              <Typography fontWeight={600}>${subtotal.toFixed(2)}</Typography>
            </Box>

            <Box mb={2}>
              <Typography mb={1}>Shipping</Typography>
              <Select
                fullWidth
                value={shippingCost}
                onChange={(e) => setShippingCost(Number(e.target.value))}
              >
                <MenuItem value={5}>Standard shipping - $5.00</MenuItem>
                <MenuItem value={15}>Express shipping - $15.00</MenuItem>
              </Select>
            </Box>

            <Box
              display="flex"
              justifyContent="flex-start"
              fontWeight={600}
              mt={2}
              mb={3}
            >
              <Typography marginRight={3}>Total:</Typography>
              <Typography>${(total + 5).toFixed(2)}</Typography>
            </Box>

            <Stack direction="row" justifyContent="center" spacing={2}>
              <Button
                component={Link}
                variant="outlined"
                href="/products"
                sx={{ minWidth: 180 }}
              >
                Continue Shopping
              </Button>

              <Button
                component={Link}
                variant="contained"
                href="/checkout"
                sx={{ minWidth: 180 }}
              >
                Checkout
              </Button>
            </Stack>
          </Paper>
        </Stack>
      </Box>
    </Box>
  );
}
