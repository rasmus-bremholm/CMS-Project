"use client";

import { Box, Button, Grid, Paper, Stack, Typography } from "@mui/material";
import { useCart } from "../lib/CartContext";
import { ArrowForward, ShoppingBag } from "@mui/icons-material";
import Link from "next/link";
import CartItem from "./CartItem";

export default function Cart() {
  const { items, total, itemCount } = useCart();

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

        <Grid container spacing={4}>
          <Grid size={{ xs: 12, lg: 12 }}>
            <Paper elevation={2} sx={{ p: { xs: 2, md: 3 }, borderRadius: 2 }}>
              <Stack spacing={2}>
                {items.map((item) => (
                  <CartItem key={item.product.id} item={item} />
                ))}
              </Stack>
            </Paper>
          </Grid>

          <Grid size={{ xs: 12, lg: 4 }}>
            <Paper
              elevation={2}
              sx={{
                p: { xs: 2, md: 3 },
                borderRadius: 2,
                position: { md: "sticky" },
                top: { md: 80 },
              }}
            >
              <Typography variant="h6" fontWeight={600} mb={2}>
                Order Summary
              </Typography>

              <Stack spacing={1} mb={3}>
                <Box display="flex" justifyContent="space-between" color="text.secondary">
                  <Typography>Subtotal ({itemCount} items)</Typography>
                  <Typography>${total.toFixed(2)}</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between" color="text.secondary">
                  <Typography>Shipping</Typography>
                  <Typography>Calculated at checkout</Typography>
                </Box>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  borderTop={1}
                  borderColor="divider"
                  pt={1.5}
                >
                  <Typography fontWeight={600} variant="subtitle1">
                    Total
                  </Typography>
                  <Typography fontWeight={600} variant="subtitle1" color="primary">
                    ${total.toFixed(2)}
                  </Typography>
                </Box>
              </Stack>

              <Link href="/products" passHref>
                <Button
                  fullWidth
                  variant="text"
                  color="inherit"
                  sx={{ textTransform: "none" }}
                >
                  Continue Shopping
                </Button>
              </Link>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
