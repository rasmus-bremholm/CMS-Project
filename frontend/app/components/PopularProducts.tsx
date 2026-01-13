import { Box, Typography } from "@mui/material";
import { DisplayPopularProducts } from "./DisplayPopularProducts";

//types
import { Product } from "@/types/product";

const allProducts = await getAllProducts();

const getPopularProducts = (
  products: Product[],
  category: "coffee" | "tea"
) => {
  return products
    .filter((p) => p.category === category)
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);
};

export default async function PopularProducts() {
  const popularCoffee = getPopularProducts(allProducts, "coffee");
  const popularTea = getPopularProducts(allProducts, "tea");

  return (
    <Box
      sx={{ backgroundColor: "brand.latte", display: "flex", flexDirection: "column", alignItems: "center", gap: 2, py: 10 }}
    >
      <Typography component="h2" variant="h4" fontWeight="bold">
        Populära produkter
      </Typography>

      <DisplayPopularProducts
        coffeeProducts={popularCoffee}
        teaProducts={popularTea}
      />
    </Box>
  );
}

async function getAllProducts() {
  const mod = await import("@/app/mockdata/products.json");
  const products = mod.default;

  return products;
}
