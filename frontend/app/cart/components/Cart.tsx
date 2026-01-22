"use client";

import {
  Box,
  Button,
  Card,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import { useCart } from "../../context/CartContext";
import { ArrowForward, ShoppingBag } from "@mui/icons-material";
import Link from "next/link";
import CartItem from "./CartItem";

function parseShippingCost(shippingText: string): number {
  if (!shippingText) return 0;

  const match = shippingText.replace(/[^\d.,]/g, "").trim();
  if (!match) return 0;

  if (match.includes(",")) {
    return parseFloat(match.replace(",", "."));
  }

  return parseFloat(match);
}

export default function Cart({ data }: { data?: any }) {
  const cartEmpty = data?.cart_empty;
  const cart = data?.cart;
  const orderSummary = data?.order_summary;

  const { items, subtotal, total, itemCount, shippingCost, setShippingCost } =
    useCart();

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
            {cartEmpty?.title ?? ""}
          </Typography>
          <Typography color="text.secondary" mb={3}>
            {cartEmpty?.subtitle ?? ""}
          </Typography>
          <Link href="/categories" passHref>
            <Button
              variant="contained"
              endIcon={<ArrowForward />}
              size="medium"
              sx={{ bgcolor: "brand.coffeeBean" }}
            >
              {cartEmpty?.button_label ?? ""}
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
          {cart?.title ?? ""}
        </Typography>

        <Stack spacing={4}>
          <Card sx={{ p: 2 }}>
            <Box
              display="grid"
              gridTemplateColumns={{
                xs: "1 fr",
                sm: "80px 1fr 140px 80px 40px",
              }}
              gap={2}
            >
              <Typography
                fontWeight={600}
                sx={{ display: { xs: "none", sm: "block" } }}
              >
                {cart?.product_title ?? ""}
              </Typography>
              <Box />
              <Typography
                fontWeight={600}
                sx={{ display: { xs: "none", sm: "block" } }}
              >
                {cart?.quantity_title ?? ""}
              </Typography>
              <Typography
                fontWeight={600}
                sx={{ display: { xs: "none", sm: "block" } }}
              >
                {cart?.total_title ?? ""}
              </Typography>
              <Box />
            </Box>

            <Stack spacing={1}>
              {items.map(item => (
                <CartItem key={item.product.id} item={item} />
              ))}
            </Stack>
          </Card>

          <Card
            sx={{
              p: 3,
            }}
          >
            <Typography variant="h6" fontWeight={600} mb={2}>
              {orderSummary?.title ?? ""}
            </Typography>

            <Box
              display="flex"
              justifyContent="flex-start"
              fontWeight={600}
              mb={2}
            >
              <Typography fontWeight={600} marginRight={3}>
                {itemCount} x items
              </Typography>
              <Typography fontWeight={600}>{subtotal.toFixed(2)}</Typography>
            </Box>

            <Box mb={2}>
              <Typography mb={1}>
                {orderSummary?.shipping_title ?? ""}
              </Typography>
              <Select
                fullWidth
                value={shippingCost}
                onChange={e => setShippingCost(Number(e.target.value))}
              >
                {["shipping_1", "shipping_2"].map((key, index) => {
                  const text = orderSummary?.[key];
                  if (!text) return null;

                  return (
                    <MenuItem key={index} value={parseShippingCost(text)}>
                      {text}
                    </MenuItem>
                  );
                })}
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
              <Typography color="brand.coffeeBean">
                {total.toFixed(2)}
              </Typography>
            </Box>

            <Stack
              direction={{ xs: "column", sm: "row" }}
              justifyContent="center"
              spacing={2}
            >
              <Button
                component={Link}
                variant="outlined"
                href="/categories"
                sx={{ minWidth: { sm: 180 } }}
              >
                {orderSummary?.button_continue ?? ""}
              </Button>

              <Button
                component={Link}
                variant="contained"
                href="/checkout"
                sx={{ minWidth: { sm: 180 }, bgcolor: "brand.darkCoffee" }}
              >
                {orderSummary?.button_checkout ?? ""}
              </Button>
            </Stack>
          </Card>
        </Stack>
      </Box>
    </Box>
  );
}
