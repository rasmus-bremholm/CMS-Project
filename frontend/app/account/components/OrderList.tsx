import { Box, Typography } from "@mui/material";

export default function OrderList() {
	const mockOrders = [
		{ nr: 123, numProducts: 4, orderTime: "13:37", orderDate: "Dec 18 2025", status: "Delivered", deliveredDate: "Dec 24 2025", total: "$1337" },
		{ nr: 456, numProducts: 4, orderTime: "13:37", orderDate: "Dec 18 2025", status: "Delivered", deliveredDate: "Dec 24 2025", total: "$1337" },
	];
	return (
		<Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
			{mockOrders.map((order) => (
				<Box key={order.nr} sx={{ border: "1px solid #454444", p: 2, borderRadius: 1 }}>
					<Typography>Order #{order.nr}</Typography>
				</Box>
			))}
		</Box>
	);
}
