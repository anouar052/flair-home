"use client";
import CartDrawer from "@/components/CartDrawer";
import { useCart } from "@/components/ui/cart";

export default function CartRoot() {
  const { isOpen, closeCart } = useCart();
  return <CartDrawer open={isOpen} onClose={closeCart} />;
}

