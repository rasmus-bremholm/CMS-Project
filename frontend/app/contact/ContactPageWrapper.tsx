"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/app/context/LanguageContext";
import { getContactpageData } from "@/app/lib/utils/strapi";
import Hero from "./components/Hero";
import ContactForm from "./components/ContactForm";
import { Container } from "@mui/material";

export default function ContactPageWrapper() {
  const { locale } = useLanguage();
  const [contactPage, setContactPage] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getContactpageData(locale)
      .then(data => setContactPage(data))
      .finally(() => setLoading(false));
  }, [locale]);

  if (loading) return <div>Loading...</div>;
  if (!contactPage) return <div>No content available</div>;

  return (
    <>
      <Hero data={contactPage} />
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <ContactForm data={contactPage} />
      </Container>
    </>
  );
}
