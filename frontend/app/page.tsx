import ImageCarousel from "./components/ImageCarousel";
import PopularProducts from "./components/PopularProducts";

//Types
import { CarouselImage } from "@/types/carousel";

export default async function Home() {
  const images = await getCarouselImages();

  return (
    <>
      <ImageCarousel images={images} />
      <PopularProducts />
    </>
  );
}

async function getCarouselImages(): Promise<CarouselImage[]> {
  const mod = await import("@/app/mockdata/carouselimages.json");
  const images = mod.default;

  return images;
}
