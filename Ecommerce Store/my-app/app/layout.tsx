import "./globals.css";
import { CartProvider } from './context/CartContext';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
