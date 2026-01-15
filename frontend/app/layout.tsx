import { Inter, Merriweather } from "next/font/google";
import "./globals.css";
import Important from "./important";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ThemeRegistry from "./lib/theme/ThemeRegistry";
import { CartProvider } from "./context/CartContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "Coffee Time",
  description: "The only place for Tea & Coffee blends",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${merriweather.variable}`}>
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
