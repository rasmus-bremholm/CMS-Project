import { Box, IconButton, Typography } from "@mui/material";
import NextLink from "next/link";
import { Link as MuiLink } from "@mui/material";
import Image from "next/image";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import LanguageToggle from "./LanguageToggle";
import { getHeaderData } from "../lib/utils/strapi";
import { rootUrl } from "../lib/utils/strapi";

export default async function Navbar() {
  const data = await getHeaderData();
  const menuLinks = data.nav_links;

  return (
    <Box
      component="nav"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        px: { xs: 2, sm: 4, md: 6 },
        py: 1,
        bgcolor: "brand.whiteSmoke",
      }}
    >
      <Box>
        <MuiLink component={NextLink} href="/">
          <Image
            src={`${rootUrl}${data.logo.url}`}
            height={60}
            width={64}
            alt={data.logo.alternativeText}
          />
        </MuiLink>
      </Box>
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          gap: 3,
        }}
      >
        {menuLinks.map(item => {
          const isKategorier =
            item.label === "KATEGORIER" || item.label === "Kategorier";

          return (
            <MuiLink
              component={NextLink}
              key={item.id}
              href={item.url}
              variant="navLink"
              sx={{
                display: {
                  xs: isKategorier ? "block" : "none",
                  sm: "block",
                },
                color: "text.primary",
                textDecoration: "none",
              }}
            >
              <Typography fontWeight="bold">{item.label}</Typography>
            </MuiLink>
          );
        })}
      </Box>

      <Box mr={2}>
        <LanguageToggle />
      </Box>

      <Box>
        <IconButton
          LinkComponent={NextLink}
          href="/account"
          aria-label="Go to Account Page"
        >
          <AccountCircleOutlinedIcon sx={{ color: "text.primary" }} />
        </IconButton>
        <IconButton
          LinkComponent={NextLink}
          href="/cart"
          aria-label="View your Cart"
        >
          <ShoppingCartOutlinedIcon sx={{ color: "text.primary" }} />
        </IconButton>
      </Box>
    </Box>
  );
}
