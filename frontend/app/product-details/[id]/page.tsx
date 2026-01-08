import Image from "next/image";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { ProductActions } from "./ProductActions";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function ProductDetails({ params }: Props) {
	const { id } = await params;
	const product = await getProduct(id);

  return (
    <Container
      component="main"
      maxWidth="md"
      sx={{
        display: "flex",
      }}
    >
      <Grid container spacing={4} alignItems="center">
        <Grid size={{ xs: 12, md: 6 }}>
          <Box sx={{ aspectRatio: "1/1", position: "relative", width: "100%" }}>
            <Image fill src="/mellan.webp" alt="Alt text" />
          </Box>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Stack spacing={3} sx={{ color: "white" }}>
            <Box>
              <Typography component="h1" variant="h4" fontWeight="bold">
                {product.title}
              </Typography>

              <Typography fontWeight="bold">{product.price}:-</Typography>
            </Box>

            <Typography>{product.description}</Typography>

            <Typography>
              {product.inStock ? "I lager" : "Ej i lager"}
            </Typography>

            <ProductActions product={product} />
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}

async function getProduct(id: string) {
  const module = await import("@/app/mockdata/products.json");
  const products = module.default;

  return products.find((product) => product.id == id);
}
