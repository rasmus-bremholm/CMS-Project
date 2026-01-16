import { Box, Typography, Divider } from "@mui/material";

export default function OrderList({ mockOrders }) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      {mockOrders.map(order => (
        <Box
          key={order.id}
          sx={{
            border: "1px solid #454444",
            p: 2,
            borderRadius: 2,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography variant="h5">Order: #{order.orderNumber}</Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Typography variant="caption">
              {order.order_items.length} produkter
            </Typography>
            <Divider orientation="vertical" />
            <Typography variant="caption">{order.orderTime}</Typography>
            <Typography variant="caption">{order.orderDate}</Typography>
          </Box>
          <Typography variant="caption">Status: {order.orderStatus}</Typography>
          <Typography variant="caption">
            Leveransdag: {order.deliveryDate}
          </Typography>
          <Typography variant="caption">Totalt: {order.total}</Typography>
        </Box>
      ))}
    </Box>
  );
}
