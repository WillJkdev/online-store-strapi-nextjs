import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative h-[600px] bg-gradient-to-r from-gray-900 to-gray-600 flex items-center justify-center text-white">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: "url('/placeholder.svg?height=600&width=1200')",
        }}
      />
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">Nueva Colección</h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200">
          Descubre las últimas tendencias en moda para esta temporada
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/productos">Ver Productos</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/ofertas">Ver Ofertas</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
