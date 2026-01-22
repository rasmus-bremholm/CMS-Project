import { Box, Container } from "@mui/material";
import { getProductsByCategory, getTags } from "@/app/lib/utils/strapi";
import BackButton from "@/app/components/BackButton";
import FilterPanel from "@/app/categories/[slug]/components/FilterPanel";
import ProductGallery from "./components/ProductGallery";

interface Props {
  params: Promise<{ slug: string }>;
	searchParams: Promise<{ tag?: string | string[] }>;
}

export default async function CategoryGalleryPage({ params, searchParams }: Props) {
  const { slug } = await params;
	const { tag } = await searchParams;
  const products = await getProductsByCategory(slug, tag);
  const allTags = await getTags();
console.log('products', products)

  return (
    <Box component="section" sx={{ backgroundColor: "brand.latte", py: 10 }}>
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
          <FilterPanel tags={allTags} />
          <ProductGallery products={products} />
        </Box>
      </Container>
    </Box>
  );
}
