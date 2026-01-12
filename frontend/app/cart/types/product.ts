export interface Product {
  title: string;
  id: string;
  name: string;
  image: string;
  price: number;
}

export interface CartItemType {
  product: Product;
  quantity: number;
}
