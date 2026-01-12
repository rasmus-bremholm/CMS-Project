import { Typography } from "@mui/material";

//types
import { Product } from "@/types/product";

export default async function PopularProducts() {
  return (
    <Typography component="h2" variant="h2" fontWeight="bold">
      Populära produkter
    </Typography>
  );
}
