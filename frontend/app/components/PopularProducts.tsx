import { Typography } from "@mui/material";

//types
import { Product } from "@/types/product";

const allProducts = await getAllProducts();

export default async function PopularProducts() {
  return (
    <>
      <Typography component="h2" variant="h2" fontWeight="bold">
        Populära produkter
      </Typography>
      {allProducts?.map((product) => (
        <p key={product.id}>{product.title}</p>
      ))}
    </>
  );
}

async function getAllProducts() {
  const mod = await import("@/app/mockdata/products.json");
  const products = mod.default;

  return products;
}
