import { Box, Typography, Divider } from "@mui/material";

export default async function OrderList() {
  const response = await fetch(
    `http://localhost:1337/api/orders/?populate[order_items][populate]=product`
  );

  const mockOrders = await response.json();
  console.log(mockOrders);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      {mockOrders.map(order => (
        <Box
          key={order.nr}
          sx={{
            border: "1px solid #454444",
            p: 2,
            borderRadius: 2,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography variant="h5">Order #{order.nr}</Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Typography variant="caption">
              {order.numProducts} produkter
            </Typography>
            <Divider orientation="vertical" />
            <Typography variant="caption">{order.orderTime}</Typography>
            <Typography variant="caption">{order.orderDate}</Typography>
          </Box>
          <Typography variant="caption">Status: {order.status}</Typography>
          <Typography variant="caption">
            Leveransdag: {order.deliveredDate}
          </Typography>
          <Typography variant="caption">Totalt: {order.total}</Typography>
        </Box>
      ))}
    </Box>
  );
}
