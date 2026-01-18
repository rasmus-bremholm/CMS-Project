"use client";

import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Box, IconButton } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import Image from "next/image";
import { rootUrl } from "@/app/lib/utils/strapi";

//Types
import { CarouselImage } from "@/types/carousel";

interface ImageCarouselProps {
  images: CarouselImage[];
}

export default function ImageCarousel({ images }: ImageCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const handlePrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const handleNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <Box
      sx={{ overflow: "hidden", position: "relative", width: "100%" }}
      ref={emblaRef}
    >
      {/* Viewport */}
      <Box sx={{ display: "flex" }}>
        {images.map((img) => (
          <Box
            key={img.documentId}
            sx={{
              flex: "0 0 100%",
              minWidth: 0,
              position: "relative",
              height: "400px",
            }}
          >
            <Image
              src={`${rootUrl}${img.url}`}
              alt={img.alternativeText}
              fill
              style={{ objectFit: "cover" }}
            />
          </Box>
        ))}
      </Box>

      {/* Prev/Next buttons */}
      <IconButton
        onClick={handlePrev}
        sx={{
          backgroundColor: "rgba(0,0,0,0.3)",
          color: "rgba(255,255,255,0.9)",
          left: "1em",
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 2,
          "&:hover": { backgroundColor: "rgba(0,0,0,0.5)" },
        }}
      >
        <ChevronLeft />
      </IconButton>

      <IconButton
        onClick={handleNext}
        sx={{
          backgroundColor: "rgba(0,0,0,0.3)",
          color: "rgba(255,255,255,0.9)",
          right: "1em",
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 2,
          "&:hover": { backgroundColor: "rgba(0,0,0,0.5)" },
        }}
      >
        <ChevronRight />
      </IconButton>
    </Box>
  );
}
