import { Box, Grid } from "@mui/material";
import { ProductCard } from "./ProductCard";

// Types
import { Product } from "@/types/product";

interface Props {
  products: Product[];
}

export default function ProductGallery({ products }: Props) {
  return (
    <Box
      sx={{
        backgroundColor: "#E3DFD9",
        mx: "auto",
        px: 2,
        py: 4,
        width: "100%",
      }}
    >
      <Grid
        container
        spacing={3}
        sx={{ display: "flex", justifyContent: {xs: "center", sm: "flex-start"} }}
      >
        {products.map(product => (
          <Grid
            key={product.id}
            size={{ xs: 10, sm: 6, md: 4, lg: 3 }}
            sx={{ display: "flex" }}
          >
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
