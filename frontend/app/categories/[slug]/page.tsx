import { Box, Container } from "@mui/material";
import {
  getProductsByCategory,
  getTags,
  getCategoryBySlug,
} from "@/app/lib/utils/strapi";
import BackButton from "@/app/components/BackButton";
import FilterPanel from "@/app/components/FilterPanel";
import ProductGallery from "./components/ProductGallery";
import { draftMode } from "next/headers";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function CategoryGalleryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  const { isEnabled: isDraftMode } = await draftMode();
  const status = isDraftMode ? "draft" : "published";

  const category = await getCategoryBySlug(slug, status);
  const products = await getProductsByCategory(slug, status);
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

        <h1>{category?.title}</h1>

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
