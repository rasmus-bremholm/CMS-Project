export interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
  inStock: boolean;
  imageUrl: string;
  slug: string;
}

export interface CartItemType {
  product: Product;
  quantity: number;
}
