import { Box, Grid } from "@mui/material";
import { PopularProductCard } from "@/app/home/components/PopularProductCard";

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
        sx={{ display: "flex", justifyContent: "center" }}
      >
        {products.map(product => (
          <PopularProductCard key={product.id} product={product} />
        ))}
      </Grid>
    </Box>
  );
}
