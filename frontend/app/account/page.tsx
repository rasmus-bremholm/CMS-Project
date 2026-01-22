import { Container, Box, Typography } from "@mui/material";
import AccountDashboard from "./components/AccountDashboard";
import OrderList from "./components/OrderList";
import AdressList from "./components/AdressList";
import FavoritesList from "./components/FavoritesList";
import { getCurrentUser, getFavorites, getOrders } from "../lib/utils/strapi";
import { AccountPageLocale } from "./lib/AccountDashBoard";
import Greeting from "./components/Greeting";
import { Favorite } from "@/types/favorite";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { User } from "@/types/user";

export default async function AccountPage() {
  const cookieStore = await cookies();
  const jwt = cookieStore.get("strapi_jwt")?.value;

  if (!jwt) {
    redirect("/login");
  }

  const user: User = await getCurrentUser(jwt);
  console.log("User:", user);

  const orders = await getOrders();
  const favorites: Favorite[] = await getFavorites();

  const currentLocale = "en";

  return (
    <Box sx={{ backgroundColor: "brand.silver", padding: 4 }}>
      <Container maxWidth="lg" sx={{ py: 6 }}>
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
    </Box>
  );
}
