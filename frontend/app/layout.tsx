import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Important from "./important";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ThemeRegistry from "./lib/theme/ThemeRegistry";
import { CartProvider } from "./cart/lib/CartContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Coffee Time",
  description: "The only place for Tea & Coffee blends",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ThemeRegistry>
          <CartProvider>
            <Navbar />
            {children}
            <Footer />
          </CartProvider>
        </ThemeRegistry>
      </body>
    </html>
  );
}
