import Image from "next/image";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { ProductActions } from "./ProductActions";
import BackButton from "@/app/components/BackButton";

//
import FilterPanel from "@/app/components/FilterPanel";
import { getTags } from "@/app/lib/utils/strapi";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function ProductDetails({ params }: Props) {
  const { slug } = await params;
  const product = await getProduct(slug);
	//
	const tags = await getTags();
	console.log('tags', tags)
	

  return (
    <Box component="section" sx={{ backgroundColor: "brand.latte", py: 6 }}>
			<FilterPanel tags={tags} />
      <Container
        component="main"
        maxWidth="md"
        sx={{
          alignItems: "flex-start",
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <BackButton />
        <Box
          sx={{ backgroundColor: "#E3DFD9", mx: "auto", px: 2, py: 4, width: "100%" }}
        >
          <Grid container spacing={4} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  aspectRatio: "1/1",
                  maxWidth: "100%",
                  mx: "auto",
                  position: "relative",
                  width: { xs: "300px", md: "100%" },
                }}
              >
                <Image fill src={product.imageUrl} alt="Alt text" />
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Stack
                spacing={3}
                sx={{
                  textAlign: { xs: "center", md: "left" },
                  alignItems: { xs: "center", md: "flex-start" },
                  px: { xs: 4, sm: 10, md: 0 },
                }}
              >
                <Box>
                  <Typography
                    component="h1"
                    fontWeight="bold"
                    sx={{ fontSize: "1.8rem" }}
                  >
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
        </Box>
      </Container>
    </Box>
  );
}

async function getProduct(slug: string) {
  const mod = await import("@/app/mockdata/products.json");
  const products = mod.default;

  return products.find(product => product.slug === slug);
}
