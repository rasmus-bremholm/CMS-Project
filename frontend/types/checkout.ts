export interface Checkout {
  id: number;
  locale: "sv" | "en";
  title: string;
  adress: {
    title: string;
  };
  contact: {
    title: string;
  };
  payment: {
    title: string;
  };
  order_summary: {
    empty: {
      subtitle: string;
    };
    title: string;
    shipping_label: string;
  };
}
