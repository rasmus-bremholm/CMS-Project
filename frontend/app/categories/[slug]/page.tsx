import { Box, Container } from "@mui/material";
import { getProductsByCategory, getTags } from "@/app/lib/utils/strapi";
import BackButton from "@/app/components/BackButton";
import FilterPanel from "@/app/categories/[slug]/components/FilterPanel";
import ProductGallery from "./components/ProductGallery";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function CategoryGalleryPage({ params }: Props) {
  const { slug } = await params;
  const products = await getProductsByCategory(slug);
  const tags = await getTags();

  return (
    <Box component="section" sx={{ backgroundColor: "brand.latte", py: 6 }}>
      <Container
        component="main"
        sx={{
          alignItems: "flex-start",
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <BackButton />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            width: "100%",
          }}
        >
          <FilterPanel tags={tags} />
          <ProductGallery products={products} />
        </Box>
      </Container>
    </Box>
  );
}
