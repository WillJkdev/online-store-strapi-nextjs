"use client";

import Link from "next/link";
import Image from "next/image";
import { Heart, ShoppingCart } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import { useCart } from "@/hooks/useCart";
import { AppProduct } from "@/lib/gqlTypes";

export function ProductCard({ product }: { product: AppProduct }) {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem(product);
    toast.success("Producto agregado", {
      description: `${product.name} se agregó al carrito`,
    });
  };

  return (
    <Card className="group overflow-hidden hover:shadow-lg transition-shadow">
      <CardContent className="p-0">
        <div className="relative aspect-square overflow-hidden">
          <Link href={`/products/${product.slug}`}>
            {product.image?.url && (
              <Image
                src={
                  product.image?.url
                    ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${product.image.url}`
                    : "/placeholder.svg?height=300&width=300&query=clothing+item"
                }
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                width={300}
                height={300}
              />
            )}
          </Link>
          {product.discount && (
            <Badge className="absolute top-2 left-2 bg-red-500">
              -{product.discount}%
            </Badge>
          )}
          <Button
            size="icon"
            variant="ghost"
            className="absolute top-2 right-2 bg-white/80 hover:bg-white"
          >
            <Heart className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
      <CardFooter className="p-4">
        <div className="w-full">
          <Link href={`/products/${product.slug}`}>
            <h3 className="font-semibold text-sm mb-1 hover:text-primary transition-colors">
              {product.name}
            </h3>
          </Link>
          <p className="text-xs text-muted-foreground mb-2">
            {product.category?.name}
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              {product.originalPrice && (
                <span className="text-sm text-muted-foreground line-through">
                  ${product.originalPrice}
                </span>
              )}
              <span className="font-bold text-lg">${product.price}</span>
            </div>
            <Button size="sm" onClick={handleAddToCart}>
              <ShoppingCart className="h-4 w-4 mr-1" />
              Agregar
            </Button>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
