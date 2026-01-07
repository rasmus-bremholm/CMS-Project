"use client";

import { Box, Typography } from "@mui/material";

export default function ContactCard() {
  return (
    <>
      <Box
        sx={{
          minWidth: 100,
          minHeight: { xs: 200, md: 350 },
          height: "100%",
          maxHeight: "62vh",
          overflowY: "auto",
          scrollbarWidth: "none",
          borderRadius: 3,
          px: { xs: 2, md: 1, lg: 2 },
          py: 2,
          transition: "all 0.2s",
        }}
      >
        <Typography>Test</Typography>
      </Box>
    </>
  );
}
