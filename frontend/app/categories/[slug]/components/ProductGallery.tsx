import { Box, Typography } from "@mui/material";
import { PopularProductCard } from "@/app/home/components/PopularProductCard";

// Types
import { Product } from "@/types/product";

interface Props {
  products: Product[];
}

export default function ProductGallery({ products }: Props ) {
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
      {products.map(product => (
				<PopularProductCard key={product.id} product={product}/>
			))}
    </Box>
  );
}
