import { Testimonial } from "@/types/testimonial";
import { Product } from "@/types/product";
import { Order, OrdersResponse } from "@/types/order";

interface StrapiData {
  data: any[];
  meta?: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

const strapiUrl = "http://localhost:1337/api/";

async function strapiQuery(endpoint: string, queryParams: string = "") {
  const url = strapiUrl + endpoint + (queryParams ? `?${queryParams}` : "");
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Strapi error: ${response.status}  @${endpoint}`);
  }

  const result: StrapiData = await response.json();

  return result;
}

export async function getTestimonials(): Promise<Testimonial[]> {
  const response = await strapiQuery("testimonials");

  return response.data;
}

export async function getProductsByCategory(
  category: string
): Promise<Product[]> {
  // API test
  // http://localhost:1337/api/products/filters[category][field][$eq]=value&populate=*
  const query = "filters[category][title][$eq]=" + category + "&populate=*";

  const response = await strapiQuery("products", query);

  return response.data;
}

export async function getProductBySlug(slug: string): Promise<Product[]> {
  // API test
  // http://localhost:1337/api/products?filters[slug][$eq]=arvid-nordquist-mellan&populate=*
  const query = "filters[slug][$eq]=" + slug + "&populate=*";

  const response = await strapiQuery("products", query);

  return response.data;
}

export async function getOrders(): Promise<OrdersResponse> {
  const query = "populate[order_items][populate]=product";
  const response = await strapiQuery("orders", query);

  return response.data;
}
