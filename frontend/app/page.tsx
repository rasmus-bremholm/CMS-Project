import { getHomepageData } from "./lib/utils/strapi";
import ImageCarousel from "./home/components/ImageCarousel";
import PopularProducts from "./home/components/PopularProducts";
import About from "./home/components/About";
import Testimonials from "./home/components/Testimonials";

export default async function Home() {
	const data = await getHomepageData();
	console.log('data', data)

  return (
    <>
      <ImageCarousel images={data.carousel_images} />
      <PopularProducts />
			<About data={data.about}/>
			<Testimonials data={data.testimonials}/>
    </>
  );
}
