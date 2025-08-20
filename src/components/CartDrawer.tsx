"use client";
import { Button } from "./ui/Button";
import Link from "next/link";
import { clsx } from "./ui/clsx";
import { useTheme } from "./ui/theme";
import { useCart } from "./ui/cart";
import { useEffect } from "react";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { SafeImage } from "./ui/SafeImage";
import { Input } from "./ui/input";
import { QuantityInput } from "./ui/quantity-input";

export default function CartDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { isDark } = useTheme();
  const { items, removeFromCart, updateQuantity, totalItems, subtotal } = useCart();

  useEffect(() => {
    if (typeof window === "undefined") return;
    const htmlEl = document.documentElement;
    const bodyEl = document.body;
    const smoother = ScrollSmoother.get?.();

    if (open) {
      htmlEl.style.overflow = "hidden";
      bodyEl.style.overflow = "hidden";
      bodyEl.style.overscrollBehavior = "contain";
      // Pause smoother if present to prevent wheel/trackpad motion while drawer is open
      try { smoother?.paused?.(true); } catch {}
    } else {
      htmlEl.style.overflow = "";
      bodyEl.style.overflow = "";
      bodyEl.style.overscrollBehavior = "";
      try { smoother?.paused?.(false); } catch {}
    }

    return () => {
      htmlEl.style.overflow = "";
      bodyEl.style.overflow = "";
      bodyEl.style.overscrollBehavior = "";
      try { smoother?.paused?.(false); } catch {}
    };
  }, [open]);

  const formatPrice = (price: number) => {
    return `€ ${price.toFixed(2)} EUR`;
  };

  return (
    <>
      <div
        className={clsx(
          "fixed inset-0 z-[60] transition-opacity",
          isDark ? "bg-black/50" : "bg-black/40",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        )}
        onClick={onClose}
      />
      <aside
        className={clsx(
          "fixed right-0 top-0 z-[60] h-full w-full max-w-md border-l transition-transform duration-300",
          isDark ? "bg-neutral-950 text-white border-white/10" : "bg-white text-black border-black/10",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className={`flex items-center justify-between px-5 h-16 border-b ${isDark ? "border-white/10" : "border-black/10"}`}>
          <h3 className="text-lg">Bag ({totalItems})</h3>
          <button onClick={onClose} className={isDark ? "text-white/70 hover:text-white" : "text-black/70 hover:text-black"}>Close</button>
        </div>
        
        <div className="flex flex-col h-full">
          {items.length === 0 ? (
            // Empty cart state
            <div className="px-5 py-6 flex flex-col gap-4 flex-1">
              <div className={isDark ? "flex justify-between text-sm text-white/70" : "flex justify-between text-sm text-black/70"}>
                <span>Shipping</span>
                <span>Calculated at checkout</span>
              </div>
              <div className={isDark ? "flex justify-between text-sm text-white/70" : "flex justify-between text-sm text-black/70"}>
                <span>Taxes</span>
                <span>€ 0.00</span>
              </div>
              <div className="flex justify-between text-base">
                <span>Subtotal</span>
                <span>€ 0.00</span>
              </div>
              <Button href="/checkout" variant="white" className="mt-2 justify-center">Checkout</Button>
              <p className={isDark ? "text-sm text-white/60" : "text-sm text-black/60"}>
                Your shopping bag is empty. <Link href="/catalog" className="underline">Shop</Link> new arrivals
              </p>
              <Button href="/catalog" variant="ghost" className={isDark ? "justify-center" : "justify-center text-black hover:bg-black/10"}>Browse Catalog</Button>
            </div>
          ) : (
            // Cart with items
            <>
              <div className="flex-1 overflow-y-auto px-5 py-4">
                {/* Quick checkout button for easy access */}
                          
                <div className="space-y-4">
                  {items.map((item) => (
                    <div key={`${item.id}-${JSON.stringify(item.variants)}`} className="relative flex gap-3 p-3 rounded-lg border border-neutral-200/20">
                      <div className="relative w-20 h-20 flex-shrink-0">
                        <SafeImage
                          src={item.image}
                          alt={item.title}
                          className="object-cover rounded-md"
                          fill
                          sizes="80px"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-sm truncate">{item.title}</h4>
                        {item.variants && Object.keys(item.variants).length > 0 && (
                          <div className="text-xs text-neutral-500 mt-1">
                            {Object.entries(item.variants).map(([key, value]) => (
                              <span key={key} className="block">{key}: {value}</span>
                            ))}
                          </div>
                        )}
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-sm font-medium">{item.price}</span>
                          <div className="flex flex-col items-end gap-2">
                            <QuantityInput
                              quantity={item.quantity}
                              onDecrease={() => updateQuantity(item.id, item.quantity - 1)}
                              onIncrease={() => updateQuantity(item.id, item.quantity + 1)}
                              onQuantityChange={(value) => updateQuantity(item.id, value)}
                            />
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="text-red-600 hover:text-red-700 text-sm font-medium transition-colors"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Cart summary */}
              <div className={`border-t border-neutral-200/20 px-5 py-6 pb-20 space-y-4 rounded-t-lg ${isDark ? "bg-white/5" : "bg-black/5"}`}>
                <div className={isDark ? "flex justify-between text-sm text-white/70" : "flex justify-between text-sm text-black/70"}>
                  <span>Shipping</span>
                  <span>Calculated at checkout</span>
                </div>
                <div className={isDark ? "flex justify-between text-sm text-white/70" : "flex justify-between text-sm text-black/70"}>
                  <span>Taxes</span>
                  <span>€ 0.00</span>
                </div>
                <div className="flex justify-between text-base font-medium">
                  <span>Subtotal</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
                <Button href="/checkout" variant="white" className="w-full justify-center py-3 text-base font-medium">Proceed to Checkout</Button>
              </div>
            </>
          )}
        </div>
      </aside>
    </>
  );
}
