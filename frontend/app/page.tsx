import { getHomepageData } from "./lib/utils/strapi";
import ImageCarousel from "./home/components/ImageCarousel";
import PopularProducts from "./home/components/PopularProducts";
import About from "./home/components/About";
import Testimonials from "./home/components/Testimonials";

export default async function Home({ searchParams }) {
	const isPreview = searchParams?.preview === 'true';
  const data = await getHomepageData(isPreview);

  return (
    <>
      <ImageCarousel images={data.carousel_images} />
      <PopularProducts />
      <About data={data.about} />
      <Testimonials data={data.testimonials} />
    </>
  );
}
