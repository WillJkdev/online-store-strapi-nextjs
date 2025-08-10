import { Suspense } from "react";
import { HeroSection } from "@/components/HeroSection";
import { CategoryGrid } from "@/components/CategoryGrid";
import { Newsletter } from "@/components/Newsletter";
import { ProductCardSkeleton } from "@/components/ProductCardSkeleton";
import { getFeaturedProducts } from "@/lib/getFeaturedProducts";
import { FeaturedProductsList } from "@/components/FeaturedProductsList";
import { AppProduct } from "@/lib/gqlTypes";

type HomePageProps = {
  searchParams?: Promise<{
    page?: string;
  }>;
};
export default async function HomePage({ searchParams }: HomePageProps) {
  const params = await searchParams;
  const currentPage = Number(params?.page ?? "1");

  const { products, total, pageCount } = await getFeaturedProducts({
    featured: true,
    limit: 1,
    page: currentPage,
  });
  const filteredProducts = products?.filter((p): p is AppProduct => p !== null);
  return (
    <div className="min-h-screen">
      <HeroSection />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Categorías</h2>
          <CategoryGrid />
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Productos Destacados
          </h2>
          <Suspense fallback={<ProductCardSkeleton />}>
            <FeaturedProductsList
              products={filteredProducts || []}
              total={total}
              pageCount={pageCount}
              currentPage={currentPage}
            />
          </Suspense>
        </div>
      </section>

      <Newsletter />
    </div>
  );
}
