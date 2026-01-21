import { StrapiImage } from "./strapi-image"

export interface Header {
	logo: StrapiImage;
	nav_links: Nav_links[];
}

interface Nav_links {
	id: number;
	label: string;
	url: string;
}