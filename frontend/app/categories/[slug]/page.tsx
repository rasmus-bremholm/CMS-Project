import { Box, Typography } from "@mui/material";
import { getProductsByCategory } from "@/app/lib/utils/strapi";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function CategoryGalleryPage({ params }: Props) {
  const { slug } = await params;
  const products = await getProductsByCategory(slug);

  return (
    <Box>
      <Typography>Hi</Typography>
    </Box>
  );
}
