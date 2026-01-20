import { StrapiImage } from "./strapi-image";
import { StrapiTag } from "./strapi-tag";

export interface Product {
  id: number;
  title: string;
  description: string;
  image: StrapiImage;
  price: number;
  category: string;
  tags: StrapiTag[];
  slug: string;
  quantity: number;
  rating: number;
}

export interface CartItemType {
  product: Product;
  quantity: number;
}