"use client";

import { JSX, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Box,
  Button,
  Container,
  Link,
  TextField,
  Typography,
  Paper,
} from "@mui/material";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);

  const router = useRouter();

  const handleSuccess = () => {
    router.push("/account");
  };

  return (
    <Container maxWidth="sm">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="70vh"
      >
        <Paper elevation={3} sx={{ padding: 4, width: 350 }}>
          <Typography variant="h5" component="h1" sx={{ marginBottom: 2 }}>
            {isLogin ? "Logga in" : "Skapa konto"}
          </Typography>

          {isLogin ? (
            <LoginForm onSuccess={handleSuccess} />
          ) : (
            <RegisterForm onSuccess={handleSuccess} />
          )}

          <Typography variant="body2" align="center" sx={{ marginTop: 2 }}>
            {isLogin ? (
              <>
                Har du inget konto?{" "}
                <Link component="button" onClick={() => setIsLogin(false)}>
                  Skapa nytt konto
                </Link>
              </>
            ) : (
              <>
                Har du redan ett konto?{" "}
                <Link component="button" onClick={() => setIsLogin(true)}>
                  Logga in
                </Link>
              </>
            )}
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
}
