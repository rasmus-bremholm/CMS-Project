import Image from "next/image";
import { Box, Container, Grid, Typography } from "@mui/material";
import { rootUrl } from "@/app/lib/utils/strapi";

// Types
import { TestimonialTypes } from "@/types/testimonial";

interface TestimonialProps {
  data: TestimonialTypes[];
}

export default async function Testimonials({ data }: TestimonialProps) {
  return (
    <Box component="section" sx={{ backgroundColor: "#302620", py: 8 }}>
      <Container>
        <Grid
          container
          spacing={4}
          alignItems="stretch"
          justifyContent="center"
        >
          {data.map(testimonial => (
            <Grid key={testimonial.id} size={{ sm: 8, md: 4 }}>
              <Box
                sx={{
                  backgroundColor: "#46382f",
                  borderRadius: "1rem",
                  boxShadow: 3,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  color: "#d2cbc6",
                  gap: 3,
                  height: "100%",
                  width: "100%",
                  px: 4,
                  py: 2,
                }}
              >
                <Typography variant="body2" component="q">
                  {testimonial.testimonial}
                </Typography>
                <Box sx={{ display: "flex", gap: 2 }}>
                  <Box
                    sx={{
                      aspectRatio: "1/1",
                      backgroundColor: "#514740",
                      borderRadius: "50%",
                      height: "50px",
                      overflow: "hidden",
                      position: "relative",
                      width: "50px",
                    }}
                  >
                    <Image
                      fill
                      src={`${rootUrl}${testimonial.avatar.url}`}
											sizes="50px"
                      alt={testimonial.avatar.alternativeText}
                    />
                  </Box>
                  <Box>
                    <Typography
                      variant="body1"
                      component="h4"
                      fontWeight="bold"
                    >
                      {testimonial.author}
                    </Typography>
                    <Typography variant="body1" component="h5">
                      {testimonial.title}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
