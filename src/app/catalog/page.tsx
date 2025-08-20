"use client";
import React, { useMemo, useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "@/components/ui/theme";
import { Reveal } from "@/components/ui/Reveal";
import { SafeImage } from "@/components/ui/SafeImage";
import { Button } from "@/components/ui/Button";
import { clsx } from "@/components/ui/clsx";
import TrustBar from "@/components/TrustBar";
import { getAllProducts } from "@/data/products";
import { useCart } from "@/components/ui/cart";
import type { ProductDetails } from "@/types/product";
import { parsePriceToNumber, debounce } from "@/lib/utils";
import Testimonials from "@/components/Testimonials";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogTrigger } from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { FilterBadge } from "@/components/ui/badge";
import Footer from "@/components/Footer";

// Remove this function as it's now in utils

export default function CatalogPage() {
  const { isDark } = useTheme();
  const products = getAllProducts();
  const { addToCart } = useCart();

  // Theme-aware styling for buttons
  const preferLight = !isDark && (typeof window !== 'undefined' && window.location.pathname !== '/' && window.location.pathname !== '/en');

  const idToCategory: Record<string, string> = {
    "modular-sofa": "Sofas",
    "standing-desk": "Desks",
    "ergonomic-chair": "Chairs",
    "memory-mattress": "Mattresses",
  };

  const categories = useMemo(
    () => Array.from(new Set(products.map((p) => idToCategory[p.id] || "Other"))),
    [products],
  );

  const tags = useMemo(
    () => Array.from(new Set(products.map((p) => p.tag).filter(Boolean))) as string[],
    [products],
  );

  const [showFilters, setShowFilters] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<Set<string>>(new Set());
  const [selectedTags, setSelectedTags] = useState<Set<string>>(new Set());
  const [onlyInStock, setOnlyInStock] = useState(false);
  const allPrices = useMemo(() => products.map((p) => parsePriceToNumber(p.price)), [products]);
  const minPrice = useMemo(() => Math.min(...allPrices), [allPrices]);
  const maxPrice = useMemo(() => Math.max(...allPrices), [allPrices]);
  const [priceMin, setPriceMin] = useState(minPrice);
  const [priceMax, setPriceMax] = useState(maxPrice);
  const [sortBy, setSortBy] = useState<"featured" | "price-asc" | "price-desc" | "rating">("featured");
  const [visibleCount, setVisibleCount] = useState(20);

  // Remove debug logging for production

  const toggleSetValue = (setter: React.Dispatch<React.SetStateAction<Set<string>>>, value: string) => {
    setter((prev) => {
      const next = new Set(prev);
      if (next.has(value)) next.delete(value);
      else next.add(value);
      return next;
    });
  };

  const clearFilters = () => {
    setSelectedCategories(new Set());
    setSelectedTags(new Set());
    setOnlyInStock(false);
    setPriceMin(minPrice);
    setPriceMax(maxPrice);
    setSortBy("featured");
  };

  const removeCategory = (category: string) => {
    setSelectedCategories(prev => {
      const next = new Set(prev);
      next.delete(category);
      return next;
    });
  };

  const removeTag = (tag: string) => {
    setSelectedTags(prev => {
      const next = new Set(prev);
      next.delete(tag);
      return next;
    });
  };

  const removePriceFilter = () => {
    setPriceMin(minPrice);
    setPriceMax(maxPrice);
  };

  const removeStockFilter = () => {
    setOnlyInStock(false);
  };

  const filteredProducts = useMemo(() => {
    let list = products.filter((p) => {
      const cat = idToCategory[p.id] || "Other";
      const price = parsePriceToNumber(p.price);
      const matchCategory = selectedCategories.size === 0 || selectedCategories.has(cat);
      const matchTag = selectedTags.size === 0 || (p.tag ? selectedTags.has(p.tag) : false);
      const matchStock = !onlyInStock || p.inStock;
      const matchPrice = price >= priceMin && price <= priceMax;
      return matchCategory && matchTag && matchStock && matchPrice;
    });

    switch (sortBy) {
      case "price-asc":
        list = [...list].sort((a, b) => parsePriceToNumber(a.price) - parsePriceToNumber(b.price));
        break;
      case "price-desc":
        list = [...list].sort((a, b) => parsePriceToNumber(b.price) - parsePriceToNumber(a.price));
        break;
      case "rating":
        list = [...list].sort((a, b) => b.rating - a.rating);
        break;
      case "featured":
      default:
        // Keep original order
        break;
    }

    return list;
  }, [products, selectedCategories, selectedTags, onlyInStock, priceMin, priceMax, sortBy]);

  function ProductCard(p: ProductDetails) {
    const handleQuickAdd = (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      addToCart({ id: p.id, title: p.title, price: p.price, image: p.images.main });
    };

    return (
      <Link href={`/product/${p.id}`} className="group block relative">
        <div className={clsx(
          "relative aspect-[3/4] w-full overflow-hidden rounded-xl",
          isDark ? "bg-neutral-900" : "bg-neutral-200",
        )}>
          <SafeImage
            src={p.images.main}
            alt={p.title}
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
          />
          {p.tag && (
            <div className="absolute top-3 left-3">
              <span className="bg-white/90 text-black px-2.5 py-1 rounded-full text-[10px] font-medium uppercase tracking-wide">
                {p.tag}
              </span>
            </div>
          )}
          <div className="absolute bottom-3 right-3">
            <Button as="button" onClick={handleQuickAdd} variant="ghost" className="px-3 py-1.5 text-xs font-medium bg-black/90 text-white hover:bg-black border border-white/20 hover:border-white/40 transition-all duration-200 hover:scale-[1.03] hover:shadow-md">
              Add to Cart
            </Button>
          </div>
        </div>
        <div className="mt-3 flex items-center justify-between">
          <div className={isDark ? "text-white" : "text-black"}>{p.title}</div>
          <div className={isDark ? "text-white/80" : "text-black/80"}>{p.price}</div>
        </div>
      </Link>
    );
  }

  return (
    <div className={isDark ? "bg-black text-white min-h-screen pt-16 md:pt-20" : "bg-white text-black min-h-screen pt-16 md:pt-20"}>
      {/* Breadcrumb */}
      <div className={isDark ? "border-b border-white/10" : "border-b border-black/10"}>
        <div className="mx-auto max-w-7xl px-4 md:px-6 py-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className={isDark ? "text-white/60 hover:text-white" : "text-black/60 hover:text-black"}>Home</Link>
            <span className={isDark ? "text-white/40" : "text-black/40"}>/</span>
            <span className={isDark ? "text-white" : "text-black"}>Catalog</span>
          </nav>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 md:px-6 py-10 md:py-14">
        <div className="mb-8 md:mb-10">
          <Reveal>
            <h1 className="text-3xl md:text-4xl font-light tracking-tight">Explore our collection</h1>
          </Reveal>
          <Reveal delay={100}>
            <p className={clsx("mt-3 max-w-2xl", isDark ? "text-white/70" : "text-black/70")}>High-comfort, modern designs built to elevate your home and workspace. Filter and sort to quickly find the perfect piece.</p>
          </Reveal>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between gap-4 mb-6 md:mb-8">
          <div className="flex items-center gap-3">
            <Dialog open={showFilters} onOpenChange={setShowFilters}>
              <DialogTrigger asChild>
                <Button as="button" variant="ghost" className={clsx(
                  "px-4 py-2 text-sm",
                  preferLight 
                    ? "bg-black/10 hover:bg-black/20 text-black border-black/20 hover:border-black/40" 
                    : isDark 
                      ? "bg-white/10 hover:bg-white/20 text-white border-white/20 hover:border-white/40"
                      : "bg-black/10 hover:bg-black/20 text-black border-black/20 hover:border-black/40"
                )}>
                  <span className="inline-flex items-center gap-2">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M3 5h18v2H3V5zm4 6h10v2H7v-2zm-2 6h14v2H5v-2z"/></svg>
                    Filters
                  </span>
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto p-0">
                <DialogHeader className={clsx("px-6 py-4 border-b", isDark ? "border-white/10" : "border-black/10")}>
                  <DialogTitle className="text-lg font-medium">Filters</DialogTitle>
                </DialogHeader>
                
                <div className="space-y-6 p-6">
                  {/* Categories */}
                  <div>
                    <Label className="mb-3 block text-sm font-medium">Categories</Label>
                    <div className={clsx("p-4 rounded-xl", isDark ? "bg-white/5" : "bg-black/5")}>
                      <div className="flex flex-wrap gap-2">
                        {categories.map((c) => (
                          <button
                            key={c}
                            onClick={() => toggleSetValue(setSelectedCategories, c)}
                            className={clsx(
                              "px-3 py-1.5 rounded-full text-sm border transition-all focus:outline-none focus:ring-2 hover:scale-105",
                              selectedCategories.has(c)
                                ? (isDark ? "border-white bg-white text-black ring-white/30" : "border-black bg-black text-white ring-black/20")
                                : isDark
                                ? "border-white/20 text-white/80 hover:border-white/40 hover:text-white hover:bg-white/5"
                                : "border-black/20 text-black/80 hover:border-black/40 hover:text-black hover:bg-black/5",
                            )}
                          >
                            {c}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Tags */}
                  <div>
                    <Label className="mb-3 block text-sm font-medium">Tags</Label>
                    <div className={clsx("p-4 rounded-xl", isDark ? "bg-white/5" : "bg-black/5")}> 
                      <div className="flex flex-wrap gap-2">
                        {tags.length === 0 && (
                          <span className={isDark ? "text-white/50 text-sm" : "text-black/50 text-sm"}>No tags</span>
                        )}
                        {tags.map((t) => (
                          <button
                            key={t}
                            onClick={() => toggleSetValue(setSelectedTags, t)}
                            className={clsx(
                              "px-3 py-1.5 rounded-full text-sm border transition-all focus:outline-none focus:ring-2 hover:scale-105",
                              selectedTags.has(t)
                                ? (isDark ? "border-white bg-white text-black ring-white/30" : "border-black bg-black text-white ring-black/20")
                                : isDark
                                ? "border-white/20 text-white/80 hover:border-white/40 hover:text-white hover:bg-white/5"
                                : "border-black/20 text-black/80 hover:border-black/40 hover:text-black hover:bg-black/5",
                            )}
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Price & Stock */}
                  <div>
                    <Label className="mb-3 block text-sm font-medium">Price & Availability</Label>
                    <div className={clsx("p-4 rounded-xl space-y-4", isDark ? "bg-white/5" : "bg-black/5")}> 
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className={clsx("text-sm font-medium", isDark ? "text-white/90" : "text-black/90")}>Price Range</span>
                          <span className={clsx("text-sm font-mono", isDark ? "text-white/80" : "text-black/80")}>€{priceMin} - €{priceMax}</span>
                        </div>
                        <Slider
                          value={[priceMin, priceMax]}
                          onValueChange={(values) => {
                            setPriceMin(values[0]);
                            setPriceMax(values[1]);
                          }}
                          min={minPrice}
                          max={Math.max(...allPrices)}
                          step={1}
                          className="w-full"
                        />
                        <div className="flex items-center justify-between text-xs">
                          <span className={clsx(isDark ? "text-white/60" : "text-black/60")}>€{minPrice}</span>
                          <span className={clsx(isDark ? "text-white/60" : "text-black/60")}>€{maxPrice}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 pt-2">
                        <Checkbox
                          id="stock-filter"
                          checked={onlyInStock}
                          onCheckedChange={(checked) => setOnlyInStock(checked as boolean)}
                          className={clsx(
                            isDark ? "border-white/30 data-[state=checked]:bg-white data-[state=checked]:text-black" : "border-black/30 data-[state=checked]:bg-black data-[state=checked]:text-white"
                          )}
                        />
                        <Label htmlFor="stock-filter" className={clsx("text-sm", isDark ? "text-white/80" : "text-black/80")}>
                          In stock only
                        </Label>
                      </div>
                    </div>
                  </div>
                </div>

                <DialogFooter className={clsx("px-6 py-4 border-t flex items-center justify-between", isDark ? "border-white/10" : "border-black/10")}>
                  <div className={clsx("text-sm mr-auto", isDark ? "text-white/60" : "text-black/60")}>
                    Results: <span className={isDark ? "text-white" : "text-black"}>{filteredProducts.length}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Button as="button" variant="ghost" onClick={clearFilters} className={clsx(
                      "px-4 py-2 text-sm",
                      preferLight 
                        ? "bg-black/10 hover:bg-black/20 text-black border-black/20 hover:border-black/40" 
                        : isDark 
                          ? "bg-white/10 hover:bg-white/20 text-white border-white/20 hover:border-white/40"
                          : "bg-black/10 hover:bg-black/20 text-black border-black/20 hover:border-black/40"
                    )}>
                      Clear all
                    </Button>
                    <Button as="button" onClick={() => setShowFilters(false)} className={clsx(
                      "px-5 py-2 text-sm",
                      preferLight 
                        ? "bg-black text-white hover:bg-black/70 border-black" 
                        : isDark 
                          ? "bg-white text-black hover:bg-white/70 border-white"
                          : "bg-black text-white hover:bg-black/70 border-black"
                    )}>
                      Apply
                    </Button>
                  </div>
                </DialogFooter>
              </DialogContent>
            </Dialog>
            <div className={clsx("hidden md:flex items-center gap-2 text-sm", isDark ? "text-white/60" : "text-black/60")}>Results: <span className={isDark ? "text-white" : "text-black"}>{filteredProducts.length}</span></div>
          </div>
          <div className="flex items-center gap-3">
            <label className={clsx("text-sm", isDark ? "text-white/60" : "text-black/60")}>Sort by</label>
            <Select value={sortBy} onValueChange={(value: string) => setSortBy(value as "featured" | "price-asc" | "price-desc" | "rating")}>
              <SelectTrigger className={clsx(
                "w-[180px]",
                isDark ? "bg-white/10 border-white/25 text-white" : "bg-black/5 border-black/20 text-black"
              )}>
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent className={isDark ? "bg-neutral-900 border-white/20 text-white" : "bg-white border-black/20 text-black"}>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="price-asc">Price: Low to High</SelectItem>
                <SelectItem value="price-desc">Price: High to Low</SelectItem>
                <SelectItem value="rating">Top Rated</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Active filters */}
        {(selectedCategories.size > 0 || selectedTags.size > 0 || onlyInStock || priceMin !== minPrice || priceMax !== maxPrice) && (
          <div className="mb-6 flex flex-wrap gap-3">
            {[...selectedCategories].map((c) => (
              <FilterBadge
                key={`c-${c}`}
                onRemove={() => removeCategory(c)}
                isDark={isDark}
              >
                {c}
              </FilterBadge>
            ))}
            {[...selectedTags].map((t) => (
              <FilterBadge
                key={`t-${t}`}
                onRemove={() => removeTag(t)}
                isDark={isDark}
              >
                {t}
              </FilterBadge>
            ))}
            {onlyInStock && (
              <FilterBadge
                onRemove={removeStockFilter}
                isDark={isDark}
              >
                In stock
              </FilterBadge>
            )}
            {(priceMin !== minPrice || priceMax !== maxPrice) && (
              <FilterBadge
                onRemove={removePriceFilter}
                isDark={isDark}
              >
                €{priceMin} - €{priceMax}
              </FilterBadge>
            )}
          </div>
        )}

        {/* Grid */}
        {filteredProducts.length === 0 ? (
          <div className={clsx("rounded-xl p-10 text-center", isDark ? "bg-white/5" : "bg-black/5") }>
            <div className="text-lg font-medium mb-2">No results</div>
            <p className={clsx("mb-4", isDark ? "text-white/70" : "text-black/70")}>Try adjusting or clearing your filters.</p>
            <Button as="button" variant="ghost" onClick={clearFilters} className={clsx(
              "px-4 py-2",
              preferLight 
                ? "bg-black/10 hover:bg-black/20 text-black border-black/20 hover:border-black/40" 
                : isDark 
                  ? "bg-white/10 hover:bg-white/20 text-white border-white/20 hover:border-white/40"
                  : "bg-black/10 hover:bg-black/20 text-black border-black/20 hover:border-black/40"
            )}>Clear all filters</Button>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6">
              {filteredProducts.slice(0, visibleCount).map((p, i) => (
                <Reveal key={p.id} delay={i * 60}>
                  <ProductCard {...(p as ProductDetails)} />
                </Reveal>
              ))}
            </div>
            {filteredProducts.length > visibleCount && (
              <div className="flex justify-center mt-8">
                <Button as="button" variant="white" onClick={() => setVisibleCount((c) => c + 8)} className="px-6 py-3">Load more</Button>
              </div>
            )}
          </>
        )}
      </div>
       {/* Conversion helpers */}
        <div className="mt-14 md:mt-20">
          <TrustBar />
        </div>
        <div className="mt-14 md:mt-16">
          <Testimonials />
        </div>
      <Footer />
    </div>
  );
}
