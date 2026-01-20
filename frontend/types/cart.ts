export interface Cart {
  id: number;
  locale: "sv" | "en";
  cart_empty: {
    title: string;
    subtitle: string;
    button_label: string;
  };
  cart: {
    title: string;
    product_title: string;
    quantity_title: string;
    total_title: string;
  };
  order_summary: {
    title: string;
    shopping_title: string;
    shipping_1: string;
    shipping_2: string;
    button_continue: string;
    button_checkout: string;
  };
}
