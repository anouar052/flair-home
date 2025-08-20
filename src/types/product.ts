// Shared product types

export interface ProductVariant {
  name: string;
  options: string[];
  selected: string;
}

export interface ProductSpecification {
  label: string;
  value: string;
}

export interface ProductImages {
  main: string;
  hover: string;
  gallery: string[];
}

export interface RelatedProduct {
  id: string;
  title: string;
  price: string;
  img: string;
  href: string;
}

export interface ProductDetails {
  id: string;
  title: string;
  subtitle: string;
  price: string;
  description: string;
  features: string[];
  specifications: ProductSpecification[];
  images: ProductImages;
  inStock: boolean;
  rating: number;
  reviewCount: number;
  tag?: string;
  variants: ProductVariant[];
  relatedProducts: RelatedProduct[];
}

// For product listings/cards
export interface ProductCard {
  id: string;
  title: string;
  price: string;
  href: string;
  img: string;
  imgHover?: string;
  tag?: string;
  inStock?: boolean;
  rating?: number;
}

// Cart item type
export interface CartItem {
  id: string;
  title: string;
  price: string;
  image: string;
  quantity: number;
  variants?: Record<string, string>;
}
