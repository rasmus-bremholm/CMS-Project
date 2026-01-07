import { Box, IconButton } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function Navbar() {
	const menuLinks = [
		{ id: 1, title: "Nyheter", url: "/news" },
		{ id: 2, title: "Erbjudanden", url: "/discounts" },
		{ id: 3, title: "Te", url: "/tea" },
		{ id: 4, title: "Kaffe", url: "/coffee" },
		{ id: 5, title: "Övrigt", url: "/categories" },
	];

	return (
		<Box component='nav' sx={{ display: "flex", justifyContent: "center", alignItems: "center", px: 2, py: 1, fontSize: 24 }}>
			<Box>
				<Link href='/'>
					<Image src='/coffe-time-logo.png' height={70} width={74} alt='Coffee Time Logo' />
				</Link>
			</Box>
			<Box sx={{ flex: 1, display: "flex", justifyContent: "center", gap: 3 }}>
				{menuLinks.map((item) => (
					<Link key={item.id} href={item.url}>
						{item.title}
					</Link>
				))}
			</Box>
			<Box>
				<IconButton LinkComponent={Link} href='/account' aria-label='Go to Account Page'>
					<AccountCircleIcon sx={{ color: "#fafafa" }} />
				</IconButton>
				<IconButton LinkComponent={Link} href='/cart' aria-label='View your Cart'>
					<ShoppingCartIcon sx={{ color: "#fafafa" }} />
				</IconButton>
			</Box>
		</Box>
	);
}
