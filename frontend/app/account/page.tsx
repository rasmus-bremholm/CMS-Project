import { Container, Box, Typography } from "@mui/material";
import AccountDashboard from "./components/AccountDashboard";

export default function AccountPage() {
  const user = {
    id: 1,
    firstName: "Sofia",
    lastName: "Gustavsson",
    email: "sofie@bahnhof.se",
  };

  return (
    <Container maxWidth="lg" sx={{ py: 6, bgcolor: "#CEC5BA" }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography variant="h1">Hej {user.firstName}</Typography>
        <Typography variant="caption">{user.email}</Typography>
      </Box>
      <Box sx={{ display: "flex", py: 4, gap: 2 }}>
        <AccountDashboard />
      </Box>
    </Container>
  );
}
