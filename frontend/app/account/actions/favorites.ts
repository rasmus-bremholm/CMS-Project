"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

export async function addFavorite(productId: number) {
  // Lägg till favorit
  const cookieStore = await cookies();
  const jwt = cookieStore.get("jwt")?.value;

  if (!jwt) {
    throw new Error("Inte inloggad / JWT saknas");
  }

  // Strapi logiken här

  revalidatePath("/account");
}

export async function removeFavorite(productId: number) {
  // Ta bort favorit
  const cookieStore = await cookies();
  const jwt = cookieStore.get("jwt")?.value;

  if (!jwt) {
    throw new Error("Inte inloggad / JWT saknas");
  }

  // Strapi logiken här

  revalidatePath("/account");
}
