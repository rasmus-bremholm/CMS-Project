"use client";

import React, { createContext, useContext, useEffect, useReducer } from "react";
import type { Product, CartItemType } from "../types/product";

interface CartState {
  items: CartItemType[];
  total: number;
}

type CartAction =
  | { type: "ADD_ITEM"; product: Product }
  | { type: "REMOVE_ITEM"; productId: string }
  | { type: "UPDATE_QUANTITY"; productId: string; quantity: number }
  | { type: "CLEAR_CART" }
  | { type: "LOAD_CART"; items: CartItemType[] };

interface CartContextType extends CartState {
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  itemCount: number;
}
const CartContext = createContext<CartContextType | undefined>(undefined);

const calculateTotal = (items: CartItemType[]): number =>
  items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "ADD_ITEM": {
      const existing = state.items.find((item) => item.product.id === action.product.id);

      const newItems: CartItemType[] = existing
        ? state.items.map((item) =>
            item.product.id === action.product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        : [...state.items, { product: action.product, quantity: 1 }];

      return { items: newItems, total: calculateTotal(newItems) };
    }

    case "REMOVE_ITEM": {
      const newItems: CartItemType[] = state.items.filter(
        (item) => item.product.id !== action.productId
      );
      return { items: newItems, total: calculateTotal(newItems) };
    }

    case "UPDATE_QUANTITY": {
      const newItems: CartItemType[] =
        action.quantity <= 0
          ? state.items.filter((item) => item.product.id !== action.productId)
          : state.items.map((item) =>
              item.product.id === action.productId
                ? { ...item, quantity: action.quantity }
                : item
            );
      return { items: newItems, total: calculateTotal(newItems) };
    }

    case "CLEAR_CART":
      return { items: [], total: 0 };

    case "LOAD_CART":
      return { items: action.items, total: calculateTotal(action.items) };

    default:
      return state;
  }
};

const initialState: CartState = {
  items: [],
  total: 0,
};

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    const saved = localStorage.getItem("cart");
    if (saved) {
      try {
        const items: CartItemType[] = JSON.parse(saved);
        dispatch({ type: "LOAD_CART", items });
      } catch (e) {
        console.error("Failed to load cart:", e);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.items));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addItem = (product: Product) => dispatch({ type: "ADD_ITEM", product });
  const removeItem = (productId: string) => dispatch({ type: "REMOVE_ITEM", productId });
  const updateQuantity = (productId: string, quantity: number) =>
    dispatch({ type: "UPDATE_QUANTITY", productId, quantity });
  const clearCart = () => dispatch({ type: "CLEAR_CART" });

  const itemCount = state.items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items: state.items,
        total: state.total,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        itemCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used withing a CartProvider");
  }
  return context;
};
