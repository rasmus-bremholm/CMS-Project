"use server";
import { cookies } from "next/headers";

export async function setAuthCookie(jwt: string) {
  const cookieStore = await cookies();

  cookieStore.set("strapi_jwt", jwt, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 60 * 60 * 24 * 7,
    path: "/",
  });
}
