import { Box, Typography } from "@mui/material";
import { DisplayPopularProducts } from "./DisplayPopularProducts";
import { getPopularProducts } from "@/app/lib/utils/strapi";

export default async function PopularProducts() {
  const [popularCoffee, popularTea] = await Promise.all([
    getPopularProducts("Kaffe"),
    getPopularProducts("Te"),
  ]);

  return (
    <Box
      sx={{
        backgroundColor: "brand.latte",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        py: 10,
      }}
    >
      <Typography component="h2" variant="h3">
        Populära produkter
      </Typography>

      <DisplayPopularProducts
        coffeeProducts={popularCoffee}
        teaProducts={popularTea}
      />
    </Box>
  );
}
