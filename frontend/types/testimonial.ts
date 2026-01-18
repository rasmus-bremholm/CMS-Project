import { StrapiImage } from "./strapi-image";

export interface TestimonialTypes {
  id: number;
  author: string;
  title: string;
  testimonial: string;
  avatar: StrapiImage;
}
