import { StrapiImage } from "./strapiImage";

export interface Testimonial {
	id: number;
  author: string;
  title: string;
  testimonial: string;
  avatar: StrapiImage;
}
