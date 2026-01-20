"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Box, Checkbox, FormControlLabel, Typography } from "@mui/material";

export default function FilterPanel({ tags }) {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Typography>Filter:</Typography>
      </Box>
      {tags.map(tag => (
        <FormControlLabel
          key={tag.id}
          control={
            <Checkbox
              sx={{ "& .MuiSvgIcon-root": { fontSize: 16 } }}
            />
          }
          label={tag.title}
        />
      ))}
    </Box>
  );
}
