import { Box, Container, Grid, Typography } from "@mui/material";
import { getTestimonials } from "@/app/lib/utils/strapi";

export default async function Testimonials() {
  const testimonials = await getTestimonials();

  return (
    <Box component="section" sx={{ backgroundColor: "#302620", py: 6 }}>
      <Container>
        <Grid container spacing={4} alignItems="stretch" justifyContent="center">
          {testimonials.map((testimonial) => (
            <Grid
              key={testimonial.id}
              size={{ sm: 8, md: 4 }}
            >
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
                      backgroundColor: "#514740",
                      borderRadius: "50%",
                      height: "50px",
                      width: "50px",
                    }}
                  ></Box>
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
