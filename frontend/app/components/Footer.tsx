import { Box, Typography, IconButton, Divider } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import { FooterText, FooterTitle } from "./Footer.styles";

export default function Footer() {
	return (
		<Box
			component='footer'
			sx={{ display: "flex", flexDirection: "column", pt: 6, pb: 1, bgcolor: "#fafafa", position: "fixed", bottom: 0, width: "100%" }}>
			<Box sx={{ display: "flex", justifyContent: "space-around" }}>
				<Box sx={{ display: "flex", flexDirection: "column" }}>
					<FooterTitle variant='h5'>CoffeTime</FooterTitle>
					{/* Självklart mappar ja igenom denna sen när vi har data */}
					<FooterText variant='body1'>Adressvägen 123</FooterText>
					<FooterText variant='body1'>123 45 Staden</FooterText>
					<FooterText variant='body1'>Orgnr: 1234 56789</FooterText>
					<FooterText variant='body1'>Tel: 031-26 58 00</FooterText>
				</Box>
				<Box>
					<FooterTitle variant='h5'>Populärt</FooterTitle>
					<FooterText>Kaffe</FooterText>
					<FooterText>Te</FooterText>
					<FooterText>Matcha</FooterText>
					<FooterText>Choklad</FooterText>
				</Box>
				<Box>
					<FooterTitle variant='h5'>Support</FooterTitle>
					<FooterText>Kontakt</FooterText>
					<FooterText>Ditt Konto</FooterText>
					<FooterText>Karriär</FooterText>
					<FooterText>Returer</FooterText>
				</Box>
			</Box>
			<Box sx={{ display: "flex", justifyContent: "center", gap: 2, my: 2 }}>
				<IconButton>
					<InstagramIcon />
				</IconButton>
				<IconButton>
					<FacebookIcon />
				</IconButton>
			</Box>
			<Divider sx={{ color: "#131313", width: "95%", mb: 1 }} />
			<Box sx={{ display: "flex", justifyContent: "space-around", fontSize: "0.5rem" }}>
				<Typography variant='caption'>C 2026 Grupp 4</Typography>
				<Typography variant='caption'>Köpvillkår</Typography>
				<Typography variant='caption'>Sverige</Typography>
			</Box>
		</Box>
	);
}
