import { Container, Box, Typography } from "@mui/material";
import AccountDashboard from "./components/AccountDashboard";
import { getOrders } from "../lib/utils/strapi";

export default async function AccountPage() {
  const user = {
    id: 1,
    firstName: "Sofia",
    lastName: "Gustavsson",
    email: "sofie@bahnhof.se",
  };

  const orders = await getOrders();
  console.log(orders);

  return (
    <Container maxWidth="lg" sx={{ py: 6, bgcolor: "#CEC5BA" }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography variant="h1">Hej {user.firstName}</Typography>
        <Typography variant="caption">{user.email}</Typography>
      </Box>
      <Box sx={{ display: "flex", py: 4, gap: 2 }}>
        <AccountDashboard orders={orders} />
      </Box>
    </Container>
  );
}
