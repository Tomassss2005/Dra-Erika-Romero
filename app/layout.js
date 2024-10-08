import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../pages/inicio";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {

  return (
    <html lang="es">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}