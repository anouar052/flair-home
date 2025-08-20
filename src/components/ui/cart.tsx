"use client";
import React, { createContext, useCallback, useContext, useMemo, useState, useEffect } from "react";
import type { CartItem } from "@/types/product";
import { storage, parsePriceToNumber } from "@/lib/utils";
import { STORAGE_KEYS } from "@/constants";

interface CartContextValue {
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  items: CartItem[];
  addToCart: (item: Omit<CartItem, 'quantity'>, quantity?: number) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  subtotal: number;
}

const CartContext = createContext<CartContextValue | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  // NOTE: Avoid reading localStorage during initial render to prevent hydration mismatch
  const [items, setItems] = useState<CartItem[]>([]);

  // Load cart items from localStorage after mount
  useEffect(() => {
    const saved = storage.getItem(STORAGE_KEYS.CART);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        // Validate the structure
        if (Array.isArray(parsed)) {
          setItems(parsed);
        }
      } catch (error) {
        console.error('Failed to parse cart data:', error);
        storage.removeItem(STORAGE_KEYS.CART);
      }
    }
  }, []);

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);
  const toggleCart = useCallback(() => setIsOpen((v) => !v), []);

  // Save cart items to localStorage whenever they change
  useEffect(() => {
    storage.setItem(STORAGE_KEYS.CART, JSON.stringify(items));
  }, [items]);

  const addToCart = useCallback((newItem: Omit<CartItem, 'quantity'>, quantity: number = 1) => {
    setItems(prevItems => {
      const matchIndex = prevItems.findIndex(item => 
        item.id === newItem.id && 
        JSON.stringify(item.variants || {}) === JSON.stringify(newItem.variants || {})
      );
      if (matchIndex !== -1) {
        const updated = [...prevItems];
        updated[matchIndex] = { ...updated[matchIndex], quantity: updated[matchIndex].quantity + quantity };
        return updated;
      }
      return [...prevItems, { ...newItem, quantity }];
    });
    setIsOpen(true); // Open cart when item is added
  }, []);

  const removeFromCart = useCallback((id: string) => {
    setItems(prevItems => prevItems.filter(item => item.id !== id));
  }, []);

  const updateQuantity = useCallback((id: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }
    setItems(prevItems => 
      prevItems.map(item => 
        item.id === id ? { ...item, quantity } : item
      )
    );
  }, [removeFromCart]);

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const totalItems = useMemo(() => 
    items.reduce((total, item) => total + item.quantity, 0), 
    [items]
  );

  const subtotal = useMemo(() => 
    items.reduce((total, item) => {
      const price = parsePriceToNumber(item.price);
      return total + (price * item.quantity);
    }, 0), 
    [items]
  );

  const value = useMemo(
    () => ({ 
      isOpen, 
      openCart, 
      closeCart, 
      toggleCart, 
      items, 
      addToCart, 
      removeFromCart, 
      updateQuantity, 
      clearCart, 
      totalItems, 
      subtotal 
    }),
    [isOpen, openCart, closeCart, toggleCart, items, addToCart, removeFromCart, updateQuantity, clearCart, totalItems, subtotal],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextValue {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
