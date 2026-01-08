import { Box, Typography, IconButton, Icon } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import { styled } from "@mui/material/styles";

const FooterText = styled(Typography)({
   fontSize
})

export default function Footer() {
	return (
		<Box
			component='footer'
			sx={{ display: "flex", flexDirection: "column", pt: 6, pb: 1, bgcolor: "#fafafa", position: "fixed", bottom: 0, width: "100%" }}>
			<Box sx={{ display: "flex", justifyContent: "space-around" }}>
				<Box sx={{ display: "flex", flexDirection: "column" }}>
					<Typography sx={{ fontSize: "0.9rem" }} variant='h5'>
						CoffeTime
					</Typography>
					<Typography sx={{ fontSize: "0.8rem" }} variant='body1'>
						Adressvägen 123
					</Typography>
					<Typography sx={{ fontSize: "0.8rem" }} variant='body1'>
						123 45 Staden
					</Typography>
					<Typography sx={{ fontSize: "0.8rem" }} variant='body1'>
						Orgnr: 1234 56789
					</Typography>
					<Typography sx={{ fontSize: "0.8rem" }} variant='body1'>
						Tel: 031-26 58 00
					</Typography>
				</Box>
				<Box>
					<Typography variant='h5'>Populärt</Typography>
				</Box>
				<Box>
					<Typography variant='h5'>Support</Typography>
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
			<Box sx={{ display: "flex", justifyContent: "space-around", fontSize: "0.5rem" }}>
				<Typography variant='caption'>C 2026 Grupp 4</Typography>
				<Typography variant='caption'>Köpvillkår</Typography>
				<Typography variant='caption'>Sverige</Typography>
			</Box>
		</Box>
	);
}
