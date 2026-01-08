import { Box, Typography, IconButton, Icon } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

export default function Footer() {
	return (
		<Box component='footer' sx={{ display: "flex", flexDirection: "column", pt: 6, pb: 1, bgcolor: "#fafafa" }}>
			<Box sx={{ display: "flex", justifyContent: "space-around" }}>
				<Box>
					<Typography variant='h5'>Shop</Typography>
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
