"use client";

import { Box, Container, Typography, Paper } from "@mui/material";

interface Category {
  id: number;
  title: string;
  image: string;
}

export default function Categories() {
  const categories = Array.from({ length: 6 }, (_, index) => ({
    id: index + 1,
    title: "Placeholder",
    image: "",
  }));

  return (
    <Container>
      <Paper sx={{ padding: 2, marginBottom: 4 }}>
        <Typography variant="h5" component="h1">
          Kategorier
        </Typography>
      </Paper>

      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        gap={4}
        paddingTop={2}
      >
        {categories.map(category => (
          <Box
            key={category.id}
            sx={{
              width: 200,
              height: 200,
              borderRadius: 1,
              backgroundColor: "#432818",
              color: "white",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
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

            {/* Bild */}
            <Box
              sx={{
                flexGrow: 1,
                width: "100%",
                backgroundColor: "rgba(0,0,0,0.2)",
                borderRadius: 1,
              }}
            />
          </Box>
        ))}
      </Box>
    </Container>
  );
}
