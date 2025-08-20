// Application constants

export const STORAGE_KEYS = {
  THEME: 'flair-theme',
  CART: 'flair-cart',
} as const;

export const DEFAULT_VALUES = {
  THEME: 'dark' as const,
  SCROLL_THRESHOLD: 4,
  DEBOUNCE_DELAY: 300,
  THROTTLE_DELAY: 16, // ~60fps
} as const;

export const ROUTES = {
  HOME: '/',
  CATALOG: '/catalog',
  ABOUT: '/about',
  PRODUCT: '/product',
  JOURNAL: '/en/journal',
  CONTACT: '/contact',
} as const;

export const BREAKPOINTS = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
  '2XL': 1536,
} as const;

export const FEATURED_PRODUCTS = [
  {
    id: "modular-sofa",
    title: "Modular Sofa",
    price: "€ 1,490 EUR",
    href: "/product/modular-sofa",
    img: "https://i.pinimg.com/1200x/4d/a9/6c/4da96cd7dea1d7a3e416bebb96d60de2.jpg",
    imgHover: "https://i.pinimg.com/1200x/79/05/7b/79057b45caa8fd67f00ccfc286ab0dd8.jpg"
  },
  {
    id: "standing-desk",
    title: "Standing Desk",
    price: "€ 650 EUR",
    href: "/product/standing-desk",
    img: "https://i.pinimg.com/1200x/35/67/80/356780261253ea738a55bb830f5b863f.jpg",
    imgHover: "https://i.pinimg.com/1200x/56/0f/7f/560f7f0563be6c1189f8a9c9bf5528d5.jpg"
  },
  {
    id: "ergonomic-chair",
    title: "Ergonomic Office Chair",
    price: "€ 380 EUR",
    href: "/product/ergonomic-office-chair",
    img: "https://i.pinimg.com/1200x/7e/cc/07/7ecc07bad8144596eb5177a4943f5668.jpg",
    imgHover: "https://i.pinimg.com/1200x/8d/0f/a7/8d0fa7fc8e1c0289f7c1de364e6da47a.jpg"
  },
  {
    id: "memory-mattress",
    title: "Memory Foam Mattress",
    price: "€ 990 EUR",
    href: "/product/memory-foam-mattress",
    img: "https://i.pinimg.com/1200x/84/d9/73/84d9739b49e667564a88e57ef0d3385f.jpg",
    imgHover: "https://i.pinimg.com/1200x/d3/58/e9/d358e99d5b4be8f246fe38a2b1eab5b7.jpg"
  }
] as const;

export const NAVIGATION_ITEMS = [
  { href: ROUTES.HOME, label: "Home" },
  { href: ROUTES.CATALOG, label: "Catalog" },
  { href: ROUTES.ABOUT, label: "About" },
  { href: ROUTES.JOURNAL, label: "Journal" },
  { href: ROUTES.CONTACT, label: "Contact" },
] as const;
