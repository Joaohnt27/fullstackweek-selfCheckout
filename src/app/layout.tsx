import "./globals.css";

import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import { CartProvider } from "./[slug]/menu/components/contexts/cart";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "McDonald´s | Self-checkout",
  description: "Versão 0.0.1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
