"use client";
import { Box, Typography, IconButton, TextField, Button } from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { useState } from "react";
export default function AdressList() {
	const [editMode, setEditMode] = useState(false);
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		address: "",
		city: "",
		country: "",
		phone: "",
	});

	const handleSave = () => {
		// SPARA
		setEditMode(false);
	};

	const handleCancel = () => {
		// AVBRYT
		setFormData({
			firstName: "",
			lastName: "",
			address: "",
			city: "",
			country: "",
			phone: "",
		});
		setEditMode(false);
	};

	return (
		<Box sx={{ border: "1px solid #454444", p: 2, borderRadius: 2, display: "flex", flexDirection: "column", gap: 1, position: "relative" }}>
			<Box sx={{ position: "absolute", top: 8, right: 8 }}>
				<IconButton onClick={() => setEditMode(!editMode)}>
					<EditOutlinedIcon />
				</IconButton>
			</Box>
			{editMode ? (
				<>
					<TextField variant='standard' label='Förnamn' />
					<TextField variant='standard' label='Efternamn' />
					<TextField variant='standard' label='Adress' />
					<TextField variant='standard' label='Stad' />
					<TextField variant='standard' label='Land' />
					<TextField variant='standard' label='Telefon' />
					<Box sx={{ display: "flex" }}>
						<Button>Spara</Button> <Button>Avbryt</Button>
					</Box>
				</>
			) : (
				<>
					<Typography>Förnamn: </Typography>
					<Typography>Efternamn: </Typography>
					<Typography>Adress: </Typography>
					<Typography>Stad: </Typography>
					<Typography>Postkod: </Typography>
					<Typography>Land: </Typography>
					<Typography>Telefon: </Typography>
				</>
			)}
		</Box>
	);
}
