import { StrapiImage } from "./strapi-image";
import { Product } from "./product";

export interface Categories {
  id: number;
  title: string;
  image: StrapiImage;
  products: Product[];
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}
