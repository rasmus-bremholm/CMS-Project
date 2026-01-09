import { createContext, useContext } from "react";
import { Product, CartItemType } from "../types/product";
import { it } from "node:test";

interface CartState {
  items: CartItemType[];
  total: number;
}

interface CartContextType extends CartState {
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quatity: number) => void;
  itemCount: number;
}

type CartAction =
  | { type: "ADD_ITEM"; product: Product }
  | { type: "REMOVE_ITEM"; productId: string }
  | { type: "UPDATE_QUANTITY"; productId: string; quantity: number }
  | { type: "CLEAR_CART" }
  | { type: "LOAD_CART"; items: CartItemType[] };

const CartContext = createContext<CartContextType | undefined>(undefined);

const calculateTotal = (items: CartItemType[]): number =>
  items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "ADD_ITEM": {
      const existingItem = state.items.find(
        (item) => item.product.id === action.product.id
      );
      if (existingItem) {
        const newItems = state.items.map((item) =>
          item.product.id === action.product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        return { items: newItems, total: calculateTotal(newItems) };
      }
    }
  }
};

export const useCart = () => {
  const context = useContext(CartContext);
};
