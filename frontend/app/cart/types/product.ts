export interface Product {
  id: number;
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
