import type { ProductDetails } from "@/types/product";

const products: ProductDetails[] = [
	{
		id: "modular-sofa",
		title: "Modular Sofa",
		subtitle: "Versatile comfort that adapts to your space",
		price: "€ 1,490 EUR",
		description:
			"Transform your living space with our innovative modular sofa system. Each piece is thoughtfully designed to work together or independently, allowing you to create the perfect configuration for your home. The premium fabric upholstery and high-density foam cushions provide exceptional comfort while the clean, modern lines ensure it complements any interior style. Perfect for both intimate gatherings and relaxed family time.",
		features: [
			"Modular design with multiple configuration options",
			"Premium performance fabric that resists stains and fading",
			"High-density foam cushions with pocket springs",
			"Kiln-dried hardwood frame for lasting durability",
			"Easy-to-clean removable covers",
			"Includes corner piece, armless chair, and ottoman",
			"10-year warranty on frame and springs",
		],
		specifications: [
			{ label: "Dimensions", value: "84\" W x 35\" D x 32\" H" },
			{ label: "Seat Height", value: "18\"" },
			{ label: "Material", value: "Performance fabric, hardwood frame" },
			{ label: "Weight Capacity", value: "300 lbs per seat" },
			{ label: "Assembly", value: "Required (tools included)" },
			{ label: "Warranty", value: "10 years limited" },
		],
		images: {
			main: "https://i.pinimg.com/1200x/4d/a9/6c/4da96cd7dea1d7a3e416bebb96d60de2.jpg",
			hover: "https://i.pinimg.com/1200x/79/05/7b/79057b45caa8fd67f00ccfc286ab0dd8.jpg",
			gallery: [
				"https://i.pinimg.com/1200x/79/05/7b/79057b45caa8fd67f00ccfc286ab0dd8.jpg",
				"https://i.pinimg.com/1200x/56/0f/7f/560f7f0563be6c1189f8a9c9bf5528d5.jpg",
				"https://i.pinimg.com/1200x/8d/0f/a7/8d0fa7fc8e1c0289f7c1de364e6da47a.jpg",
			],
		},
		inStock: true,
		rating: 4.9,
		reviewCount: 234,
		tag: "Best Seller",
		variants: [
			{ name: "Fabric", options: ["Charcoal", "Blush", "Sage", "Cream"], selected: "Charcoal" },
			{ name: "Configuration", options: ["3-Seater", "3+1 Chaise", "L-Shape", "U-Shape"], selected: "3+1 Chaise" },
		],
		relatedProducts: [
			{ id: "standing-desk", title: "Standing Desk", price: "€ 650 EUR", img: "https://i.pinimg.com/1200x/35/67/80/356780261253ea738a55bb830f5b863f.jpg", href: "/product/standing-desk" },
			{ id: "ergonomic-chair", title: "Ergonomic Office Chair", price: "€ 380 EUR", img: "https://i.pinimg.com/1200x/7e/cc/07/7ecc07bad8144596eb5177a4943f5668.jpg", href: "/product/ergonomic-chair" },
			{ id: "memory-mattress", title: "Memory Foam Mattress", price: "€ 990 EUR", img: "https://i.pinimg.com/1200x/84/d9/73/84d9739b49e667564a88e57ef0d3385f.jpg", href: "/product/memory-mattress" },
		],
	},
	{
		id: "standing-desk",
		title: "Standing Desk",
		subtitle: "Ergonomic workspace that adapts to your needs",
		price: "€ 650 EUR",
		description:
			"Transform your workspace with our premium standing desk. Engineered for both comfort and productivity, this desk seamlessly transitions between sitting and standing positions. The smooth electric lift mechanism ensures quiet operation while the spacious surface accommodates all your work essentials. Built with sustainable materials and designed for years of daily use.",
		features: [
			"Electric height adjustment with memory presets",
			"Spacious 60\" x 30\" work surface",
			"Weight capacity up to 300 lbs",
			"Quiet operation with advanced motor technology",
			"Cable management system for clean setup",
			"Anti-collision system for safety",
			"Programmable height memory for multiple users",
		],
		specifications: [
			{ label: "Dimensions", value: "60\" W x 30\" D x 25.6\" - 50.8\" H" },
			{ label: "Weight Capacity", value: "300 lbs" },
			{ label: "Material", value: "Bamboo top, steel frame" },
			{ label: "Power", value: "110-240V AC adapter" },
			{ label: "Assembly", value: "Required (tools included)" },
			{ label: "Warranty", value: "5 years limited" },
		],
		images: {
			main: "https://i.pinimg.com/1200x/35/67/80/356780261253ea738a55bb830f5b863f.jpg",
			hover: "https://i.pinimg.com/1200x/56/0f/7f/560f7f0563be6c1189f8a9c9bf5528d5.jpg",
			gallery: [
				"https://i.pinimg.com/1200x/4d/a9/6c/4da96cd7dea1d7a3e416bebb96d60de2.jpg",
				"https://i.pinimg.com/1200x/84/d9/73/84d9739b49e667564a88e57ef0d3385f.jpg",
				"https://i.pinimg.com/1200x/7e/cc/07/7ecc07bad8144596eb5177a4943f5668.jpg",
			],
		},
		inStock: true,
		rating: 4.9,
		reviewCount: 89,
		tag: "Ergonomic",
		variants: [
			{ name: "Top Material", options: ["Bamboo", "Walnut", "White Oak"], selected: "Bamboo" },
			{ name: "Frame Color", options: ["Black", "White", "Silver"], selected: "Black" },
		],
		relatedProducts: [
			{ id: "ergonomic-chair", title: "Ergonomic Office Chair", price: "€ 380 EUR", img: "https://i.pinimg.com/1200x/7e/cc/07/7ecc07bad8144596eb5177a4943f5668.jpg", href: "/product/ergonomic-chair" },
			{ id: "modular-sofa", title: "Modular Sofa", price: "€ 1,490 EUR", img: "https://i.pinimg.com/1200x/4d/a9/6c/4da96cd7dea1d7a3e416bebb96d60de2.jpg", href: "/product/modular-sofa" },
			{ id: "memory-mattress", title: "Memory Foam Mattress", price: "€ 990 EUR", img: "https://i.pinimg.com/1200x/84/d9/73/84d9739b49e667564a88e57ef0d3385f.jpg", href: "/product/memory-mattress" },
		],
	},
	{
		id: "ergonomic-chair",
		title: "Ergonomic Office Chair",
		subtitle: "Premium comfort for extended productivity",
		price: "€ 380 EUR",
		description:
			"Experience unparalleled comfort with our ergonomic office chair designed for long hours of focused work. The chair features advanced lumbar support, adjustable armrests, and breathable mesh back that keeps you cool and comfortable throughout the day. Every adjustment is designed to promote proper posture and reduce strain, making it the perfect companion for your standing desk.",
		features: [
			"Advanced lumbar support with adjustable depth",
			"Breathable mesh back for temperature regulation",
			"4D adjustable armrests with soft-touch padding",
			"Seat depth adjustment for optimal thigh support",
			"Tilt tension and lock mechanisms",
			"Heavy-duty aluminum base with smooth-rolling casters",
			"Weight-activated recline with 5 lockable positions",
		],
		specifications: [
			{ label: "Dimensions", value: "26\" W x 27\" D x 45\" - 52\" H" },
			{ label: "Weight Capacity", value: "300 lbs" },
			{ label: "Material", value: "Mesh back, memory foam seat, aluminum base" },
			{ label: "Adjustments", value: "Height, tilt, lumbar, armrests, seat depth" },
			{ label: "Assembly", value: "Required (tools included)" },
			{ label: "Warranty", value: "3 years limited" },
		],
		images: {
			main: "https://i.pinimg.com/1200x/7e/cc/07/7ecc07bad8144596eb5177a4943f5668.jpg",
			hover: "https://i.pinimg.com/1200x/8d/0f/a7/8d0fa7fc8e1c0289f7c1de364e6da47a.jpg",
			gallery: [
				"https://i.pinimg.com/1200x/35/67/80/356780261253ea738a55bb830f5b863f.jpg",
				"https://i.pinimg.com/1200x/79/05/7b/79057b45caa8fd67f00ccfc286ab0dd8.jpg",
				"https://i.pinimg.com/1200x/56/0f/7f/560f7f0563be6c1189f8a9c9bf5528d5.jpg",
			],
		},
		inStock: true,
		rating: 4.7,
		reviewCount: 156,
		tag: "Best Seller",
		variants: [
			{ name: "Back Color", options: ["Black", "Gray", "Blue"], selected: "Black" },
			{ name: "Base Finish", options: ["Black", "Silver", "White"], selected: "Black" },
		],
		relatedProducts: [
			{ id: "standing-desk", title: "Standing Desk", price: "€ 650 EUR", img: "https://i.pinimg.com/1200x/35/67/80/356780261253ea738a55bb830f5b863f.jpg", href: "/product/standing-desk" },
			{ id: "modular-sofa", title: "Modular Sofa", price: "€ 1,490 EUR", img: "https://i.pinimg.com/1200x/4d/a9/6c/4da96cd7dea1d7a3e416bebb96d60de2.jpg", href: "/product/modular-sofa" },
			{ id: "memory-mattress", title: "Memory Foam Mattress", price: "€ 990 EUR", img: "https://i.pinimg.com/1200x/84/d9/73/84d9739b49e667564a88e57ef0d3385f.jpg", href: "/product/memory-mattress" },
		],
	},
	{
		id: "memory-mattress",
		title: "Memory Foam Mattress",
		subtitle: "Cloud-like comfort with advanced pressure relief",
		price: "€ 990 EUR",
		description:
			"Experience the perfect balance of support and comfort with our premium memory foam mattress. Engineered with multiple layers of high-density memory foam, this mattress contours to your body's natural curves while providing exceptional pressure relief. The breathable cover and open-cell foam technology ensure you stay cool and comfortable throughout the night, promoting deeper, more restful sleep.",
		features: [
			"Multi-layer memory foam construction for optimal support",
			"Open-cell foam technology for enhanced breathability",
			"Pressure-relieving design reduces tossing and turning",
			"Motion isolation for undisturbed sleep",
			"Certified hypoallergenic and dust mite resistant",
			"10-year warranty for peace of mind",
			"Available in all standard mattress sizes",
		],
		specifications: [
			{ label: "Thickness", value: "12 inches" },
			{ label: "Firmness", value: "Medium-firm (6.5/10)" },
			{ label: "Material", value: "High-density memory foam, breathable cover" },
			{ label: "Cover", value: "Removable, machine washable" },
			{ label: "Edge Support", value: "Reinforced perimeter for full mattress use" },
			{ label: "Warranty", value: "10 years limited" },
		],
		images: {
			main: "https://i.pinimg.com/1200x/84/d9/73/84d9739b49e667564a88e57ef0d3385f.jpg",
			hover: "https://i.pinimg.com/1200x/d3/58/e9/d358e99d5b4be8f246fe38a2b1eab5b7.jpg",
			gallery: [
				"https://i.pinimg.com/1200x/d3/58/e9/d358e99d5b4be8f246fe38a2b1eab5b7.jpg",
				"https://i.pinimg.com/1200x/4d/a9/6c/4da96cd7dea1d7a3e416bebb96d60de2.jpg",
				"https://i.pinimg.com/1200x/35/67/80/356780261253ea738a55bb830f5b863f.jpg",
			],
		},
		inStock: true,
		rating: 4.8,
		reviewCount: 203,
		tag: "Premium",
		variants: [
			{ name: "Size", options: ["Twin", "Full", "Queen", "King", "Cal King"], selected: "Queen" },
			{ name: "Firmness", options: ["Soft", "Medium", "Firm"], selected: "Medium" },
		],
		relatedProducts: [
			{ id: "modular-sofa", title: "Modular Sofa", price: "€ 1,490 EUR", img: "https://i.pinimg.com/1200x/4d/a9/6c/4da96cd7dea1d7a3e416bebb96d60de2.jpg", href: "/product/modular-sofa" },
			{ id: "standing-desk", title: "Standing Desk", price: "€ 650 EUR", img: "https://i.pinimg.com/1200x/35/67/80/356780261253ea738a55bb830f5b863f.jpg", href: "/product/standing-desk" },
			{ id: "ergonomic-chair", title: "Ergonomic Office Chair", price: "€ 380 EUR", img: "https://i.pinimg.com/1200x/7e/cc/07/7ecc07bad8144596eb5177a4943f5668.jpg", href: "/product/ergonomic-chair" },
		],
	},
	{
		id: "modern-coffee-table",
		title: "Modern Coffee Table",
		subtitle: "Elegant centerpiece for your living space",
		price: "€ 520 EUR",
		description:
			"Elevate your living room with our contemporary coffee table that seamlessly blends form and function. Crafted from sustainable oak wood with a natural oil finish, this table features clean lines and thoughtful proportions that complement any modern interior. The spacious surface and hidden storage compartment make it both beautiful and practical for everyday living.",
		features: [
			"Sustainable oak wood construction with natural finish",
			"Hidden storage compartment for remote controls and magazines",
			"Rounded corners for safety and modern aesthetic",
			"Water-resistant finish protects against spills",
			"Assembly-free - arrives fully assembled",
			"Supports up to 150 lbs weight capacity",
			"5-year warranty on craftsmanship",
		],
		specifications: [
			{ label: "Dimensions", value: "47\" W x 24\" D x 16\" H" },
			{ label: "Material", value: "Solid oak wood with natural oil finish" },
			{ label: "Weight", value: "65 lbs" },
			{ label: "Storage", value: "Hidden compartment: 20\" x 12\" x 4\"" },
			{ label: "Assembly", value: "No assembly required" },
			{ label: "Warranty", value: "5 years limited" },
		],
		images: {
			main: "https://images.unsplash.com/photo-1752061462018-6b3cef2330db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTA1OTd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb2ZmZWUlMjB0YWJsZSUyMG1pbmltYWxpc3R8ZW58MHx8fHwxNzU1NzE1MjExfDA&ixlib=rb-4.1.0&q=80&w=1080",
			hover: "https://images.unsplash.com/photo-1752061462129-1dfbb00f436f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTA1OTd8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjBjb2ZmZWUlMjB0YWJsZSUyMG1pbmltYWxpc3R8ZW58MHx8fHwxNzU1NzE1MjExfDA&ixlib=rb-4.1.0&q=80&w=1080",
			gallery: [
				"https://images.unsplash.com/photo-1752061462129-1dfbb00f436f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTA1OTd8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjBjb2ZmZWUlMjB0YWJsZSUyMG1pbmltYWxpc3R8ZW58MHx8fHwxNzU1NzE1MjExfDA&ixlib=rb-4.1.0&q=80&w=1080",
				"https://images.unsplash.com/photo-1633505765486-e404bbbec654?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTA1OTd8MHwxfHNlYXJjaHwzfHxtb2Rlcm4lMjBjb2ZmZWUlMjB0YWJsZSUyMG1pbmltYWxpc3R8ZW58MHx8fHwxNzU1NzE1MjExfDA&ixlib=rb-4.1.0&q=80&w=1080",
				"https://images.unsplash.com/photo-1732552232770-1a116f777c93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTA1OTd8MHwxfHNlYXJjaHw0fHxtb2Rlcm4lMjBjb2ZmZWUlMjB0YWJsZSUyMG1pbmltYWxpc3R8ZW58MHx8fHwxNzU1NzE1MjExfDA&ixlib=rb-4.1.0&q=80&w=1080",
			],
		},
		inStock: true,
		rating: 4.8,
		reviewCount: 127,
		tag: "New",
		variants: [
			{ name: "Wood Finish", options: ["Natural Oak", "Walnut", "White Oak"], selected: "Natural Oak" },
		],
		relatedProducts: [
			{ id: "modular-sofa", title: "Modular Sofa", price: "€ 1,490 EUR", img: "https://images.unsplash.com/photo-1753791913941-efa7de4e1b5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTA1OTd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwc29mYSUyMG1vZGVybiUyMGxpdmluZyUyMHJvb218ZW58MHx8fHwxNzU1NzE1MjE1fDA&ixlib=rb-4.1.0&q=80&w=1080", href: "/product/modular-sofa" },
			{ id: "accent-chair", title: "Accent Chair", price: "€ 420 EUR", img: "https://images.unsplash.com/photo-1631510390389-c1e4fb20ff31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTA1OTd8MHwxfHNlYXJjaHwzfHxtaW5pbWFsaXN0JTIwc29mYSUyMG1vZGVybiUyMGxpdmluZyUyMHJvb218ZW58MHx8fHwxNzU1NzE1MjE1fDA&ixlib=rb-4.1.0&q=80&w=1080", href: "/product/accent-chair" },
			{ id: "floor-lamp", title: "Modern Floor Lamp", price: "€ 280 EUR", img: "https://images.unsplash.com/photo-1732552232770-1a116f777c93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTA1OTd8MHwxfHNlYXJjaHw0fHxtb2Rlcm4lMjBjb2ZmZWUlMjB0YWJsZSUyMG1pbmltYWxpc3R8ZW58MHx8fHwxNzU1NzE1MjExfDA&ixlib=rb-4.1.0&q=80&w=1080", href: "/product/floor-lamp" },
		],
	},
	{
    id: "minimalist-sofa",
    title: "Minimalist Sofa",
    subtitle: "Sleek and comfortable seating",
    price: "€ 899 EUR",
		description:
      "A modern sofa designed for comfort and style. Its clean lines and neutral tones make it a perfect addition to any minimalist living space.",
		features: [
      "High-density foam cushions",
      "Durable linen upholstery",
      "Wooden legs with matte finish",
      "Removable and washable covers",
      "Available in three neutral colors",
		],
		specifications: [
      { label: "Dimensions", value: "80\" W x 35\" D x 32\" H" },
      { label: "Material", value: "Linen, wood" },
      { label: "Weight", value: "120 lbs" },
      { label: "Assembly", value: "Required" },
			{ label: "Warranty", value: "3 years limited" },
		],
		images: {
      main: "https://images.unsplash.com/photo-1753791913941-efa7de4e1b5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTA1OTd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwc29mYSUyMG1vZGVybiUyMGxpdmluZyUyMHJvb218ZW58MHx8fHwxNzU1NzE1MjE1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      hover: "https://images.unsplash.com/photo-1631510390389-c1e4fb20ff31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTA1OTd8MHwxfHNlYXJjaHwzfHxtaW5pbWFsaXN0JTIwc29mYSUyMG1vZGVybiUyMGxpdmluZyUyMHJvb218ZW58MHx8fHwxNzU1NzE1MjE1fDA&ixlib=rb-4.1.0&q=80&w=1080",
			gallery: [
        "https://images.unsplash.com/photo-1631510390389-c1e4fb20ff31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTA1OTd8MHwxfHNlYXJjaHwzfHxtaW5pbWFsaXN0JTIwc29mYSUyMG1vZGVybiUyMGxpdmluZyUyMHJvb218ZW58MHx8fHwxNzU1NzE1MjE1fDA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1731275912088-1f428751d32b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTA1OTd8MHwxfHNlYXJjaHw0fHxtaW5pbWFsaXN0JTIwc29mYSUyMG1vZGVybiUyMGxpdmluZyUyMHJvb218ZW58MHx8fHwxNzU1NzE1MjE1fDA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1742533580278-0ca91555ed54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTA1OTd8MHwxfHNlYXJjaHw1fHxtaW5pbWFsaXN0JTIwc29mYSUyMG1vZGVybiUyMGxpdmluZyUyMHJvb218ZW58MHx8fHwxNzU1NzE1MjE1fDA&ixlib=rb-4.1.0&q=80&w=1080",
			],
		},
		inStock: true,
    rating: 4.8,
    reviewCount: 120,
    tag: "Best Seller",
		variants: [
      { name: "Color", options: ["Beige", "Gray", "Charcoal"], selected: "Beige" },
		],
		relatedProducts: [
      { id: "modern-coffee-table", title: "Modern Coffee Table", price: "€ 299 EUR", img: "https://images.unsplash.com/photo-1752061462018-6b3cef2330db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTA1OTd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb2ZmZWUlMjB0YWJsZSUyMG1pbmltYWxpc3R8ZW58MHx8fHwxNzU1NzE1MjExfDA&ixlib=rb-4.1.0&q=80&w=1080", href: "/product/modern-coffee-table" },
      { id: "floor-lamp", title: "Floor Lamp", price: "€ 149 EUR", img: "https://images.unsplash.com/photo-1732552232770-1a116f777c93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTA1OTd8MHwxfHNlYXJjaHw0fHxtb2Rlcm4lMjBjb2ZmZWUlMjB0YWJsZSUyMG1pbmltYWxpc3R8ZW58MHx8fHwxNzU1NzE1MjExfDA&ixlib=rb-4.1.0&q=80&w=1080", href: "/product/floor-lamp" },
      { id: "area-rug", title: "Area Rug", price: "€ 199 EUR", img: "https://images.unsplash.com/photo-1631510390389-c1e4fb20ff31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTA1OTd8MHwxfHNlYXJjaHwzfHxtaW5pbWFsaXN0JTIwc29mYSUyMG1vZGVybiUyMGxpdmluZyUyMHJvb218ZW58MHx8fHwxNzU1NzE1MjE1fDA&ixlib=rb-4.1.0&q=80&w=1080", href: "/product/area-rug" },
		],
	},
	{
    id: "scandinavian-dining-table",
    title: "Scandinavian Dining Table",
    subtitle: "Elegant and functional design",
    price: "€ 1,200 EUR",
		description:
      "A handcrafted dining table with a minimalist Scandinavian design. Made from solid oak, it offers both beauty and durability.",
		features: [
      "Solid oak construction",
      "Natural wood finish",
      "Seats up to 6 people",
      "Easy to assemble",
      "Sustainable materials",
		],
		specifications: [
      { label: "Dimensions", value: "72\" L x 36\" W x 30\" H" },
      { label: "Material", value: "Solid oak" },
      { label: "Weight", value: "150 lbs" },
      { label: "Assembly", value: "Required" },
      { label: "Warranty", value: "5 years limited" },
		],
		images: {
			main: "https://images.unsplash.com/photo-1578625494482-d40f3018683f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTA1OTd8MHwxfHNlYXJjaHwxfHxzY2FuZGluYXZpYW4lMjBkaW5pbmclMjB0YWJsZSUyMG1vZGVybiUyMG9hayUyMHdvb2R8ZW58MHx8fHwxNzU1NzE3ODA3fDA&ixlib=rb-4.1.0&q=80&w=1080",
			hover: "https://images.unsplash.com/photo-1665217257552-49e7c2c68a97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTA1OTd8MHwxfHNlYXJjaHwyfHxzY2FuZGluYXZpYW4lMjBkaW5pbmclMjB0YWJsZSUyMG1vZGVybiUyMG9hayUyMHdvb2R8ZW58MHx8fHwxNzU1NzE3ODA3fDA&ixlib=rb-4.1.0&q=80&w=1080",
			gallery: [
				"https://images.unsplash.com/photo-1665217257552-49e7c2c68a97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTA1OTd8MHwxfHNlYXJjaHwyfHxzY2FuZGluYXZpYW4lMjBkaW5pbmclMjB0YWJsZSUyMG1vZGVybiUyMG9hayUyMHdvb2R8ZW58MHx8fHwxNzU1NzE3ODA3fDA&ixlib=rb-4.1.0&q=80&w=1080",
				"https://images.unsplash.com/photo-1516650556972-e9904734f467?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTA1OTd8MHwxfHNlYXJjaHwzfHxzY2FuZGluYXZpYW4lMjBkaW5pbmclMjB0YWJsZSUyMG1vZGVybiUyMG9hayUyMHdvb2R8ZW58MHx8fHwxNzU1NzE3ODA3fDA&ixlib=rb-4.1.0&q=80&w=1080",
				"https://images.unsplash.com/photo-1719899913493-1e508c3833e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTA1OTd8MHwxfHNlYXJjaHw0fHxzY2FuZGluYXZpYW4lMjBkaW5pbmclMjB0YWJsZSUyMG1vZGVybiUyMG9hayUyMHdvb2R8ZW58MHx8fHwxNzU1NzE3ODA3fDA&ixlib=rb-4.1.0&q=80&w=1080",
			],
		},
		inStock: true,
		rating: 4.9,
    reviewCount: 85,
    tag: "New Arrival",
    variants: [
      { name: "Size", options: ["6-Seater", "8-Seater"], selected: "6-Seater" },
    ],
    relatedProducts: [
      { id: "dining-chairs", title: "Dining Chairs", price: "€ 150 EUR each", img: "https://images.unsplash.com/photo-1595541465802-ceccad3c168e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTA1OTd8MHwxfHNlYXJjaHwxfHxzY2FuZGluYXZpYW4lMjBkaW5pbmclMjB0YWJsZSUyMG9hayUyMHdvb2R8ZW58MHx8fHwxNzU1NzE1MjE3fDA&ixlib=rb-4.1.0&q=80&w=1080", href: "/product/dining-chairs" },
      { id: "tableware-set", title: "Tableware Set", price: "€ 99 EUR", img: "https://images.unsplash.com/photo-1601063936640-a0e4e4ed081c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTA1OTd8MHwxfHNlYXJjaHwzfHxzY2FuZGluYXZpYW4lMjBkaW5pbmclMjB0YWJsZSUyMG9hayUyMHdvb2R8ZW58MHx8fHwxNzU1NzE1MjE3fDA&ixlib=rb-4.1.0&q=80&w=1080", href: "/product/tableware-set" },
      { id: "sideboard", title: "Sideboard", price: "€ 499 EUR", img: "https://images.unsplash.com/photo-1617262869356-46646422e3b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTA1OTd8MHwxfHNlYXJjaHwyfHxzY2FuZGluYXZpYW4lMjBkaW5pbmclMjB0YWJsZSUyMG9hayUyMHdvb2R8ZW58MHx8fHwxNzU1NzE1MjE3fDA&ixlib=rb-4.1.0&q=80&w=1080", href: "/product/sideboard" },
    ],
  },
  {
    id: "minimalist-bookshelf",
    title: "Minimalist Bookshelf",
    subtitle: "Sleek storage for books and decor",
    price: "€ 450 EUR",
    description:
      "Organize your books and showcase decor with our minimalist bookshelf. Crafted from solid oak with matte finishes, it complements any modern interior.",
    features: [
      "Solid oak construction",
      "Open shelving design",
      "Easy to assemble",
      "Supports up to 50 lbs per shelf",
      "Neutral finish to match any decor",
    ],
    specifications: [
      { label: "Dimensions", value: "30\" W x 14\" D x 72\" H" },
      { label: "Material", value: "Solid oak wood" },
      { label: "Weight", value: "55 lbs" },
      { label: "Assembly", value: "Required (tools included)" },
      { label: "Warranty", value: "5 years limited" },
    ],
    images: {
      main: "https://images.unsplash.com/photo-1715067865426-8e0293c994d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTA1OTd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwYm9va3NoZWxmJTIwb2FrJTIwd29vZCUyMG1vZGVybnxlbnwwfHx8fDE3NTU3MTUyMjB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      hover: "https://images.unsplash.com/photo-1621350597530-02305519e9f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTA1OTd8MHwxfHNlYXJjaHwyfHxtaW5pbWFsaXN0JTIwYm9va3NoZWxmJTIwb2FrJTIwd29vZCUyMG1vZGVybnxlbnwwfHx8fHwxNzU1NzE1MjIwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      gallery: [
        "https://images.unsplash.com/photo-1621350597530-02305519e9f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTA1OTd8MHwxfHNlYXJjaHwyfHxtaW5pbWFsaXN0JTIwYm9va3NoZWxmJTIwb2FrJTIwd29vZCUyMG1vZGVybnxlbnwwfHx8fHwxNzU1NzE1MjIwfDA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1742850541164-8eb59ecb3282?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTA1OTd8MHwxfHNlYXJjaHwzfHxtaW5pbWFsaXN0JTIwYm9va3NoZWxmJTIwb2FrJTIwd29vZCUyMG1vZGVybnxlbnwwfHx8fHwxNzU1NzE1MjIwfDA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1733764682545-40c0c659cd29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTA1OTd8MHwxfHNlYXJjaHw0fHxtaW5pbWFsaXN0JTIwYm9va3NoZWxmJTIwb2FrJTIwd29vZCUyMG1vZGVybnxlbnwwfHx8fHwxNzU1NzE1MjIwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      ],
    },
    inStock: true,
    rating: 4.7,
    reviewCount: 112,
    tag: "New",
		variants: [
      { name: "Wood Finish", options: ["Natural Oak", "Walnut", "White Oak"], selected: "Natural Oak" },
		],
		relatedProducts: [
      { id: "modern-coffee-table", title: "Modern Coffee Table", price: "€ 520 EUR", img: "https://images.unsplash.com/photo-1752061462018-6b3cef2330db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTA1OTd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb2ZmZWUlMjB0YWJsZSUyMG1pbmltYWxpc3R8ZW58MHx8fHwxNzU1NzE1MjExfDA&ixlib=rb-4.1.0&q=80&w=1080", href: "/product/modern-coffee-table" },
      { id: "accent-chair", title: "Accent Chair", price: "€ 420 EUR", img: "https://images.unsplash.com/photo-1631510390389-c1e4fb20ff31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTA1OTd8MHwxfHNlYXJjaHwzfHxtaW5pbWFsaXN0JTIwc29mYSUyMG1vZGVybiUyMGxpdmluZyUyMHJvb218ZW58MHx8fHwxNzU1NzE1MjE1fDA&ixlib=rb-4.1.0&q=80&w=1080", href: "/product/accent-chair" },
      { id: "floor-lamp", title: "Modern Floor Lamp", price: "€ 280 EUR", img: "https://images.unsplash.com/photo-1732552232770-1a116f777c93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTA1OTd8MHwxfHNlYXJjaHw0fHxtb2Rlcm4lMjBjb2ZmZWUlMjB0YWJsZSUyMG1pbmltYWxpc3R8ZW58MHx8fHwxNzU1NzE1MjExfDA&ixlib=rb-4.1.0&q=80&w=1080", href: "/product/floor-lamp" },
		],
	},
	{
		id: "side-table",
		title: "Bedside Table",
		subtitle: "Minimalist storage meets modern design",
		price: "€ 340 EUR",
		description:
			"Complete your bedroom sanctuary with our elegant bedside table that seamlessly blends storage and style. The clean geometric lines and premium walnut finish create a sophisticated look while the thoughtful interior organization keeps your essentials perfectly arranged. Designed to complement modern bedrooms and guest rooms alike.",
		features: [
			"Solid walnut wood construction with natural grain patterns",
			"Soft-close drawer with full extension slides",
			"Hidden cable management for device charging",
			"Felt-lined drawer protects jewelry and small items",
			"Wall-mounting brackets included for floating installation",
			"Sustainable wood sourcing with FSC certification",
			"5-year warranty on craftsmanship",
		],
		specifications: [
			{ label: "Dimensions", value: "20\" W x 16\" D x 24\" H" },
			{ label: "Drawer Size", value: "16\" W x 12\" D x 4\" H" },
			{ label: "Material", value: "Solid walnut wood with natural finish" },
			{ label: "Weight", value: "32 lbs" },
			{ label: "Installation", value: "Freestanding or wall-mounted" },
			{ label: "Warranty", value: "5 years limited" },
		],
		images: {
			main: "https://images.unsplash.com/photo-1649194271420-b2ff52418a62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTA1OTd8MHwxfHNlYXJjaHwxfHxiZWRzaWRlJTIwdGFibGUlMjBuaWdodHN0YW5kJTIwbW9kZXJufGVufDB8fHx8MTc1NTcxNTIyNnww&ixlib=rb-4.1.0&q=80&w=1080",
			hover: "https://images.unsplash.com/photo-1704428382616-d8c65fdd76f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTA1OTd8MHwxfHNlYXJjaHwyfHxiZWRzaWRlJTIwdGFibGUlMjBuaWdodHN0YW5kJTIwbW9kZXJufGVufDB8fHx8MTc1NTcxNTIyNnww&ixlib=rb-4.1.0&q=80&w=1080",
			gallery: [
				"https://images.unsplash.com/photo-1704428382616-d8c65fdd76f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTA1OTd8MHwxfHNlYXJjaHwyfHxiZWRzaWRlJTIwdGFibGUlMjBuaWdodHN0YW5kJTIwbW9kZXJufGVufDB8fHx8MTc1NTcxNTIyNnww&ixlib=rb-4.1.0&q=80&w=1080",
				"https://images.unsplash.com/photo-1752062004433-98a3d1b73a98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTA1OTd8MHwxfHNlYXJjaHwzfHxiZWRzaWRlJTIwdGFibGUlMjBuaWdodHN0YW5kJTIwbW9kZXJufGVufDB8fHx8MTc1NTcxNTIyNnww&ixlib=rb-4.1.0&q=80&w=1080",
				"https://images.unsplash.com/photo-1752062003907-331dc20be406?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTA1OTd8MHwxfHNlYXJjaHw0fHxiZWRzaWRlJTIwdGFibGUlMjBuaWdodHN0YW5kJTIwbW9kZXJufGVufDB8fHx8MTc1NTcxNTIyNnww&ixlib=rb-4.1.0&q=80&w=1080",
			],
		},
		inStock: true,
		rating: 4.6,
		reviewCount: 87,
		tag: "Premium",
		variants: [
			{ name: "Wood Finish", options: ["Walnut", "White Oak", "Black Stain"], selected: "Walnut" },
			{ name: "Hardware", options: ["Brass", "Black", "Chrome"], selected: "Brass" },
		],
		relatedProducts: [
			{ id: "memory-mattress", title: "Memory Foam Mattress", price: "€ 990 EUR", img: "https://images.unsplash.com/photo-1655450075012-c0393e3cc1ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTA1OTd8MHwxfHNlYXJjaHwxfHxwbGF0Zm9ybSUyMGJlZCUyMGZyYW1lJTIwbW9kZXJuJTIwYmVkcm9vbXxlbnwwfHx8fDE3NTU3MTUyMzB8MA&ixlib=rb-4.1.0&q=80&w=1080", href: "/product/memory-mattress" },
			{ id: "platform-bed", title: "Platform Bed Frame", price: "€ 780 EUR", img: "https://images.unsplash.com/photo-1655450075012-c0393e3cc1ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTA1OTd8MHwxfHNlYXJjaHwxfHxwbGF0Zm9ybSUyMGJlZCUyMGZyYW1lJTIwbW9kZXJuJTIwYmVkcm9vbXxlbnwwfHx8fDE3NTU3MTUyMzB8MA&ixlib=rb-4.1.0&q=80&w=1080", href: "/product/platform-bed" },
			{ id: "floor-lamp", title: "Modern Floor Lamp", price: "€ 280 EUR", img: "https://images.unsplash.com/photo-1732552232770-1a116f777c93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTA1OTd8MHwxfHNlYXJjaHw0fHxtb2Rlcm4lMjBjb2ZmZWUlMjB0YWJsZSUyMG1pbmltYWxpc3R8ZW58MHx8fHwxNzU1NzE1MjExfDA&ixlib=rb-4.1.0&q=80&w=1080", href: "/product/floor-lamp" },
		],
	},
	{
		id: "platform-bed",
		title: "Platform Bed Frame",
		subtitle: "Elevated sleep with minimalist elegance",
		price: "€ 780 EUR",
		description:
			"Transform your bedroom into a serene retreat with our contemporary platform bed frame. The floating design and clean lines create an airy feel while the solid construction ensures lasting durability. The low-profile silhouette works perfectly with modern mattresses and complements any bedroom aesthetic.",
		features: [
			"Solid oak wood construction with natural grain",
			"Low-profile platform design eliminates need for box spring",
			"Integrated LED strip lighting underneath (optional)",
			"Center support beam prevents sagging",
			"Rounded edges for safety and modern look",
			"Easy assembly with included hardware",
			"10-year warranty on frame construction",
		],
		specifications: [
			{ label: "Dimensions", value: "King: 84\" W x 88\" D x 14\" H" },
			{ label: "Material", value: "Solid oak wood with matte finish" },
			{ label: "Weight Capacity", value: "1,000 lbs" },
			{ label: "Mattress Support", value: "Slat system with center beam" },
			{ label: "Assembly", value: "Required (2-3 hours)" },
			{ label: "Warranty", value: "10 years limited" },
		],
		images: {
			main: "https://images.unsplash.com/photo-1655450075012-c0393e3cc1ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTA1OTd8MHwxfHNlYXJjaHwxfHxwbGF0Zm9ybSUyMGJlZCUyMGZyYW1lJTIwbW9kZXJuJTIwYmVkcm9vbXxlbnwwfHx8fDE3NTU3MTUyMzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
			hover: "https://images.unsplash.com/photo-1719364477635-196329162e60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTA1OTd8MHwxfHNlYXJjaHwyfHxwbGF0Zm9ybSUyMGJlZCUyMGZyYW1lJTIwbW9kZXJuJTIwYmVkcm9vbXxlbnwwfHx8fDE3NTU3MTUyMzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
			gallery: [
				"https://images.unsplash.com/photo-1719364477635-196329162e60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTA1OTd8MHwxfHNlYXJjaHwyfHxwbGF0Zm9ybSUyMGJlZCUyMGZyYW1lJTIwbW9kZXJuJTIwYmVkcm9vbXxlbnwwfHx8fDE3NTU3MTUyMzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
				"https://images.unsplash.com/photo-1633948393301-d43e3ec0e5cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTA1OTd8MHwxfHNlYXJjaHwzfHxwbGF0Zm9ybSUyMGJlZCUyMGZyYW1lJTIwbW9kZXJuJTIwYmVkcm9vbXxlbnwwfHx8fDE3NTU3MTUyMzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
				"https://images.unsplash.com/photo-1683471538809-d6b7a0edfbb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTA1OTd8MHwxfHNlYXJjaHw0fHxwbGF0Zm9ybSUyMGJlZCUyMGZyYW1lJTIwbW9kZXJuJTIwYmVkcm9vbXxlbnwwfHx8fDE3NTU3MTUyMzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
			],
		},
		inStock: true,
		rating: 4.8,
		reviewCount: 156,
		tag: "Premium",
		variants: [
			{ name: "Size", options: ["Queen", "King", "Cal King"], selected: "King" },
			{ name: "Wood Finish", options: ["Natural Oak", "Walnut", "White Oak"], selected: "Natural Oak" },
			{ name: "LED Lighting", options: ["No LED", "Warm White LED"], selected: "No LED" },
		],
		relatedProducts: [
			{ id: "memory-mattress", title: "Memory Foam Mattress", price: "€ 990 EUR", img: "https://images.unsplash.com/photo-1655450075012-c0393e3cc1ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTA1OTd8MHwxfHNlYXJjaHwxfHxwbGF0Zm9ybSUyMGJlZCUyMGZyYW1lJTIwbW9kZXJuJTIwYmVkcm9vbXxlbnwwfHx8fDE3NTU3MTUyMzB8MA&ixlib=rb-4.1.0&q=80&w=1080", href: "/product/memory-mattress" },
			{ id: "side-table", title: "Bedside Table", price: "€ 340 EUR", img: "https://images.unsplash.com/photo-1649194271420-b2ff52418a62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTA1OTd8MHwxfHNlYXJjaHwxfHxiZWRzaWRlJTIwdGFibGUlMjBuaWdodHN0YW5kJTIwbW9kZXJufGVufDB8fHx8MTc1NTcxNTIyNnww&ixlib=rb-4.1.0&q=80&w=1080", href: "/product/side-table" },
			{ id: "dresser", title: "Modern Dresser", price: "€ 890 EUR", img: "https://images.unsplash.com/photo-1609799545166-347a5ba518cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTA1OTd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkcmVzc2VyJTIwY2hlc3QlMjBvZiUyMGRyYXdlcnN8ZW58MHx8fHwxNzU1NzE1MjMzfDA&ixlib=rb-4.1.0&q=80&w=1080", href: "/product/dresser" },
		],
	},
	{
		id: "dresser",
		title: "Modern Dresser",
		subtitle: "Sophisticated storage for the modern bedroom",
		price: "€ 890 EUR",
		description:
			"Organize your wardrobe in style with our thoughtfully designed dresser that combines ample storage with contemporary aesthetics. The six spacious drawers feature soft-close mechanisms while the clean lines and premium finish make it a statement piece for any bedroom or dressing area.",
		features: [
			"Six large drawers with soft-close mechanisms",
			"Solid wood construction with dovetail joints",
			"Anti-tip safety mechanism for peace of mind",
			"Dust-proof drawer bottoms protect clothing",
			"Integrated cable management for electronics",
			"Brushed brass hardware adds elegance",
			"Lifetime warranty on drawer slides",
		],
		specifications: [
			{ label: "Dimensions", value: "60\" W x 18\" D x 34\" H" },
			{ label: "Drawer Capacity", value: "6 drawers, various sizes" },
			{ label: "Material", value: "Solid walnut wood with natural finish" },
			{ label: "Weight", value: "180 lbs" },
			{ label: "Hardware", value: "Brushed brass with soft-close slides" },
			{ label: "Warranty", value: "Lifetime on slides, 10 years on frame" },
		],
		images: {
			main: "https://images.unsplash.com/photo-1609799545166-347a5ba518cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTA1OTd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkcmVzc2VyJTIwY2hlc3QlMjBvZiUyMGRyYXdlcnN8ZW58MHx8fHwxNzU1NzE1MjMzfDA&ixlib=rb-4.1.0&q=80&w=1080",
			hover: "https://images.unsplash.com/photo-1704428381445-dc61b037cfd2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTA1OTd8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjBkcmVzc2VyJTIwY2hlc3QlMjBvZiUyMGRyYXdlcnN8ZW58MHx8fHwxNzU1NzE1MjMzfDA&ixlib=rb-4.1.0&q=80&w=1080",
			gallery: [
				"https://images.unsplash.com/photo-1704428381445-dc61b037cfd2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTA1OTd8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjBkcmVzc2VyJTIwY2hlc3QlMjBvZiUyMGRyYXdlcnN8ZW58MHx8fHwxNzU1NzE1MjMzfDA&ixlib=rb-4.1.0&q=80&w=1080",
				"https://images.unsplash.com/photo-1633945111109-027e0cf63339?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTA1OTd8MHwxfHNlYXJjaHwzfHxtb2Rlcm4lMjBkcmVzc2VyJTIwY2hlc3QlMjBvZiUyMGRyYXdlcnN8ZW58MHx8fHwxNzU1NzE1MjMzfDA&ixlib=rb-4.1.0&q=80&w=1080",
				"https://images.unsplash.com/photo-1633945098489-6ffc53067860?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTA1OTd8MHwxfHNlYXJjaHw0fHxtb2Rlcm4lMjBkcmVzc2VyJTIwY2hlc3QlMjBvZiUyMGRyYXdlcnN8ZW58MHx8fHwxNzU1NzE1MjMzfDA&ixlib=rb-4.1.0&q=80&w=1080",
			],
		},
		inStock: true,
		rating: 4.7,
		reviewCount: 89,
		tag: "Best Seller",
		variants: [
			{ name: "Wood Finish", options: ["Walnut", "White Oak", "Black Stain"], selected: "Walnut" },
			{ name: "Hardware", options: ["Brushed Brass", "Matte Black", "Chrome"], selected: "Brushed Brass" },
		],
		relatedProducts: [
			{ id: "platform-bed", title: "Platform Bed Frame", price: "€ 780 EUR", img: "https://images.unsplash.com/photo-1655450075012-c0393e3cc1ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTA1OTd8MHwxfHNlYXJjaHwxfHxwbGF0Zm9ybSUyMGJlZCUyMGZyYW1lJTIwbW9kZXJuJTIwYmVkcm9vbXxlbnwwfHx8fDE3NTU3MTUyMzB8MA&ixlib=rb-4.1.0&q=80&w=1080", href: "/product/platform-bed" },
			{ id: "side-table", title: "Bedside Table", price: "€ 340 EUR", img: "https://images.unsplash.com/photo-1649194271420-b2ff52418a62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTA1OTd8MHwxfHNlYXJjaHwxfHxiZWRzaWRlJTIwdGFibGUlMjBuaWdodHN0YW5kJTIwbW9kZXJufGVufDB8fHx8MTc1NTcxNTIyNnww&ixlib=rb-4.1.0&q=80&w=1080", href: "/product/side-table" },
			{ id: "full-mirror", title: "Full Length Mirror", price: "€ 320 EUR", img: "https://images.unsplash.com/photo-1752061462018-6b3cef2330db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTA1OTd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb2ZmZWUlMjB0YWJsZSUyMG1pbmltYWxpc3R8ZW58MHx8fHwxNzU1NzE1MjExfDA&ixlib=rb-4.1.0&q=80&w=1080", href: "/product/full-mirror" },
		],
	},
	{
		id: "full-length-mirror",
		title: "Full Length Mirror",
		subtitle: "Elegant reflection for your space",
		price: "€ 320 EUR",
		description:
			"Transform any room with our sophisticated full-length mirror that combines functionality with timeless design. The sleek frame and premium glass create a stunning focal point while providing the perfect reflection for your daily routine.",
		features: [
			"Premium tempered glass with anti-reflective coating",
			"Solid wood frame with natural finish",
			"Wall-mounted or freestanding options",
			"Rounded corners for safety",
			"Easy installation with included hardware",
			"Available in multiple sizes",
			"5-year warranty on glass and frame",
		],
		specifications: [
			{ label: "Dimensions", value: "72\" H x 24\" W x 1\" D" },
			{ label: "Material", value: "Tempered glass, solid wood frame" },
			{ label: "Weight", value: "45 lbs" },
			{ label: "Installation", value: "Wall-mounted or freestanding" },
			{ label: "Warranty", value: "5 years limited" },
		],
		images: {
			main: "https://images.unsplash.com/photo-1744126405290-76d0fd6030c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTA1OTd8MHwxfHNlYXJjaHwxfHxmdWxsJTIwbGVuZ3RoJTIwbWlycm9yJTIwbW9kZXJuJTIwbWluaW1hbGlzdHxlbnwwfHx8fDE3NTU3MTYxMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
			hover: "https://images.unsplash.com/photo-1744126405278-b8c428f309ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTA1OTd8MHwxfHNlYXJjaHwyfHxmdWxsJTIwbGVuZ3RoJTIwbWlycm9yJTIwbW9kZXJuJTIwbWluaW1hbGlzdHxlbnwwfHx8fDE3NTU3MTYxMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
			gallery: [
				"https://images.unsplash.com/photo-1744126405278-b8c428f309ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTA1OTd8MHwxfHNlYXJjaHwyfHxmdWxsJTIwbGVuZ3RoJTIwbWlycm9yJTIwbW9kZXJuJTIwbWluaW1hbGlzdHxlbnwwfHx8fDE3NTU3MTYxMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
				"https://images.unsplash.com/photo-1744126405308-b7fb2d430e96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTA1OTd8MHwxfHNlYXJjaHwzfHxmdWxsJTIwbGVuZ3RoJTIwbWlycm9yJTIwbW9kZXJuJTIwbWluaW1hbGlzdHxlbnwwfHx8fDE3NTU3MTYxMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
				"https://images.unsplash.com/photo-1656960510709-ca02001aeeeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTA1OTd8MHwxfHNlYXJjaHw0fHxmdWxsJTIwbGVuZ3RoJTIwbWlycm9yJTIwbW9kZXJuJTIwbWluaW1hbGlzdHxlbnwwfHx8fDE3NTU3MTYxMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
			],
		},
		inStock: true,
		rating: 4.7,
		reviewCount: 92,
		tag: "New",
		variants: [
			{ name: "Size", options: ["60\" H", "72\" H", "84\" H"], selected: "72\" H" },
			{ name: "Frame Finish", options: ["Natural Oak", "Walnut", "Black"], selected: "Natural Oak" },
		],
		relatedProducts: [
			{ id: "dresser", title: "Modern Dresser", price: "€ 890 EUR", img: "https://images.unsplash.com/photo-1609799545166-347a5ba518cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTA1OTd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkcmVzc2VyJTIwY2hlc3QlMjBvZiUyMGRyYXdlcnN8ZW58MHx8fHwxNzU1NzE1MjMzfDA&ixlib=rb-4.1.0&q=80&w=1080", href: "/product/dresser" },
			{ id: "side-table", title: "Bedside Table", price: "€ 340 EUR", img: "https://images.unsplash.com/photo-1649194271420-b2ff52418a62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTA1OTd8MHwxfHNlYXJjaHwxfHxiZWRzaWRlJTIwdGFibGUlMjBuaWdodHN0YW5kJTIwbW9kZXJufGVufDB8fHx8MTc1NTcxNTIyNnww&ixlib=rb-4.1.0&q=80&w=1080", href: "/product/side-table" },
			{ id: "platform-bed", title: "Platform Bed Frame", price: "€ 780 EUR", img: "https://images.unsplash.com/photo-1655450075012-c0393e3cc1ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTA1OTd8MHwxfHNlYXJjaHwxfHxwbGF0Zm9ybSUyMGJlZCUyMGZyYW1lJTIwbW9kZXJuJTIwYmVkcm9vbXxlbnwwfHx8fDE3NTU3MTUyMzB8MA&ixlib=rb-4.1.0&q=80&w=1080", href: "/product/platform-bed" },
		],
	},
	{
		id: "modern-desk-chair",
		title: "Modern Desk Chair",
		subtitle: "Ergonomic comfort for productivity",
		price: "€ 580 EUR",
		description:
			"Elevate your workspace with our ergonomic desk chair designed for both comfort and style. Features adjustable lumbar support, breathable mesh back, and premium materials that keep you comfortable during long work sessions.",
		features: [
			"Ergonomic design with adjustable lumbar support",
			"Breathable mesh back for temperature control",
			"Adjustable height and armrests",
			"360-degree swivel with smooth-rolling casters",
			"Weight capacity up to 300 lbs",
			"Easy assembly with included tools",
			"10-year warranty on mechanism",
		],
		specifications: [
			{ label: "Dimensions", value: "28\" W x 28\" D x 45\" H" },
			{ label: "Material", value: "Mesh, aluminum, memory foam" },
			{ label: "Weight Capacity", value: "300 lbs" },
			{ label: "Assembly", value: "Required (tools included)" },
			{ label: "Warranty", value: "10 years limited" },
		],
		images: {
			main: "https://images.unsplash.com/photo-1750306957077-b74e45fe1819?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTA1OTd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkZXNrJTIwY2hhaXIlMjBlcmdvbm9taWMlMjBvZmZpY2V8ZW58MHx8fHwxNzU1NzE2MTMwfDA&ixlib=rb-4.1.0&q=80&w=1080",
			hover: "https://images.unsplash.com/photo-1750306957072-351e2d952281?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTA1OTd8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjBkZXNrJTIwY2hhaXIlMjBlcmdvbm9taWMlMjBvZmZpY2V8ZW58MHx8fHwxNzU1NzE2MTMwfDA&ixlib=rb-4.1.0&q=80&w=1080",
			gallery: [
				"https://images.unsplash.com/photo-1750306957072-351e2d952281?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTA1OTd8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjBkZXNrJTIwY2hhaXIlMjBlcmdvbm9taWMlMjBvZmZpY2V8ZW58MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjBkZXNrJTIwY2hhaXIlMjBlcmdvbm9taWMlMjBvZmZpY2V8ZW58MHx8fHwxNzU1NzE2MTMwfDA&ixlib=rb-4.1.0&q=80&w=1080",
				"https://images.unsplash.com/photo-1748887521995-5c060533f313?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTA1OTd8MHwxfHNlYXJjaHwzfHxtb2Rlcm4lMjBkZXNrJTIwY2hhaXIlMjBlcmdvbm9taWMlMjBvZmZpY2V8ZW58MHx8fHwxNzU1NzE2MTMwfDA&ixlib=rb-4.1.0&q=80&w=1080",
				"https://images.unsplash.com/photo-1748887522207-3a5a9097bc43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTA1OTd8MHwxfHNlYXJjaHw0fHxtb2Rlcm4lMjBkZXNrJTIwY2hhaXIlMjBlcmdvbm9taWMlMjBvZmZpY2V8ZW58MHx8fHwxNzU1NzE2MTMwfDA&ixlib=rb-4.1.0&q=80&w=1080",
			],
		},
		inStock: true,
		rating: 4.8,
		reviewCount: 156,
		tag: "Best Seller",
		variants: [
			{ name: "Color", options: ["Black", "Gray", "White"], selected: "Black" },
			{ name: "Material", options: ["Mesh", "Leather", "Fabric"], selected: "Mesh" },
		],
		relatedProducts: [
			{ id: "modern-coffee-table", title: "Modern Coffee Table", price: "€ 520 EUR", img: "https://images.unsplash.com/photo-1752061462018-6b3cef2330db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTA1OTd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb2ZmZWUlMjB0YWJsZSUyMG1pbmltYWxpc3R8ZW58MHx8fHwxNzU1NzE1MjExfDA&ixlib=rb-4.1.0&q=80&w=1080", href: "/product/modern-coffee-table" },
			{ id: "minimalist-bookshelf", title: "Minimalist Bookshelf", price: "€ 450 EUR", img: "https://images.unsplash.com/photo-1715067865426-8e0293c994d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTA1OTd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwYm9va3NoZWxmJTIwb2FrJTIwd29vZCUyMG1vZGVybnxlbnwwfHx8fDE3NTU3MTUyMjB8MA&ixlib=rb-4.1.0&q=80&w=1080", href: "/product/minimalist-bookshelf" },
			{ id: "pendant-light", title: "Pendant Light", price: "€ 280 EUR", img: "https://images.unsplash.com/photo-1745272749509-5d212d97cbd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTA1OTd8MHwxfHNlYXJjaHwxfHxwZW5kYW50JTIwbGlnaHQlMjBtb2Rlcm4lMjBtaW5pbWFsaXN0fGVufDB8fHx8MTc1NTcxNjEzNXww&ixlib=rb-4.1.0&q=80&w=1080", href: "/product/pendant-light" },
		],
	},
	{
		id: "pendant-light",
		title: "Minimalist Pendant Light",
		subtitle: "Contemporary illumination",
		price: "€ 280 EUR",
		description:
			"Illuminate your space with our sleek pendant light that combines modern design with superior functionality. The minimalist silhouette and warm LED lighting create an inviting atmosphere perfect for dining areas, kitchens, or entryways.",
		features: [
			"Integrated LED lighting with warm white glow",
			"Adjustable hanging height up to 6 feet",
			"Dimmable with compatible switches",
			"Energy-efficient with 50,000 hour lifespan",
			"Easy installation with included hardware",
			"Available in multiple finishes",
			"3-year warranty on electronics",
		],
		specifications: [
			{ label: "Dimensions", value: "12\" D x 12\" H" },
			{ label: "Material", value: "Aluminum, glass" },
			{ label: "Bulb Type", value: "Integrated LED" },
			{ label: "Installation", value: "Ceiling mounted" },
			{ label: "Warranty", value: "3 years limited" },
		],
		images: {
			main: "https://images.unsplash.com/photo-1745272749509-5d212d97cbd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTA1OTd8MHwxfHNlYXJjaHwxfHxwZW5kYW50JTIwbGlnaHQlMjBtb2Rlcm4lMjBtaW5pbWFsaXN0fGVufDB8fHx8MTc1NTcxNjEzNXww&ixlib=rb-4.1.0&q=80&w=1080",
			hover: "https://images.unsplash.com/photo-1732044790214-2930623d3edc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTA1OTd8MHwxfHNlYXJjaHwyfHxwZW5kYW50JTIwbGlnaHQlMjBtb2Rlcm4lMjBtaW5pbWFsaXN0fGVufDB8fHx8MTc1NTcxNjEzNXww&ixlib=rb-4.1.0&q=80&w=1080",
			gallery: [
				"https://images.unsplash.com/photo-1732044790214-2930623d3edc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTA1OTd8MHwxfHNlYXJjaHwyfHxwZW5kYW50JTIwbGlnaHQlMjBtb2Rlcm4lMjBtaW5pbWFsaXN0fGVufDB8fHx8MTc1NTcxNjEzNXww&ixlib=rb-4.1.0&q=80&w=1080",
				"https://images.unsplash.com/photo-1749448621488-8fbd130fc8a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTA1OTd8MHwxfHNlYXJjaHwzfHxwZW5kYW50JTIwbGlnaHQlMjBtb2Rlcm4lMjBtaW5pbWFsaXN0fGVufDB8fHx8MTc1NTcxNjEzNXww&ixlib=rb-4.1.0&q=80&w=1080",
				"https://images.unsplash.com/photo-1574150540558-ce439a3f18db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTA1OTd8MHwxfHNlYXJjaHw0fHxwZW5kYW50JTIwbGlnaHQlMjBtb2Rlcm4lMjBtaW5pbWFsaXN0fGVufDB8fHx8MTc1NTcxNjEzNXww&ixlib=rb-4.1.0&q=80&w=1080",
			],
		},
		inStock: true,
		rating: 4.6,
		reviewCount: 78,
		tag: "New",
		variants: [
			{ name: "Finish", options: ["Brushed Nickel", "Matte Black", "Brass"], selected: "Brushed Nickel" },
			{ name: "Size", options: ["Small", "Medium", "Large"], selected: "Medium" },
		],
		relatedProducts: [
			{ id: "modern-desk-chair", title: "Modern Desk Chair", price: "€ 580 EUR", img: "https://images.unsplash.com/photo-1750306957077-b74e45fe1819?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTA1OTd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkZXNrJTIwY2hhaXIlMjBlcmdvbm9taWMlMjBvZmZpY2V8ZW58MHx8fHwxNzU1NzE2MTMwfDA&ixlib=rb-4.1.0&q=80&w=1080", href: "/product/modern-desk-chair" },
			{ id: "scandinavian-dining-table", title: "Scandinavian Dining Table", price: "€ 1,200 EUR", img: "https://images.unsplash.com/photo-1595541465802-ceccad3c168e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTA1OTd8MHwxfHNlYXJjaHwxfHxzY2FuZGluYXZpYW4lMjBkaW5pbmclMjB0YWJsZSUyMG9hayUyMHdvb2R8ZW58MHx8fHwxNzU1NzE1MjE3fDA&ixlib=rb-4.1.0&q=80&w=1080", href: "/product/scandinavian-dining-table" },
			{ id: "minimalist-sofa", title: "Minimalist Sofa", price: "€ 899 EUR", img: "https://images.unsplash.com/photo-1753791913941-efa7de4e1b5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTA1OTd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwc29mYSUyMG1vZGVybiUyMGxpdmluZyUyMHJvb218ZW58MHx8fHwxNzU1NzE1MjE1fDA&ixlib=rb-4.1.0&q=80&w=1080", href: "/product/minimalist-sofa" },
		],
	},
	{
		id: "scandinavian-armchair",
		title: "Scandinavian Armchair",
		subtitle: "Timeless comfort and style",
		price: "€ 650 EUR",
		description:
			"Experience the perfect blend of Scandinavian design and modern comfort with our elegant armchair. Crafted from premium materials with clean lines and thoughtful details, this chair adds sophistication to any living space.",
		features: [
			"Solid wood frame with natural finish",
			"High-density foam cushions for comfort",
			"Premium fabric upholstery",
			"Ergonomic design for optimal support",
			"Easy to clean and maintain",
			"Available in multiple fabric options",
			"5-year warranty on frame and cushions",
		],
		specifications: [
			{ label: "Dimensions", value: "32\" W x 32\" D x 34\" H" },
			{ label: "Material", value: "Solid oak, premium fabric" },
			{ label: "Weight", value: "45 lbs" },
			{ label: "Assembly", value: "No assembly required" },
			{ label: "Warranty", value: "5 years limited" },
		],
		images: {
			main: "https://images.unsplash.com/photo-1650304998598-a1cf68f07fdc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTA1OTd8MHwxfHNlYXJjaHwxfHxzY2FuZGluYXZpYW4lMjBhcm1jaGFpciUyMG1vZGVybnxlbnwwfHx8fDE3NTU3MTYyMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
			hover: "https://images.unsplash.com/photo-1611967164521-abae8fba4668?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTA1OTd8MHwxfHNlYXJjaHwyfHxzY2FuZGluYXZpYW4lMjBhcm1jaGFpciUyMG1vZGVybnxlbnwwfHx8fDE3NTU3MTYyMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
			gallery: [
				"https://images.unsplash.com/photo-1611967164521-abae8fba4668?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTA1OTd8MHwxfHNlYXJjaHwyfHxzY2FuZGluYXZpYW4lMjBhcm1jaGFpciUyMG1vZGVybnxlbnwwfHx8fDE3NTU3MTYyMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
				"https://images.unsplash.com/photo-1670103626902-2e70a441c7a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTA1OTd8MHwxfHNlYXJjaHwzfHxzY2FuZGluYXZpYW4lMjBhcm1jaGFpciUyMG1vZGVybnxlbnwwfHx8fDE3NTU3MTYyMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
				"https://images.unsplash.com/photo-1628752694931-cbf5c8772725?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTA1OTd8MHwxfHNlYXJjaHw0fHxzY2FuZGluYXZpYW4lMjBhcm1jaGFpciUyMG1vZGVybnxlbnwwfHx8fDE3NTU3MTYyMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
			],
		},
		inStock: true,
		rating: 4.7,
		reviewCount: 89,
		tag: "New",
		variants: [
			{ name: "Fabric", options: ["Linen Gray", "Velvet Blue", "Wool Beige"], selected: "Linen Gray" },
			{ name: "Wood Finish", options: ["Natural Oak", "Walnut", "White Oak"], selected: "Natural Oak" },
		],
		relatedProducts: [
			{ id: "minimalist-sofa", title: "Minimalist Sofa", price: "€ 899 EUR", img: "https://images.unsplash.com/photo-1753791913941-efa7de4e1b5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTA1OTd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwc29mYSUyMG1vZGVybiUyMGxpdmluZyUyMHJvb218ZW58MHx8fHwxNzU1NzE1MjE1fDA&ixlib=rb-4.1.0&q=80&w=1080", href: "/product/minimalist-sofa" },
			{ id: "modern-coffee-table", title: "Modern Coffee Table", price: "€ 520 EUR", img: "https://images.unsplash.com/photo-1752061462018-6b3cef2330db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTA1OTd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb2ZmZWUlMjB0YWJsZSUyMG1pbmltYWxpc3R8ZW58MHx8fHwxNzU1NzE1MjExfDA&ixlib=rb-4.1.0&q=80&w=1080", href: "/product/modern-coffee-table" },
			{ id: "pendant-light", title: "Pendant Light", price: "€ 280 EUR", img: "https://images.unsplash.com/photo-1745272749509-5d212d97cbd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTA1OTd8MHwxfHNlYXJjaHwxfHxwZW5kYW50JTIwbGlnaHQlMjBtb2Rlcm4lMjBtaW5pbWFsaXN0fGVufDB8fHx8MTc1NTcxNjEzNXww&ixlib=rb-4.1.0&q=80&w=1080", href: "/product/pendant-light" },
		],
	},
	{
		id: "round-dining-table",
		title: "Round Dining Table",
		subtitle: "Intimate dining experience",
		price: "€ 1,100 EUR",
		description:
			"Create intimate dining moments with our beautifully crafted round dining table. The circular design promotes conversation and connection, while the premium materials ensure lasting beauty and functionality for years to come.",
		features: [
			"Solid wood construction with natural grain",
			"Seats 4-6 people comfortably",
			"Scratch-resistant finish",
			"Easy to clean and maintain",
			"Stable and durable design",
			"Available in multiple sizes",
			"10-year warranty on craftsmanship",
		],
		specifications: [
			{ label: "Dimensions", value: "48\" D x 30\" H" },
			{ label: "Material", value: "Solid oak wood" },
			{ label: "Weight", value: "120 lbs" },
			{ label: "Assembly", value: "Required (tools included)" },
			{ label: "Warranty", value: "10 years limited" },
		],
		images: {
			main: "https://images.unsplash.com/photo-1571172044752-1f601d2a04fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTA1OTd8MHwxfHNlYXJjaHwxfHxyb3VuZCUyMGRpbmluZyUyMHRhYmxlJTIwbW9kZXJufGVufDB8fHx8MTc1NTcxNjIzMHww&ixlib=rb-4.1.0&q=80&w=1080",
			hover: "https://images.unsplash.com/photo-1742466524847-529840564383?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTA1OTd8MHwxfHNlYXJjaHwyfHxyb3VuZCUyMGRpbmluZyUyMHRhYmxlJTIwbW9kZXJufGVufDB8fHx8MTc1NTcxNjIzMHww&ixlib=rb-4.1.0&q=80&w=1080",
			gallery: [
				"https://images.unsplash.com/photo-1742466524847-529840564383?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTA1OTd8MHwxfHNlYXJjaHwyfHxyb3VuZCUyMGRpbmluZyUyMHRhYmxlJTIwbW9kZXJufGVufDB8fHx8MTc1NTcxNjIzMHww&ixlib=rb-4.1.0&q=80&w=1080",
				"https://images.unsplash.com/photo-1740402065437-4edddd2932bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTA1OTd8MHwxfHNlYXJjaHwzfHxyb3VuZCUyMGRpbmluZyUyMHRhYmxlJTIwbW9kZXJufGVufDB8fHx8MTc1NTcxNjIzMHww&ixlib=rb-4.1.0&q=80&w=1080",
				"https://images.unsplash.com/photo-1665005255783-3298cabef5aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTA1OTd8MHwxfHNlYXJjaHw0fHxyb3VuZCUyMGRpbmluZyUyMHRhYmxlJTIwbW9kZXJufGVufDB8fHx8MTc1NTcxNjIzMHww&ixlib=rb-4.1.0&q=80&w=1080",
			],
		},
		inStock: true,
		rating: 4.8,
		reviewCount: 134,
		tag: "Best Seller",
		variants: [
			{ name: "Size", options: ["42\" D", "48\" D", "54\" D"], selected: "48\" D" },
			{ name: "Wood Finish", options: ["Natural Oak", "Walnut", "White Oak"], selected: "Natural Oak" },
		],
		relatedProducts: [
			{ id: "scandinavian-dining-table", title: "Scandinavian Dining Table", price: "€ 1,200 EUR", img: "https://images.unsplash.com/photo-1595541465802-ceccad3c168e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTA1OTd8MHwxfHNlYXJjaHwxfHxzY2FuZGluYXZpYW4lMjBkaW5pbmclMjB0YWJsZSUyMG9hayUyMHdvb2R8ZW58MHx8fHwxNzU1NzE1MjE3fDA&ixlib=rb-4.1.0&q=80&w=1080", href: "/product/scandinavian-dining-table" },
			{ id: "scandinavian-armchair", title: "Scandinavian Armchair", price: "€ 650 EUR", img: "https://images.unsplash.com/photo-1650304998598-a1cf68f07fdc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTA1OTd8MHwxfHNlYXJjaHwxfHxzY2FuZGluYXZpYW4lMjBhcm1jaGFpciUyMG1vZGVybnxlbnwwfHx8fDE3NTU3MTYyMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080", href: "/product/scandinavian-armchair" },
			{ id: "pendant-light", title: "Pendant Light", price: "€ 280 EUR", img: "https://images.unsplash.com/photo-1745272749509-5d212d97cbd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTA1OTd8MHwxfHNlYXJjaHwxfHxwZW5kYW50JTIwbGlnaHQlMjBtb2Rlcm4lMjBtaW5pbWFsaXN0fGVufDB8fHx8MTc1NTcxNjEzNXww&ixlib=rb-4.1.0&q=80&w=1080", href: "/product/pendant-light" },
		],
	},
	{
		id: "outdoor-lounge-chair",
		title: "Outdoor Lounge Chair",
		subtitle: "Relaxation in the open air",
		price: "€ 420 EUR",
		description:
			"Transform your outdoor space into a luxurious retreat with our weather-resistant lounge chair. Designed for comfort and durability, this chair withstands the elements while providing the perfect spot for relaxation and entertainment.",
		features: [
			"Weather-resistant teak wood construction",
			"Quick-dry fabric cushions",
			"Adjustable backrest positions",
			"Easy to clean and maintain",
			"UV-resistant materials",
			"Stackable design for storage",
			"3-year warranty on materials",
		],
		specifications: [
			{ label: "Dimensions", value: "28\" W x 60\" D x 32\" H" },
			{ label: "Material", value: "Teak wood, weather-resistant fabric" },
			{ label: "Weight", value: "35 lbs" },
			{ label: "Assembly", value: "Minimal assembly required" },
			{ label: "Warranty", value: "3 years limited" },
		],
		images: {
			main: "https://images.unsplash.com/photo-1650304998598-a1cf68f07fdc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTA1OTd8MHwxfHNlYXJjaHwxfHxzY2FuZGluYXZpYW4lMjBhcm1jaGFpciUyMG1vZGVybnxlbnwwfHx8fDE3NTU3MTYyMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
			hover: "https://images.unsplash.com/photo-1611967164521-abae8fba4668?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTA1OTd8MHwxfHNlYXJjaHwyfHxzY2FuZGluYXZpYW4lMjBhcm1jaGFpciUyMG1vZGVybnxlbnwwfHx8fDE3NTU3MTYyMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
			gallery: [
				"https://images.unsplash.com/photo-1611967164521-abae8fba4668?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTA1OTd8MHwxfHNlYXJjaHwyfHxzY2FuZGluYXZpYW4lMjBhcm1jaGFpciUyMG1vZGVybnxlbnwwfHx8fDE3NTU3MTYyMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
				"https://images.unsplash.com/photo-1670103626902-2e70a441c7a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTA1OTd8MHwxfHNlYXJjaHwzfHxzY2FuZGluYXZpYW4lMjBhcm1jaGFpciUyMG1vZGVybnxlbnwwfHx8fDE3NTU3MTYyMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
				"https://images.unsplash.com/photo-1628752694931-cbf5c8772725?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTA1OTd8MHwxfHNlYXJjaHw0fHxzY2FuZGluYXZpYW4lMjBhcm1jaGFpciUyMG1vZGVybnxlbnwwfHx8fDE3NTU3MTYyMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
			],
		},
		inStock: true,
		rating: 4.6,
		reviewCount: 67,
		tag: "New",
		variants: [
			{ name: "Cushion Color", options: ["Gray", "Beige", "Navy"], selected: "Gray" },
			{ name: "Wood Finish", options: ["Natural Teak", "Weathered Gray", "Dark Brown"], selected: "Natural Teak" },
		],
		relatedProducts: [
			{ id: "round-dining-table", title: "Round Dining Table", price: "€ 1,100 EUR", img: "https://images.unsplash.com/photo-1571172044752-1f601d2a04fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTA1OTd8MHwxfHNlYXJjaHwxfHxyb3VuZCUyMGRpbmluZyUyMHRhYmxlJTIwbW9kZXJufGVufDB8fHx8MTc1NTcxNjIzMHww&ixlib=rb-4.1.0&q=80&w=1080", href: "/product/round-dining-table" },
			{ id: "scandinavian-armchair", title: "Scandinavian Armchair", price: "€ 650 EUR", img: "https://images.unsplash.com/photo-1650304998598-a1cf68f07fdc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTA1OTd8MHwxfHNlYXJjaHwxfHxzY2FuZGluYXZpYW4lMjBhcm1jaGFpciUyMG1vZGVybnxlbnwwfHx8fDE3NTU3MTYyMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080", href: "/product/scandinavian-armchair" },
			{ id: "modern-coffee-table", title: "Modern Coffee Table", price: "€ 520 EUR", img: "https://images.unsplash.com/photo-1752061462018-6b3cef2330db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTA1OTd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb2ZmZWUlMjB0YWJsZSUyMG1pbmltYWxpc3R8ZW58MHx8fHwxNzU1NzE1MjExfDA&ixlib=rb-4.1.0&q=80&w=1080", href: "/product/modern-coffee-table" },
		],
	},
	{
		id: "modern-patio-dining-set",
		title: "Modern Patio Dining Set",
		subtitle: "Al fresco dining perfection",
		price: "€ 1,890 EUR",
		description:
			"Elevate your outdoor dining experience with our complete patio dining set. This comprehensive collection includes a weather-resistant table and chairs designed for both style and functionality, perfect for entertaining and family meals.",
		features: [
			"Complete 6-person dining set",
			"Weather-resistant aluminum frame",
			"Quick-dry fabric cushions",
			"Easy to clean and maintain",
			"UV and fade-resistant materials",
			"Stackable chairs for storage",
			"5-year warranty on frame and materials",
		],
		specifications: [
			{ label: "Table Dimensions", value: "60\" L x 36\" W x 30\" H" },
			{ label: "Material", value: "Aluminum, weather-resistant fabric" },
			{ label: "Weight", value: "180 lbs total" },
			{ label: "Assembly", value: "Required (tools included)" },
			{ label: "Warranty", value: "5 years limited" },
		],
		images: {
			main: "https://images.unsplash.com/photo-1571172044752-1f601d2a04fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTA1OTd8MHwxfHNlYXJjaHwxfHxyb3VuZCUyMGRpbmluZyUyMHRhYmxlJTIwbW9kZXJufGVufDB8fHx8MTc1NTcxNjIzMHww&ixlib=rb-4.1.0&q=80&w=1080",
			hover: "https://images.unsplash.com/photo-1742466524847-529840564383?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTA1OTd8MHwxfHNlYXJjaHwyfHxyb3VuZCUyMGRpbmluZyUyMHRhYmxlJTIwbW9kZXJufGVufDB8fHx8MTc1NTcxNjIzMHww&ixlib=rb-4.1.0&q=80&w=1080",
			gallery: [
				"https://images.unsplash.com/photo-1742466524847-529840564383?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTA1OTd8MHwxfHNlYXJjaHwyfHxyb3VuZCUyMGRpbmluZyUyMHRhYmxlJTIwbW9kZXJufGVufDB8fHx8MTc1NTcxNjIzMHww&ixlib=rb-4.1.0&q=80&w=1080",
				"https://images.unsplash.com/photo-1740402065437-4edddd2932bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTA1OTd8MHwxfHNlYXJjaHwzfHxyb3VuZCUyMGRpbmluZyUyMHRhYmxlJTIwbW9kZXJufGVufDB8fHx8MTc1NTcxNjIzMHww&ixlib=rb-4.1.0&q=80&w=1080",
				"https://images.unsplash.com/photo-1665005255783-3298cabef5aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTA1OTd8MHwxfHNlYXJjaHw0fHxyb3VuZCUyMGRpbmluZyUyMHRhYmxlJTIwbW9kZXJufGVufDB8fHx8MTc1NTcxNjIzMHww&ixlib=rb-4.1.0&q=80&w=1080",
			],
		},
		inStock: true,
		rating: 4.9,
		reviewCount: 112,
		tag: "Premium",
		variants: [
			{ name: "Set Size", options: ["4-Person", "6-Person", "8-Person"], selected: "6-Person" },
			{ name: "Color", options: ["Graphite", "Espresso", "White"], selected: "Graphite" },
		],
		relatedProducts: [
			{ id: "outdoor-lounge-chair", title: "Outdoor Lounge Chair", price: "€ 420 EUR", img: "https://images.unsplash.com/photo-1650304998598-a1cf68f07fdc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTA1OTd8MHwxfHNlYXJjaHwxfHxzY2FuZGluYXZpYW4lMjBhcm1jaGFpciUyMG1vZGVybnxlbnwwfHx8fDE3NTU3MTYyMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080", href: "/product/outdoor-lounge-chair" },
			{ id: "round-dining-table", title: "Round Dining Table", price: "€ 1,100 EUR", img: "https://images.unsplash.com/photo-1571172044752-1f601d2a04fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTA1OTd8MHwxfHNlYXJjaHwxfHxyb3VuZCUyMGRpbmluZyUyMHRhYmxlJTIwbW9kZXJufGVufDB8fHx8MTc1NTcxNjIzMHww&ixlib=rb-4.1.0&q=80&w=1080", href: "/product/round-dining-table" },
			{ id: "pendant-light", title: "Pendant Light", price: "€ 280 EUR", img: "https://images.unsplash.com/photo-1745272749509-5d212d97cbd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTA1OTd8MHwxfHNlYXJjaHwxfHxwZW5kYW50JTIwbGlnaHQlMjBtb2Rlcm4lMjBtaW5pbWFsaXN0fGVufDB8fHx8MTc1NTcxNjEzNXww&ixlib=rb-4.1.0&q=80&w=1080", href: "/product/pendant-light" },
		],
	},
];

/**
 * Get all products
 */
export function getAllProducts(): ProductDetails[] {
	return products;
}

/**
 * Get a product by its ID
 */
export function getProductById(id: string): ProductDetails | undefined {
	return products.find((product) => product.id === id);
}

/**
 * Get products by category
 */
export function getProductsByCategory(category: string): ProductDetails[] {
	// This would need category mapping or category field in products
	// For now, return all products
	return products;
}

/**
 * Get featured products
 */
export function getFeaturedProducts(): ProductDetails[] {
	return products.filter((product) => product.tag === "Best Seller" || product.rating >= 4.8);
}

/**
 * Search products by query
 */
export function searchProducts(query: string): ProductDetails[] {
	const lowercaseQuery = query.toLowerCase();
	return products.filter((product) => 
		product.title.toLowerCase().includes(lowercaseQuery) ||
		product.description.toLowerCase().includes(lowercaseQuery) ||
		product.features.some(feature => feature.toLowerCase().includes(lowercaseQuery))
	);
}

