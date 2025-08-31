"use client";
import React, { useState } from "react";
import { Reveal } from "./ui/Reveal";
import { useTheme } from "./ui/theme";
import { SafeImage } from "./ui/SafeImage";
import { Button } from "./ui/Button";
import { clsx } from "./ui/clsx";
import { useCart } from "./ui/cart";
import FAQ from "./FAQ";
import Footer from "./Footer";

export type ProductDetails = {
  id: string;
  title: string;
  subtitle: string;
  price: string;
  originalPrice?: string;
  description: string;
  features: string[];
  specifications: { label: string; value: string }[];
  images: {
    main: string;
    hover: string;
    gallery: string[];
  };
  tag?: string;
  inStock: boolean;
  rating: number;
  reviewCount: number;
  variants?: {
    name: string;
    options: string[];
    selected?: string;
  }[];
  relatedProducts: {
    id: string;
    title: string;
    price: string;
    img: string;
    href: string;
  }[];
};

export default function ProductPage({ product }: { product: ProductDetails }) {
  const { isDark } = useTheme();
  const { addToCart } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariants, setSelectedVariants] = useState<Record<string, string>>({});
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'description' | 'features' | 'specs'>('description');
  const [showAddedMessage, setShowAddedMessage] = useState(false);

  const formatEta = () => {
    const date = new Date();
    date.setDate(date.getDate() + 4);
    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${weekdays[date.getDay()]} ${date.getDate()} ${months[date.getMonth()]}`;
  };

  const handleVariantChange = (variantName: string, value: string) => {
    setSelectedVariants(prev => ({ ...prev, [variantName]: value }));
  };

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.images.main,
      variants: selectedVariants,
    }, quantity);
    
    // Show success message
    setShowAddedMessage(true);
    setTimeout(() => setShowAddedMessage(false), 2000);
  };

  const handleBuyNow = () => {
    // Buy now logic here
    console.log("Buying now:", { product, selectedVariants, quantity });
  };

  const isDiscounted = product.originalPrice && product.originalPrice !== product.price;

  return (
    <div className={`${isDark ? "bg-black text-white" : "bg-white text-black"} min-h-screen pt-16 md:pt-20`}>
      {/* Breadcrumb */}
      <div className="border-b border-neutral-800/20">
        <div className="mx-auto max-w-7xl px-4 md:px-6 py-4">
          <nav className="flex items-center space-x-2 text-sm">
            <a href="/" className={`${isDark ? "text-white/60 hover:text-white" : "text-black/60 hover:text-black"} transition-colors`}>
              Home
            </a>
            <span className={isDark ? "text-white/40" : "text-black/40"}>/</span>
            <a href="/catalog" className={`${isDark ? "text-white/60 hover:text-white" : "text-black/60 hover:text-black"} transition-colors`}>
              Catalog
            </a>
            <span className={isDark ? "text-white/40" : "text-black/40"}>/</span>
            <span className={isDark ? "text-white" : "text-black"}>{product.title}</span>
          </nav>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 md:px-6 py-8 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Product Images */}
          <div className="space-y-6">
            <Reveal>
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
                <SafeImage
                  src={selectedImage === 0 ? product.images.main : product.images.gallery[selectedImage - 1]}
                  alt={product.title}
                  className="object-cover animate-zoom-slow"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
                {product.tag && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 text-black px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wide">
                      {product.tag}
                    </span>
                  </div>
                )}
              </div>
            </Reveal>

            {/* Image Gallery */}
            <Reveal delay={100}>
              <div className="grid grid-cols-5 gap-3">
                <button
                  onClick={() => setSelectedImage(0)}
                  className={clsx(
                    "relative aspect-square overflow-hidden rounded-lg transition-all duration-300",
                    selectedImage === 0
                      ? "ring-2 ring-white ring-offset-2 ring-offset-black"
                      : "hover:scale-105"
                  )}
                >
                  <SafeImage
                    src={product.images.main}
                    alt={product.title}
                    className="object-cover"
                    fill
                    sizes="(min-width: 1024px) 10vw, 20vw"
                  />
                </button>
                {product.images.gallery.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index + 1)}
                    className={clsx(
                      "relative aspect-square overflow-hidden rounded-lg transition-all duration-300",
                      selectedImage === index + 1
                        ? "ring-2 ring-white ring-offset-2 ring-offset-black"
                        : "hover:scale-105"
                    )}
                  >
                    <SafeImage
                      src={img}
                      alt={`${product.title} ${index + 1}`}
                      className="object-cover"
                      fill
                      sizes="(min-width: 1024px) 10vw, 20vw"
                    />
                  </button>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            <Reveal>
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-light tracking-tight leading-tight">
                  {product.title}
                </h1>
                <p className={`text-xl ${isDark ? "text-white/70" : "text-black/70"} leading-relaxed`}>
                  {product.subtitle}
                </p>
              </div>
            </Reveal>

            {/* Rating */}
            <Reveal delay={100}>
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={clsx(
                        "w-5 h-5",
                        i < Math.floor(product.rating)
                          ? "text-yellow-400 fill-current"
                          : i < product.rating
                          ? "text-yellow-400 fill-current opacity-50"
                          : "text-neutral-400"
                      )}
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <span className={`${isDark ? "text-white/60" : "text-black/60"} text-sm`}>
                  {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>
            </Reveal>

            {/* Social Proof */}
            <Reveal delay={120}>
              <div className={`text-sm ${isDark ? "text-white/70" : "text-black/70"}`}>
                <span className="font-medium">Join {Math.floor(product.reviewCount * 0.8)}+ satisfied customers</span> who have already transformed their space
              </div>
            </Reveal>

            {/* Price */}
            <Reveal delay={150}>
              <div className="space-y-3">
                <div className="flex items-center space-x-4">
                  <span className="text-3xl font-light">{product.price}</span>
                  {isDiscounted && (
                    <span className={`text-xl ${isDark ? "text-white/50" : "text-black/50"} line-through`}>
                      {product.originalPrice}
                    </span>
                  )}
                  {isDiscounted && (
                    <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded text-sm font-medium">
                      Save {Math.round(((parseFloat(product.originalPrice!.replace(/[^0-9.]/g, '')) - parseFloat(product.price.replace(/[^0-9.]/g, ''))) / parseFloat(product.originalPrice!.replace(/[^0-9.]/g, '')) * 100))}%
                    </span>
                  )}
                </div>
                {product.inStock && (
                  <div className={`text-sm ${isDark ? "text-green-400" : "text-green-600"} flex items-center space-x-2`}>
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span>Limited stock available - Order soon!</span>
                  </div>
                )}
              </div>
            </Reveal>

            {/* Variants */}
            {product.variants && (
              <Reveal delay={200}>
                <div className="space-y-4">
                  {product.variants.map((variant) => (
                    <div key={variant.name} className="space-y-2">
                      <label className={`text-sm font-medium ${isDark ? "text-white/80" : "text-black/80"}`}>
                        {variant.name}
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {variant.options.map((option) => (
                          <button
                            key={option}
                            onClick={() => handleVariantChange(variant.name, option)}
                            className={clsx(
                              "px-4 py-2 rounded-full text-sm border transition-all duration-200",
                              selectedVariants[variant.name] === option
                                ? isDark
                                  ? "border-white bg-white text-black"
                                  : "border-black bg-black text-white"
                                : isDark
                                ? "border-white/20 text-white/80 hover:border-white/40 hover:text-white"
                                : "border-black/20 text-black/80 hover:border-black/40 hover:text-black"
                            )}
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            )}

            {/* Quantity */}
            <Reveal delay={250}>
              <div className="space-y-2">
                <label className={`text-sm font-medium ${isDark ? "text-white/80" : "text-black/80"}`}>
                  Quantity
                </label>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className={`w-10 h-10 rounded-full border flex items-center justify-center transition-colors ${
                      isDark ? "border-white/20 hover:border-white/40" : "border-black/20 hover:border-black/40"
                    }`}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                    </svg>
                  </button>
                  <span className="w-16 text-center font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className={`w-10 h-10 rounded-full border flex items-center justify-center transition-colors ${
                      isDark ? "border-white/20 hover:border-white/40" : "border-black/20 hover:border-black/40"
                    }`}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                </div>
              </div>
            </Reveal>

            {/* Success Message */}
            {showAddedMessage && (
              <Reveal>
                <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-4 text-center">
                  <div className="flex items-center justify-center space-x-2 text-green-400">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-medium">Added to cart successfully!</span>
                  </div>
                </div>
              </Reveal>
            )}

            {/* Action Buttons */}
            <Reveal delay={300}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Button
                  as="button"
                  onClick={handleAddToCart}
                  variant="white"
                  className={clsx(
                    "w-full py-4 text-base flex items-center justify-center font-medium text-center",
                    !isDark && "bg-black text-white hover:bg-neutral-800"
                  )}
                >
                  Add to Cart
                </Button>
                <Button
                  as="button"
                  onClick={handleBuyNow}
                  variant="ghost"
                  className={clsx(
                    "w-full py-4 text-base font-medium flex items-center justify-center",
                    isDark 
                      ? "border border-white/20 hover:bg-white/10 text-white" 
                      : "border border-black/20 hover:bg-black/10 text-black"
                  )}
                >
                  Buy Now
                </Button>
              </div>
            </Reveal>

            {/* Stock Status */}
            <Reveal delay={350}>
              <div className={`flex items-center space-x-2 text-sm ${isDark ? "text-white/60" : "text-black/60"}`}>
                <div className={`w-2 h-2 rounded-full ${product.inStock ? "bg-green-400" : "bg-red-400"}`} />
                <span>{product.inStock ? "In Stock" : "Out of Stock"}</span>
                {product.inStock && (
                  <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded text-xs font-medium">
                    Fast Shipping
                  </span>
                )}
              </div>
            </Reveal>

            {/* Policies & ETA */}
            <Reveal delay={360}>
              <div className="space-y-4 pt-6 border-t border-neutral-800/20">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Shipping & Policies</span>
                  <span className={`text-xs ${isDark ? "text-white/60" : "text-black/60"}`}>ETA {formatEta()}</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-start space-x-3">
                    <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${isDark ? "bg-white/40" : "bg-black/40"}`} />
                    <div>
                      <div className="text-sm font-medium">Free Shipping</div>
                      <div className={`text-xs ${isDark ? "text-white/60" : "text-black/60"}`}>2–5 day delivery in EU</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${isDark ? "bg-white/40" : "bg-black/40"}`} />
                    <div>
                      <div className="text-sm font-medium">Easy Returns</div>
                      <div className={`text-xs ${isDark ? "text-white/60" : "text-black/60"}`}>30-day returns, 100-night trial</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${isDark ? "bg-white/40" : "bg-black/40"}`} />
                    <div>
                      <div className="text-sm font-medium">Warranty</div>
                      <div className={`text-xs ${isDark ? "text-white/60" : "text-black/60"}`}>5–10 year coverage</div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Trust Signals */}
            <Reveal delay={400}>
              <div className="space-y-3 pt-4 border-t border-neutral-800/20">
                <div className="flex items-center text-sm flex-wrap gap-6 ">
                  <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Free Returns</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Secure Payment</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>2-5 Day Delivery</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Expert Support</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-20">
          <Reveal>
            <div className="border-b border-neutral-800/20">
              <div className="flex space-x-8" role="tablist">
                <button
                  onClick={() => setActiveTab('description')}
                  className={clsx(
                    "pb-4 text-lg font-medium transition-colors border-b-2",
                    activeTab === 'description'
                      ? isDark
                        ? "text-white border-white"
                        : "text-black border-black"
                      : isDark
                      ? "text-white/60 border-transparent hover:text-white"
                      : "text-black/60 border-transparent hover:text-black"
                  )}
                  role="tab"
                  aria-selected={activeTab === 'description'}
                >
                  Description
                </button>
                <button
                  onClick={() => setActiveTab('features')}
                  className={clsx(
                    "pb-4 text-lg font-medium transition-colors border-b-2",
                    activeTab === 'features'
                      ? isDark
                        ? "text-white border-white"
                        : "text-black border-black"
                      : isDark
                      ? "text-white/60 border-transparent hover:text-white"
                      : "text-black/60 border-transparent hover:text-black"
                  )}
                  role="tab"
                  aria-selected={activeTab === 'features'}
                >
                  Features
                </button>
                <button
                  onClick={() => setActiveTab('specs')}
                  className={clsx(
                    "pb-4 text-lg font-medium transition-colors border-b-2",
                    activeTab === 'specs'
                      ? isDark
                        ? "text-white border-white"
                        : "text-black border-black"
                      : isDark
                      ? "text-white/60 border-transparent hover:text-white"
                      : "text-black/60 border-transparent hover:text-black"
                  )}
                  role="tab"
                  aria-selected={activeTab === 'specs'}
                >
                  Specifications
                </button>
              </div>
            </div>
          </Reveal>

          <div className="py-12">
            <Reveal delay={100}>
              {activeTab === 'description' && (
                <div className="space-y-6" role="tabpanel">
                  <h3 className="text-2xl font-light">Description</h3>
                  <p className={`${isDark ? "text-white/70" : "text-black/70"} leading-relaxed`}>
                    {product.description}
                  </p>
                </div>
              )}
              {activeTab === 'features' && (
                <div className="space-y-6" role="tabpanel">
                  <h3 className="text-2xl font-light">Key Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {product.features.map((feature, index) => (
                      <div key={index} className={`p-4 rounded-lg ${isDark ? "bg-neutral-900/50" : "bg-neutral-100/50"}`}>
                        <div className="flex items-start space-x-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0" />
                          <span className={`${isDark ? "text-white/70" : "text-black/70"}`}>{feature}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {activeTab === 'specs' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6" role="tabpanel">
                  {product.specifications.map((spec, index) => (
                    <div key={index} className={`p-4 rounded-lg ${isDark ? "bg-neutral-900/50" : "bg-neutral-100/50"}`}>
                      <div className={`text-sm font-medium ${isDark ? "text-white/60" : "text-black/60"}`}>
                        {spec.label}
                      </div>
                      <div className={`text-base ${isDark ? "text-white" : "text-black"}`}>
                        {spec.value}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </Reveal>
          </div>
        </div>

           {/* Related Products */}
        <div className="mt-20">
          <Reveal>
            <h3 className="text-2xl font-light mb-8">You might also like</h3>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {product.relatedProducts.map((relatedProduct, index) => (
              <Reveal key={relatedProduct.id} delay={index * 100}>
                <a href={relatedProduct.href} className="group block">
                  <div className={`${isDark ? "bg-neutral-900" : "bg-neutral-200"} relative aspect-[3/4] w-full overflow-hidden rounded-xl`}>
                    <SafeImage
                      src={relatedProduct.img}
                      alt={relatedProduct.title}
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                    />
                  </div>
                  <div className={isDark ? "mt-3 text-xs uppercase tracking-wide text-white/60" : "mt-3 text-xs uppercase tracking-wide text-black/60"}>{relatedProduct.title}</div>
                  <div className={isDark ? "text-sm text-white/80" : "text-sm text-black/80"}>{relatedProduct.price}</div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>

         {/* FAQ */}
    <div className="mt-20">
          <FAQ />
        </div>
      </div>
      <Footer />
    </div>
  );
}