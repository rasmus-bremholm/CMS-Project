import qs from "qs";
import { Product } from "@/types/product";
import { Order, OrdersResponse } from "@/types/order";
import { Category } from "@/types/category";
import { ContactPage } from "@/types/contact";
import { Cart } from "@/types/cart";
import { Checkout } from "@/types/checkout";

interface StrapiData {
  data: any;
  meta?: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export const rootUrl = "http://localhost:1337";
const strapiUrl = "http://localhost:1337/api/";

async function strapiQuery(
  endpoint: string,
  queryParams: Record<string, any> = {}
) {
  const queryString = qs.stringify(queryParams, {
    encodeValuesOnly: true, // 🔥 REQUIRED FOR STRAPI V4
  });
  const url = strapiUrl + endpoint + (queryString ? `?${queryString}` : "");

  const response = await fetch(url, {
    next: { revalidate: 60 }, // optional but recommended
  });

  if (!response.ok) {
    throw new Error(`Strapi error: ${response.status}  @${endpoint}`);
  }

  const result: StrapiData = await response.json();

  return result;
}

export async function getProductsByCategory(
  categoryName: string
): Promise<Product[]> {
  // API test
  // http://localhost:1337/api/products/filters[category][title][$eq]=coffee&populate=*
  const query = {
    filters: {
      category: {
        title: {
          $eq: categoryName,
        },
      },
    },
    populate: "*",
  };

  const response = await strapiQuery("products", query);

  return response.data;
}

export async function getProductBySlug(slug: string): Promise<Product[]> {
  // API test
  // http://localhost:1337/api/products?filters[slug][$eq]=arvid-nordquist-mellan&populate=*
  const query = {
    filters: {
      slug: {
        $eq: slug,
      },
    },
    populate: "*",
  };

  const response = await strapiQuery("products", query);

  return response.data;
}

export async function getOrders(): Promise<OrdersResponse> {
  // API test
  // http://localhost:1337/api/orders?populate[order_items][populate]=product
  const query = {
    populate: {
      order_items: {
        populate: "product",
      },
    },
  };

  const response = await strapiQuery("orders", query);

  return response.data;
}

export async function getHomepageData() {
  // API test
  // http://localhost:1337/api/home-page?populate[about][populate]=image&populate[carousel_images][populate]=*
  const query = {
    populate: {
      carousel_images: {
        populate: "*",
      },
      about: {
        populate: ["image"],
      },
      testimonials: {
        populate: "*",
      },
    },
  };

  const response = await strapiQuery("home-page", query);

  return response.data;
}

export async function getFavorites() {
  const query = {
    populate: {
      product: {
        populate: "*",
      },
      users_permissions_user: true, // Grrrr
    },
  };

  const response = await strapiQuery("favorites", query);

  return response.data;
}

export async function getCategories(): Promise<Category[]> {
  const query = {
    populate: "*",
  };

  const response = await strapiQuery("categories", query);
  return response.data;
}

export async function getContactpageData(
  locale: "sv" | "en"
): Promise<ContactPage> {
  const query = {
    locale,
    populate: {
      hero: true,
      contact_form: true,
      contact_information: {
        populate: {
          about: true,
          phone: true,
          email: true,
        },
      },
    },
  };

  const response = await strapiQuery("contact-page", query);

  const data = response.data;

  return {
    id: data.id,
    locale: data.locale,
    hero: data.hero,
    contact_form: data.contact_form,
    contact_information: data.contact_information,
  };
}

export async function getCartData(locale: "sv" | "en"): Promise<Cart> {
  const query = {
    locale,
    populate: {
      cart_empty: true,
      cart: true,
      order_summary: true,
    },
  };

  const response = await strapiQuery("cart", query);

  const data = response.data;

  return {
    id: data.id,
    locale: data.locale,
    cart_empty: data.cart_empty,
    cart: data.cart,
    order_summary: data.order_summary,
  };
}

export async function getCheckoutData(locale: "sv" | "en"): Promise<Checkout> {
  const query = {
    locale,
    populate: {
      adress: true,
      contact: true,
      payment: true,
      order_summary: {
        populate: {
          empty: true,
        },
      },
    },
  };

  const response = await strapiQuery("checkout", query);

  const data = response.data;

  return {
    id: data.id,
    locale: data.locale,
    title: data.title,
    adress: data.adress,
    contact: data.contact,
    payment: data.payment,
    order_summary: data.order_summary,
    pay_button: data.pay_button,
  };
}
