import { StrapiImage } from "./strapi-image";

export interface Testimonial {
  id: number;
  author: string;
  title: string;
  testimonial: string;
  avatar: StrapiImage;
}
