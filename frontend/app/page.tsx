import { getHomepageData } from "./lib/utils/strapi";
import ImageCarousel from "./home/components/ImageCarousel";
import PopularProducts from "./home/components/PopularProducts";
import AboutOurCoffee from "./home/components/AboutOurCoffee";
import Testimonials from "./home/components/Testimonials";

//Types
import { CarouselImage } from "@/types/carousel";

export default async function Home() {
	const data = await getHomepageData();
	console.log('data', data)
	
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
