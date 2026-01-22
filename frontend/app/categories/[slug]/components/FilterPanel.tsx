"use client";

import { useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Box, Checkbox, Chip, Divider, FormControlLabel } from "@mui/material";

export default function FilterPanel({ tags }) {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const [showFilters, setShowFilters] = useState(false);

  const handleToggle = () => {
    setShowFilters(prev => !prev);
  };

  const handleFilterChange = (tag: string) => {
    const params = new URLSearchParams(searchParams);

    console.log("params", params);
    console.log("pathname", pathname);
    if (params.has("tag", tag)) {
      params.delete("tag", tag);
    } else {
      params.append("tag", tag);
    }

    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Box
        sx={{
          display: { xs: showFilters ? "flex" : "none", md: "flex" },
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
        }}
      >
        {tags.map(tag => (
          <FormControlLabel
            key={tag.id}
            control={
              <Checkbox
                onClick={() => handleFilterChange(tag.slug)}
                sx={{ "& .MuiSvgIcon-root": { fontSize: 16 } }}
              />
            }
            label={tag.title}
          />
        ))}
      </Box>
      <Divider>
        <Chip label="Filter" size="small" onClick={handleToggle} />
      </Divider>
    </Box>
  );
}
