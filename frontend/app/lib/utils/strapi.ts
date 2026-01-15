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
