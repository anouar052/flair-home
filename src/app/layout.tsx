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

// Runs before first paint. Records the visitor's theme on <html>; light-mode visitors get the
// page held back until the theme provider has applied their theme, so the dark server markup
// is never shown to them. The timeout releases the page if scripts fail to load.
const themeBootScript = `(function(){try{var t=localStorage.getItem('flair-theme');var d=t?t==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;var r=document.documentElement;r.dataset.theme=d?'dark':'light';r.style.colorScheme=d?'dark':'light';if(!d){r.setAttribute('data-theme-pending','');setTimeout(function(){r.removeAttribute('data-theme-pending')},4000)}}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <style dangerouslySetInnerHTML={{ __html: "html[data-theme-pending]{visibility:hidden}" }} />
        <script dangerouslySetInnerHTML={{ __html: themeBootScript }} />
      </head>
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
