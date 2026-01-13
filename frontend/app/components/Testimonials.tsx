import { Box, Container, Grid, Typography } from "@mui/material";

export default function Testimonials() {
  return (
    <Box component="section" sx={{ backgroundColor: "#302620", py: 6 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center" justifyContent="center">
          <Grid size={{ xs: 12, md: 3 }}>
            <Box
              sx={{
                backgroundColor: "#46382f",
                borderRadius: "1rem",
                boxShadow: 3,
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                color: "#d2cbc6",
                gap: 3,
                px: 4,
                py: 2,
              }}
            >
              <Typography variant="body2" component="q">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.
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
                  <Typography variant="body1" component="h4" fontWeight="bold">
                    John Doe
                  </Typography>
                  <Typography variant="body1" component="h5">
                    Business
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
