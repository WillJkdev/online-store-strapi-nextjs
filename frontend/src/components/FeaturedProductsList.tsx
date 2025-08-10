"use client";

import { ProductCard } from "@/components/ProductCard";
import { Pagination } from "@/components/Pagination";
import { AppProduct } from "@/lib/gqlTypes";

type FeaturedProductsListProps = {
  products: AppProduct[];
  total: number;
  pageCount: number;
  currentPage: number;
};

export function FeaturedProductsList({
  products,
  total,
  pageCount,
  currentPage,
}: FeaturedProductsListProps) {
  return (
    <div>
      <div className="mb-6 text-sm text-muted-foreground">
        Mostrando {products.length} de {total} productos
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.documentId} product={product} />
        ))}
      </div>

      {pageCount > 1 && (
        <div className="mt-8">
          <Pagination totalPages={pageCount} currentPage={currentPage} />
        </div>
      )}
    </div>
  );
}
