"use client";

import { useEffect, useState } from "react";
import { Box, Container, Typography, Paper } from "@mui/material";
import { Category } from "@/types/category";
import { getCategories, getCategoriesPage } from "../lib/utils/strapi";
import { useTheme } from "@mui/material/styles";
import { useLanguage } from "@/app/context/LanguageContext";

export default function Categories() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [pageTitle, setPageTitle] = useState<string>("");

  const { locale } = useLanguage();

  const theme = useTheme();

  useEffect(() => {
    async function fetchCategories() {
      try {
        const data = await getCategories(locale);
        setCategories(data);

        const pageData = await getCategoriesPage(locale);
        setPageTitle(pageData.title);
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      }
    }

    fetchCategories();
  }, [locale]);

  return (
    <Container>
      <Paper sx={{ padding: 2, marginBottom: 4 }}>
        <Typography variant="h5" component="h1">
          {pageTitle}
        </Typography>
      </Paper>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            },
            gap: 2,
          }}
        >
          {categories.map(category => (
            <Box
              key={category.id}
              sx={{
                width: 200,
                height: 200,
                borderRadius: 2,
                boxShadow: 3,
                backgroundColor: "brand.silver",
                color: "white",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                overflow: "hidden",
                marginBottom: 2,
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  width: "100%",
                  marginBottom: 1,
                  textAlign: "center",
                  backgroundColor: "brand.darkCoffee",
                  borderRadius: 0,
                  boxShadow: 1,
                }}
              >
                {category.title}
              </Typography>

              {category.image && (
                <Box
                  sx={{
                    flex: 1,
                    overflow: "hidden",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    component="img"
                    src={`http://localhost:1337${category.image.url}`}
                    alt={category.image.alternativeText || category.title}
                    sx={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                      objectFit: "contain",
                    }}
                  />
                </Box>
              )}
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
  );
}
