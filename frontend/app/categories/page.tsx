"use client";

import { useEffect, useState } from "react";
import { Box, Container, Typography, Paper } from "@mui/material";
import { Category } from "@/types/category";
import { getCategories } from "../lib/utils/strapi";
import { useTheme } from "@mui/material/styles";

export default function Categories() {
  const [categories, setCategories] = useState<Category[]>([]);

  const theme = useTheme();

  useEffect(() => {
    async function fetchCategories() {
      try {
        const data = await getCategories();
        setCategories(data);
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      }
    }

    fetchCategories();
  }, []);

  return (
    <Container>
      <Paper sx={{ padding: 2, marginBottom: 4 }}>
        <Typography variant="h5" component="h1">
          Kategorier
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
                borderRadius: 1,
                backgroundColor: theme.palette.brand.darkCoffee,
                color: "white",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                overflow: "hidden",
                marginBottom: 1,
                padding: 1,
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  marginBottom: 1,
                  textAlign: "center",
                }}
              >
                {category.title}
              </Typography>

              {category.image && (
                <Box sx={{ flex: 1, overflow: "hidden" }}>
                  <Box
                    component="img"
                    src={`http://localhost:1337${category.image.url}`}
                    alt={category.image.alternativeText || category.title}
                    sx={{
                      width: "100%",
                      height: "100%",
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
