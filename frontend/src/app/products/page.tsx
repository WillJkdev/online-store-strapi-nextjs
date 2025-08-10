import { Suspense } from "react";
import { ProductCard } from "@/components/ProductCard";
import { ProductCardSkeleton } from "@/components/ProductCardSkeleton";
import { getProducts } from "@/lib/strapi";

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Todos los Productos</h1>

      <Suspense fallback={<ProductCardSkeleton />}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.documentId}
              product={{
                ...product,
                originalPrice:
                  product.originalPrice === undefined
                    ? null
                    : product.originalPrice,
                discount:
                  product.discount === undefined ? null : product.discount,
                category:
                  product.category &&
                  typeof product.category === "object" &&
                  "name" in product.category
                    ? { name: product.category.name }
                    : undefined,
              }}
            />
          ))}
        </div>
      </Suspense>
    </div>
  );
}
