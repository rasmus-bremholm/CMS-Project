import { Box, Typography, Divider } from "@mui/material";
import { Order } from "@/types/order"; // Import your Order type

interface OrderListProps {
  orders: Order[];
}

export default function OrderList({ orders }: OrderListProps) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      {orders.map(order => (
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
            <Typography variant="caption">
              {new Date(order.orderDate).toLocaleDateString("sv-SE")}
            </Typography>
          </Box>
          <Typography variant="caption">Status: {order.orderStatus}</Typography>
          <Typography variant="caption">
            Leveransdag:{" "}
            {order.deliveryDate
              ? new Date(order.deliveryDate).toLocaleDateString("sv-SE")
              : "Ej satt"}
          </Typography>

          {/* List products */}
          <Box sx={{ mt: 2 }}>
            {order.order_items.map(item => (
              <Typography key={item.id} variant="body2">
                {item.quantity}x {item.product?.title || "Borttagen produkt"} -{" "}
                {item.product?.price || 0} kr
              </Typography>
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  );
}
