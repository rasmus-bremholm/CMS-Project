import qs from "qs";
import { Product } from "@/types/product";
import { Order, OrdersResponse } from "@/types/order";
import { Category } from "@/types/category";
import { ContactPage } from "@/types/contact";
import { Cart } from "@/types/cart";
import { Checkout } from "@/types/checkout";
import { Header } from "@/types/header";
import { BackButton } from "@/types/back-button";

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
    encodeValuesOnly: true,
    arrayFormat: "indices",
  });
  const url = strapiUrl + endpoint + (queryString ? `?${queryString}` : "");

  const response = await fetch(url, {
    next: { revalidate: 60 },
  });

  if (!response.ok) {
    throw new Error(`Strapi error: ${response.status}  @${endpoint}`);
  }

  const result: StrapiData = await response.json();

  return result;
}

export async function getProductsByCategory(
  categorySlug: string,
  tagSlugs?: string | string[]
): Promise<Product[]> {
  const query: any = {
    filters: {
      category: {
        slug: {
          $eq: categorySlug,
        },
      },
    },
    populate: "*",
  };

  if (tagSlugs) {
    const tagList = Array.isArray(tagSlugs) ? tagSlugs : [tagSlugs];

    query.filters.$and = tagList.map(slug => ({
      tags: {
        slug: {
          $eq: slug,
        },
      },
    }));
  }

  const response = await strapiQuery("products", query);

  return response.data;
}

export async function getProductBySlug(slug: string): Promise<Product> {
  const query = {
    filters: {
      slug: {
        $eq: slug,
      },
    },
    populate: "*",
  };

  const response = await strapiQuery("products", query);

  return response.data[0];
}

export async function getOrders(): Promise<OrdersResponse> {
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

export async function getCategories(locale: "sv" | "en"): Promise<Category[]> {
  const query = {
    locale,
    populate: "*",
  };

  const response = await strapiQuery("categories", query);
  return response.data;
}

export async function getCategoriesPage(locale: "sv" | "en") {
  const query = {
    locale,
  };

  const response = await strapiQuery("categories-page", query);
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

export async function getTags(): Promise<string[]> {
  const query = {};

  const response = await strapiQuery("tags", query);

  return response.data;
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

export async function getBackButtonData(
  locale: "sv" | "en"
): Promise<BackButton> {
  const query = {
    locale,
    populate: "*",
  };

  const response = await strapiQuery("back-button", query);

  const data = response.data;

  return {
    id: data.id,
    locale: data.locale,
    label: data.label,
  };
}

const STRAPI_BASE = "http://localhost:1337";

/* Registrerar en ny användare i Strapi, Returnerar { jwt, user }*/
export async function registerUser(
  username: string,
  email: string,
  password: string
) {
  const response = await fetch(`${STRAPI_BASE}/api/auth/local/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      email,
      password,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data?.error?.message || "Registrering misslyckades");
  }

  return data;
}

/* Loggar in användare i Strapi, Returnerar { jwt, user }*/
export async function loginUser(email: string, password: string) {
  const response = await fetch(`${STRAPI_BASE}/api/auth/local`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      identifier: email,
      password,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data?.error?.message || "Inloggning misslyckades");
  }

  return data;
}

/* Hämtar inloggad användare baserat på JWT */
export async function getCurrentUser(jwt: string) {
  const response = await fetch(`${STRAPI_BASE}/api/users/me`, {
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  });

  if (!response.ok) {
    throw new Error("Kunde inte hämta användare");
  }

  return response.json();
}

export async function getPopularProducts(
  categoryTitle: string
): Promise<Product[]> {
  const query = {
    locale: "sv",
    filters: {
      category: {
        title: {
          $eq: categoryTitle,
        },
      },
    },
    sort: ["rating:desc"],
    pagination: {
      limit: 3,
    },
    populate: ["category", "img"],
  };

  const response = await strapiQuery("products", query);

  return response.data;
}

export async function getHeaderData(): Promise<Header> {
  const query = {
    populate: "*",
  };

  const response = await strapiQuery("header", query);

  return response.data;
}
