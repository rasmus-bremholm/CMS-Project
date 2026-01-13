import ImageCarousel from "./components/ImageCarousel";
import PopularProducts from "./components/PopularProducts";
import AboutOurCoffee from "./components/AboutOurCoffee";
import Testimonials from "./components/Testimonials";

//Types
import { CarouselImage } from "@/types/carousel";

export default async function Home() {
  const images = await getCarouselImages();

  return (
    <>
      <ImageCarousel images={images} />
      <PopularProducts />
			<AboutOurCoffee />
			<Testimonials />
    </>
  );
}

async function getCarouselImages(): Promise<CarouselImage[]> {
  const mod = await import("@/app/mockdata/carouselimages.json");
  const images = mod.default;

  return images;
}
