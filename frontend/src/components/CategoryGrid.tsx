import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const categories = [
  {
    name: "Hombre",
    href: "/hombre",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Mujer",
    href: "/mujer",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Accesorios",
    href: "/accesorios",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Calzado",
    href: "/calzado",
    image: "/placeholder.svg?height=300&width=300",
  },
];

export function CategoryGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {categories.map((category) => (
        <Link key={category.name} href={category.href}>
          <Card className="group cursor-pointer overflow-hidden hover:shadow-lg transition-shadow">
            <CardContent className="p-0">
              <div className="relative aspect-square">
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  width={300}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <h3 className="text-white text-xl font-bold">
                    {category.name}
                  </h3>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}
