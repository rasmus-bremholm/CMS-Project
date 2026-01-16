// Ja håller alla typer som är relaterade till ordrar här. Vart så mycket som var beroende av vartannat.

import { Product } from "./product";

export interface OrderItem {
  id: number;
  documentId: string;
  quantity: number;
  product: Product | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface Order {
  id: number;
  documentId: string;
  orderNumber: string;
  orderStatus: string | null;
  orderDate: string;
  deliveryDate: string | null;
  order_items: OrderItem[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export type OrdersResponse = Order[];
