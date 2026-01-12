"use client";

import useEmblaCarousel from "embla-carousel-react";
import { Box } from "@mui/material";
import Image from "next/image";

interface CarouselImage {
  id: number;
  url: string;
  alt: string;
}

interface ImageCarouselProps {
  images: CarouselImage[];
}

export default function ImageCarousel({ images }: ImageCarouselProps) {
  const [emblaRef] = useEmblaCarousel({ loop: true });

  return (
    <Box sx={{ overflow: "hidden", width: "100%" }} ref={emblaRef}>
      <Box sx={{ display: "flex" }}>
        {images.map((img) => (
          <Box
            key={img.id}
            sx={{
              flex: "0 0 100%",
              minWidth: 0,
              position: "relative",
              height: "400px",
            }}
          >
            <Image
              src={img.url}
              alt={img.alt}
              fill
              style={{ objectFit: "cover" }}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
}
