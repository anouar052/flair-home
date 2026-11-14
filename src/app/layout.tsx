import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/ui/theme";
import { CartProvider } from "@/components/ui/cart";
import CartRoot from "@/components/CartRoot";
import CookieBar from "@/components/CookieBar";
import ErrorBoundary from "@/components/ErrorBoundary";
import ScrollSmootherProvider from "@/components/ScrollSmootherProvider";

export const metadata: Metadata = {
  title: "Flair Home — Furniture & Office",
  description:
    "Home furniture, office furniture, and mattresses. Modern design, built for comfort.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased" suppressHydrationWarning>
        <ErrorBoundary>
          <ThemeProvider>
            <CartProvider>
              <ScrollSmootherProvider />
              <Header />
              <CartRoot />
              <div id="smooth-wrapper">
                <div id="smooth-content">
                  {children}
                </div>
              </div>
              <CookieBar />
            </CartProvider>
          </ThemeProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
