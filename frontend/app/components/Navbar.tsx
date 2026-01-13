import { Box, IconButton, Typography } from "@mui/material";
import NextLink from "next/link";
import { Link as MuiLink } from "@mui/material";
import Image from "next/image";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

export default function Navbar() {
  const menuLinks = [
    { id: 1, title: "Nyheter", url: "/news" },
    { id: 2, title: "Erbjudanden", url: "/discounts" },
    { id: 3, title: "Te", url: "/tea" },
    { id: 4, title: "Kaffe", url: "/coffee" },
    { id: 5, title: "Övrigt", url: "/categories" },
  ];

  return (
    <Box
      component="nav"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        px: { xs: 2, sm: 4, m: 6 },
        py: 1,
        bgcolor: "brand.whiteSmoke",
      }}
    >
      <Box>
        <MuiLink component={NextLink} href="/">
          <Image
            src="/coffe-time-logo.png"
            height={60}
            width={64}
            alt="Coffee Time Logo"
          />
        </MuiLink>
      </Box>
      <Box sx={{ flex: 1, display: "flex", justifyContent: "center", gap: 3 }}>
        {menuLinks.map(item => (
          <MuiLink
            component={NextLink}
            key={item.id}
            href={item.url}
            variant="navLink"
            style={{ color: "text.primary", textDecoration: "none" }}
          >
            <Typography fontWeight="bold">{item.title}</Typography>
          </MuiLink>
        ))}
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
