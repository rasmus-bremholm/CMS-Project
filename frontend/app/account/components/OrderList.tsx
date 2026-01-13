import { Box, Typography, Divider } from "@mui/material";

export default function OrderList() {
	const mockOrders = [
		{ nr: 123, numProducts: 4, orderTime: "13:37", orderDate: "Dec 18 2025", status: "Delivered", deliveredDate: "Dec 24 2025", total: "$1337" },
		{ nr: 456, numProducts: 4, orderTime: "13:37", orderDate: "Dec 18 2025", status: "Delivered", deliveredDate: "Dec 24 2025", total: "$1337" },
	];
	return (
		<Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
			{mockOrders.map((order) => (
				<Box key={order.nr} sx={{ border: "1px solid #454444", p: 2, borderRadius: 2, display: "flex", flexDirection: "column" }}>
					<Typography variant='h5'>Order #{order.nr}</Typography>
					<Box sx={{ display: "flex", gap: 2 }}>
						<Typography variant='caption'>{order.numProducts} produkter</Typography>
						<Divider orientation='vertical' />
						<Typography variant='caption'>{order.orderTime}</Typography>
						<Typography variant='caption'>{order.orderDate}</Typography>
					</Box>
					<Typography variant='caption'>Status: {order.status}</Typography>
					<Typography variant='caption'>Leveransdag: {order.deliveredDate}</Typography>
					<Typography variant='caption'>Totalt: {order.total}</Typography>
				</Box>
			))}
		</Box>
	);
}
