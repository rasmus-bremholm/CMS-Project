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

	const handleChange = (e) => {
		const { name, value } = e.target;

		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
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
					<TextField variant='standard' name='firstName' label='Förnamn' value={formData.firstName} onChange={handleChange} />
					<TextField variant='standard' name='lastName' label='Efternamn' value={formData.lastName} onChange={handleChange} />
					<TextField variant='standard' name='address' label='Adress' value={formData.address} onChange={handleChange} />
					<TextField variant='standard' name='city' label='Stad' value={formData.city} onChange={handleChange} />
					<TextField variant='standard' name='country' label='Land' value={formData.country} onChange={handleChange} />
					<TextField variant='standard' name='phone' label='Telefon' value={formData.phone} onChange={handleChange} />
					<Box sx={{ display: "flex", gap: 2, mt: 2 }}>
						<Button onClick={handleSave} variant='contained'>
							Spara
						</Button>{" "}
						<Button onClick={handleCancel} variant='outlined'>
							Avbryt
						</Button>
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
