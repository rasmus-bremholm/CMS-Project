const strapiUrl = "http://localhost:1337/api/";

async function strapiQuery(endpoint, queryParams = "") {
  const url = strapiUrl + endpoint + (queryParams ? `?${queryParams}` : "");
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Strapi error: ${response.status}  @${endpoint}`);
  }

  const result = await response.json();

  return result;
}

export async function getTestimonials() {
  const response = await strapiQuery("testimonials");

  return response.data;
}

export async function getProductsByCategory(category) {
	// API test
  // http://localhost:1337/api/products/filters[category][field][$eq]=value&populate=*
  const query = "filters[category][title][$eq]=" + category + "&populate=*";

  const response = await strapiQuery("products", query);

  return response.data;
}

export async function getProductBySlug(slug) {
	// API test
  // http://localhost:1337/api/products?filters[slug][$eq]=arvid-nordquist-mellan&populate=*
  const query = "filters[slug][$eq]=" + slug + "&populate=*";

  const response = await strapiQuery("products", query);

  return response.data;
}
