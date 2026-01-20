import { Box, Typography } from "@mui/material";

// Types
import { Product } from "@/types/product";

interface Props {
  products: Product[];
}

export default function ProductGallery({ products }) {
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
      <Typography>Hi</Typography>
    </Box>
  );
}
