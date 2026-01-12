import ImageCarousel from "./components/ImageCarousel";

export default function Home() {
	const images = [
		{
			id: 1,
			url: "/1.jpg",
			alt: "Such access"
		},
		{
			id: 2,
			url: "/2.jpg",
			alt: "Much wow"
		}
	]

	return (
		<ImageCarousel images={images}/>
	);
}

