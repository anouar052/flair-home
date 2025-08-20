import { getProductById } from "@/data/products";
import ProductPage from "@/components/ProductPage";
import { notFound } from "next/navigation";

export default async function ProductRoute({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  return <ProductPage product={product} />;
}
