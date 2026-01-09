export interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
}

export interface CartItemType {
  product: Product;
  quantity: number;
}
