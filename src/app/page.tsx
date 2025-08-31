"use client";

import React, { useMemo } from "react";
import Hero from "@/components/Hero";
import SplitStatement from "@/components/SplitStatement";
import ProductsSection from "@/components/ProductsSection";
import Gallery from "@/components/Gallery";
import Ethos from "@/components/Ethos";
import ChooseSection from "@/components/ChooseSection";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import TrustBar from "@/components/TrustBar";
import { useTheme } from "@/components/ui/theme";
import { useCart } from "@/components/ui/cart";
import Testimonials from "@/components/Testimonials";
import { getAllProducts } from "@/data/products";
import type { ProductDetails } from "@/types/product";

function PageContent() {
  const { isDark } = useTheme();
  const { isOpen, closeCart } = useCart();

  // Get all products and transform them for the ProductsSection component
  const allProducts = getAllProducts();
  
  // Transform product data to match ProductsSection expected format
  const transformProduct = (product: ProductDetails) => ({
    id: product.id,
    title: product.title,
    price: product.price,
    tag: product.tag,
    href: `/product/${product.id}`,
    img: product.images.main,
    imgHover: product.images.hover,
  });

  // Memoize products to prevent unnecessary re-renders
  const featured = useMemo(() => {
    // Custom selection of high-quality products for featured section
    const featuredProductIds = [
      "modern-coffee-table", // Keep this one as you like it
      "modular-sofa",        // Premium sofa
      "scandinavian-armchair", // Beautiful armchair
      "modern-desk-chair"    // Ergonomic office chair
    ];
    
    let featuredProducts = allProducts
      .filter(p => featuredProductIds.includes(p.id))
      .slice(0, 4);
    
    // If we don't have enough products, fill with high-rated products
    if (featuredProducts.length < 4) {
      const remainingProducts = allProducts
        .filter(p => !featuredProducts.some(fp => fp.id === p.id))
        .filter(p => p.rating >= 4.8)
        .slice(0, 4 - featuredProducts.length);
      featuredProducts = [...featuredProducts, ...remainingProducts];
    }
    
    return featuredProducts.map(transformProduct);
  }, [allProducts]);
  
  const popular = useMemo(() => {
    // Select products with "Best Seller" tag as popular (avoiding overlap with featured)
    let popularProducts = allProducts
      .filter(p => p.tag === "Best Seller")
      .slice(0, 4);
    
    // If we don't have enough "Best Seller" products, fill with high-rated products
    if (popularProducts.length < 4) {
      const remainingProducts = allProducts
        .filter(p => !popularProducts.some(pp => pp.id === p.id))
        .filter(p => p.rating >= 4.8)
        .slice(0, 4 - popularProducts.length);
      popularProducts = [...popularProducts, ...remainingProducts];
    }
    
    return popularProducts.map(transformProduct);
  }, [allProducts]);

  return (
    <div className={`w-full min-h-screen ${isDark ? "bg-black text-white" : "bg-white text-black"}`}>
      <main>
        <Hero />
        <SplitStatement />
        <ProductsSection title="Featured" products={featured} />
        <Gallery />
        <Testimonials />
        <ProductsSection title="Popular" products={popular} />
        <ChooseSection />
        <Ethos />
        <FAQ />
        <TrustBar />
      </main>
      <Footer />
      <CartDrawer open={isOpen} onClose={closeCart} />
    </div>
  );
}

export default function HomePage() {
  return <PageContent />;
}
