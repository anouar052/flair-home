import "./globals.css";
import Script from "next/script";
import type { Metadata } from "next";
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/ui/theme";
import { CartProvider } from "@/components/ui/cart";
import CartRoot from "@/components/CartRoot";
import CookieBar from "@/components/CookieBar";
import ErrorBoundary from "@/components/ErrorBoundary";

export const metadata: Metadata = {
  title: "Flair Home — Furniture & Office",
  description:
    "Home furniture, office furniture, and mattresses. Modern design, built for comfort.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-oid="tqwejzi">
      <body className="antialiased" data-oid="m1fwsto" suppressHydrationWarning>
        <ErrorBoundary>
          <ThemeProvider>
            <CartProvider>
              <Header />
              <CartRoot />
              <div id="smooth-wrapper">
                <div id="smooth-content">
                  {children}
                  <Script
                    type="module"
                    strategy="afterInteractive"
                    src="https://cdn.jsdelivr.net/gh/onlook-dev/onlook@main/apps/web/client/public/onlook-preload-script.js"
                    data-oid="sidiesg"
                  />
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
