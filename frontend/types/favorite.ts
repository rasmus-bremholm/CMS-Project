import { Product } from "./product";

interface ImageFormat {
  url: string;
  width: number;
  height: number;
}

interface ProductImage {
  url: string;
  alternativeText: string | null;
  formats: {
    thumbnail: ImageFormat;
    small: ImageFormat;
    medium: ImageFormat;
    large: ImageFormat;
  };
}

export interface Favorite {
  id: number;
  documentId: string;
  createdAt: string;
  product: {
    id: number;
    documentId: string;
    title: string;
    description: string;
    price: number;
    slug: string;
    img: ProductImage;
    ratring: number;
    quantity: number;
  };
}
