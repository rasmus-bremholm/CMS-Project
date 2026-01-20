"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/app/context/LanguageContext";
import { getCartData } from "@/app/lib/utils/strapi";
import { Container } from "@mui/material";
import BackButton from "../components/BackButton";
import Cart from "./components/Cart";

export default function CartWrapper() {
  const { locale } = useLanguage();
  const [cart, setCart] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getCartData(locale)
      .then(data => setCart(data))
      .finally(() => setLoading(false));
  }, [locale]);

  if (loading) return <div>Loading...</div>;
  if (!cart) return <div>No content available</div>;

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <BackButton />
      <Cart data={cart} />
    </Container>
  );
}
