import { ProductCard } from "@/components/ProductCard";
import { AppProduct } from "@/lib/gqlTypes";
import { getProducts } from "@/lib/strapi";

interface RelatedProductsProps {
  categorySlug: string;
  currentProductId: string;
}

export async function RelatedProducts({
  categorySlug,
  currentProductId,
}: RelatedProductsProps) {
  const products = await getProducts({
    category: categorySlug,
    limit: 4,
  });

  // Filtrar el producto actual
  const relatedProducts = products.filter(
    (product) => product.documentId !== currentProductId
  );

  if (relatedProducts.length === 0) {
    return null;
  }

  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-2xl font-bold text-center mb-8">
        Productos Relacionados
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {relatedProducts.map((product) => (
          <ProductCard
            key={product.documentId}
            product={product as AppProduct}
          />
        ))}
      </div>
    </section>
  );
}
