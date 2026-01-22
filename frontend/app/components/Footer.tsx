import { Box, Typography, IconButton, Divider } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import { FooterText, FooterTitle } from "./Footer.styles";
import Link from "next/link";
import { getFooterData } from "../lib/utils/strapi";

export default async function Footer() {
  const { company_info, categories_links, support_links } =
    await getFooterData();

  return (
    <Box
      component="footer"
      sx={{
        display: "flex",
        flexDirection: "column",
        pt: 6,
        pb: 1,
        bgcolor: "brand.carbonBlack",
        //position: "fixed",
        bottom: 0,
        width: "100%",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-around" }}>
        <Box>
          <FooterTitle variant="h5">{company_info.title}</FooterTitle>
          <FooterText variant="body1">{company_info.field1_label}</FooterText>
          <FooterText variant="body1">{company_info.field2_label}</FooterText>
          <FooterText variant="body1">{company_info.field3_label}</FooterText>
          <FooterText variant="body1">{company_info.field4_label}</FooterText>
        </Box>
        <Box>
          <FooterTitle variant="h5">{categories_links.title}</FooterTitle>
          <Link
            href={categories_links.field1_url}
            style={{ textDecoration: "none" }}
          >
            <FooterText variant="body1">
              {categories_links.field1_label}
            </FooterText>
          </Link>
          <Link
            href={categories_links.field2_url}
            style={{ textDecoration: "none" }}
          >
            <FooterText variant="body1">
              {categories_links.field2_label}
            </FooterText>
          </Link>
          <Link
            href={categories_links.field3_url}
            style={{ textDecoration: "none" }}
          >
            <FooterText variant="body1">
              {categories_links.field3_label}
            </FooterText>
          </Link>
          <Link
            href={categories_links.field4_url}
            style={{ textDecoration: "none" }}
          >
            <FooterText variant="body1">
              {categories_links.field4_label}
            </FooterText>
          </Link>
        </Box>
        <Box>
          <FooterTitle variant="h5">{support_links.title}</FooterTitle>
          <Link
            href={support_links.field1_url}
            style={{ textDecoration: "none" }}
          >
            <FooterText variant="body1">
              {support_links.field1_label}
            </FooterText>
          </Link>
          <Link
            href={support_links.field2_url}
            style={{ textDecoration: "none" }}
          >
            <FooterText variant="body1">
              {support_links.field2_label}
            </FooterText>
          </Link>
          <FooterText variant="body1">{support_links.field3_label}</FooterText>
          <FooterText variant="body1">{support_links.field4_label}</FooterText>
        </Box>
      </Box>
      <Divider
        sx={{
          bgcolor: "brand.whiteSmoke",
          width: "95%",
          mt: 4,
          mx: "auto",
        }}
      />
      <Box sx={{ display: "flex", justifyContent: "center", gap: 2, my: 2 }}>
        <IconButton>
          <InstagramIcon sx={{ color: "brand.whiteSmoke" }} />
        </IconButton>
        <IconButton>
          <FacebookIcon sx={{ color: "brand.whiteSmoke" }} />
        </IconButton>
      </Box>
    </Box>
  );
}
