import { ProductDetailView } from "@/components/ProductDetailView";
import { RelatedProducts } from "@/components/RelatedProducts";
import { getProduct } from "@/lib/strapi";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProduct(slug);

  if (!product) {
    return { title: "Producto no encontrado" };
  }

  const descriptionText = Array.isArray(product.description)
    ? product.description.map((block) => block.text).join(" ")
    : product.description;

  return {
    title: `${product.name} - StyleShop`,
    description: descriptionText,
    openGraph: {
      title: product.name,
      description: descriptionText,
      images: [
        {
          url: product.image?.url || "",
          alt: product.name,
        },
      ],
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = await getProduct(slug);

  if (!product) notFound();

  const mappedProduct = {
    id: product.documentId,
    name: product.name,
    slug: product.slug,
    description: product.description,
    price: product.price,
    originalPrice: product.originalPrice,
    discount: product.discount,
    image: {
      url: product.image?.url || "",
      width: product.image?.width,
      height: product.image?.height,
      alt: product.name,
    },
    category: product.category?.name || "",
    categorySlug: product.category?.slug || "",
    sizes: product.sizes || [],
    colors: product.colors || [],
    inStock: product.inStock,
    featured: product.featured,
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <ProductDetailView product={product} />
      <RelatedProducts
        categorySlug={mappedProduct.categorySlug}
        currentProductId={product.documentId!}
      />
    </div>
  );
}
