import { StrapiImage } from "./strapi-image";

export interface AboutTypes {
  id: number;
  title: string;
  body_text: string;
	button_label: string;
	button_url: string;
	image: StrapiImage;
}