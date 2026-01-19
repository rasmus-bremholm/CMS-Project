import { Container, Box, Typography } from "@mui/material";
import AccountDashboard from "./components/AccountDashboard";
import OrderList from "./components/OrderList";
import AdressList from "./components/AdressList";
import FavoritesList from "./components/FavoritesList";
import { getFavorites, getOrders } from "../lib/utils/strapi";
import { AccountPageLocale } from "./lib/AccountDashBoard";
import Greeting from "./components/Greeting";

export default async function AccountPage() {
  const user = {
    id: 1,
    firstName: "Sofia",
    lastName: "Gustavsson",
    email: "sofie@bahnhof.se",
  };

  const orders = await getOrders();
  const favorites = await getFavorites();
  console.log(favorites);

  const currentLocale = "en";

  return (
    <Container maxWidth="lg" sx={{ py: 6, bgcolor: "#CEC5BA" }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Greeting user={user} />
        <Typography variant="caption">{user.email}</Typography>
      </Box>
      <Box sx={{ display: "flex", py: 4, gap: 2 }}>
        <AccountDashboard
          ordersContent={<OrderList orders={orders} />}
          addressContent={<AdressList />}
          favoritesContent={<FavoritesList favorites={favorites} />}
        />
      </Box>
    </Container>
  );
}
