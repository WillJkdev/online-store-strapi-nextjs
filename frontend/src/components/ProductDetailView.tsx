"use client";

import { useState } from "react";
import {
  Minus,
  Plus,
  Heart,
  Share2,
  Star,
  Truck,
  Shield,
  RotateCcw,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useCart } from "@/hooks/useCart";
import { toast } from "sonner";

import type { Product } from "@/lib/types";
import { ProductImageGallery } from "./ProductImageGallery";
import { ColorSelector } from "./ColorSelector";
import { ProductReviews } from "./ProductReviews";
import { SizeSelector } from "./SizeSelector";

interface ProductDetailViewProps {
  product: Product;
}

interface StrapiRichTextChild {
  text: string;
}

interface StrapiRichTextBlock {
  type: "paragraph" | "heading" | string;
  children?: StrapiRichTextChild[];
}

function RichTextRenderer({ content }: { content: StrapiRichTextBlock[] }) {
  return (
    <>
      {content.map((block, i) => {
        if (block.type === "paragraph") {
          return (
            <p key={i} className="mb-4 leading-relaxed">
              {block.children?.map((child) => child.text).join("")}
            </p>
          );
        }

        if (block.type === "heading") {
          return (
            <h2 key={i} className="text-xl font-bold mt-6 mb-2">
              {block.children?.map((child) => child.text).join("")}
            </h2>
          );
        }

        return null;
      })}
    </>
  );
}

export function ProductDetailView({ product }: ProductDetailViewProps) {
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState<string>(
    product.colors[0] || ""
  );
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);

  const { addItem } = useCart();

  const handleAddToCart = () => {
    if (product.sizes.length > 0 && !selectedSize) {
      toast.error("Selecciona una talla", {
        description:
          "Por favor selecciona una talla antes de agregar al carrito",
      });
      return;
    }

    addItem({
      ...product,
      originalPrice: product.originalPrice ?? null,
      discount: product.discount ?? null,
      documentId: product.documentId ?? "",
      selectedSize,
      selectedColor,
      quantity,
      category:
        product.category && typeof product.category === "object"
          ? { name: product.category.name }
          : undefined,
    });

    toast.success("¡Agregado al carrito!", {
      description: `${product.name} se agregó al carrito`,
    });
  };
  const discountAmount = product.originalPrice
    ? product.originalPrice - product.price
    : 0;
  const discountPercentage = product.originalPrice
    ? Math.round((discountAmount / product.originalPrice) * 100)
    : 0;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Galería de Imágenes */}
        <div className="space-y-4">
          <ProductImageGallery product={product} />
        </div>

        {/* Información del Producto */}
        <div className="space-y-6">
          {/* Header */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="secondary">
                {product.category?.name ?? "Sin categoría"}
              </Badge>
              {product.featured && (
                <Badge className="bg-yellow-500">Destacado</Badge>
              )}
              {!product.inStock && <Badge variant="destructive">Agotado</Badge>}
            </div>

            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>

            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
                <span className="ml-2 text-sm text-muted-foreground">
                  (4.8) • 127 reseñas
                </span>
              </div>
            </div>

            {/* Precio */}
            <div className="flex items-center gap-4 mb-6">
              <span className="text-3xl font-bold">${product.price}</span>
              {product.originalPrice && (
                <>
                  <span className="text-xl text-muted-foreground line-through">
                    ${product.originalPrice}
                  </span>
                  <Badge className="bg-red-500">-{discountPercentage}%</Badge>
                </>
              )}
            </div>

            {discountAmount > 0 && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-6">
                <p className="text-red-700 font-medium">
                  ¡Ahorra ${discountAmount.toFixed(2)}! Oferta por tiempo
                  limitado
                </p>
              </div>
            )}
          </div>

          {/* Selectores */}
          <div className="space-y-4">
            {/* Colores */}
            {product.colors.length > 0 && (
              <div>
                <h3 className="font-medium mb-3">Color: {selectedColor}</h3>
                <ColorSelector
                  colors={product.colors}
                  selectedColor={selectedColor}
                  onColorChange={setSelectedColor}
                />
              </div>
            )}

            {/* Tallas */}
            {product.sizes.length > 0 && (
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-medium">
                    Talla: {selectedSize || "Seleccionar"}
                  </h3>
                  <Button variant="link" className="text-sm p-0 h-auto">
                    Guía de tallas
                  </Button>
                </div>
                <SizeSelector
                  sizes={product.sizes}
                  selectedSize={selectedSize}
                  onSizeChange={setSelectedSize}
                />
              </div>
            )}

            {/* Cantidad */}
            <div>
              <h3 className="font-medium mb-3">Cantidad</h3>
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-12 text-center font-medium">{quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(quantity + 1)}
                  disabled={quantity >= 10}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Botones de Acción */}
          <div className="space-y-3">
            <Button
              className="w-full h-12 text-lg"
              onClick={handleAddToCart}
              disabled={!product.inStock}
              size="lg"
            >
              {product.inStock
                ? `Agregar al carrito - $${(product.price * quantity).toFixed(
                    2
                  )}`
                : "Agotado"}
            </Button>

            <div className="flex gap-3">
              <Button
                variant="outline"
                className="flex-1 bg-transparent"
                onClick={() => setIsFavorite(!isFavorite)}
              >
                <Heart
                  className={`w-4 h-4 mr-2 ${
                    isFavorite ? "fill-red-500 text-red-500" : ""
                  }`}
                />
                {isFavorite ? "En favoritos" : "Agregar a favoritos"}
              </Button>
              <Button variant="outline" size="icon">
                <Share2 className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Información de Envío */}
          <Card>
            <CardContent className="p-4">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Truck className="w-5 h-5 text-green-600" />
                  <div>
                    <p className="font-medium">Envío gratis</p>
                    <p className="text-sm text-muted-foreground">
                      En pedidos mayores a $50
                    </p>
                  </div>
                </div>
                <Separator />
                <div className="flex items-center gap-3">
                  <RotateCcw className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="font-medium">Devoluciones gratis</p>
                    <p className="text-sm text-muted-foreground">
                      30 días para cambios y devoluciones
                    </p>
                  </div>
                </div>
                <Separator />
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-purple-600" />
                  <div>
                    <p className="font-medium">Compra protegida</p>
                    <p className="text-sm text-muted-foreground">
                      Garantía de satisfacción 100%
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Tabs con información adicional */}
      <div className="mt-16">
        <Tabs defaultValue="description" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="description">Descripción</TabsTrigger>
            <TabsTrigger value="specifications">Especificaciones</TabsTrigger>
            <TabsTrigger value="reviews">Reseñas (127)</TabsTrigger>
          </TabsList>

          <TabsContent value="description" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <div className="prose max-w-none">
                  <RichTextRenderer content={product.description} />
                  <h3 className="text-xl font-semibold mt-6 mb-4">
                    Características principales:
                  </h3>
                  <ul className="space-y-2">
                    <li>• Material de alta calidad y duradero</li>
                    <li>• Diseño moderno y versátil</li>
                    <li>• Fácil cuidado y mantenimiento</li>
                    <li>• Disponible en múltiples colores y tallas</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="specifications" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-4">
                      Detalles del Producto
                    </h3>
                    <dl className="space-y-2">
                      <div className="flex justify-between">
                        <dt className="text-muted-foreground">SKU:</dt>
                        <dd className="font-medium">
                          {product.slug.toUpperCase()}
                        </dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="text-muted-foreground">Categoría:</dt>
                        <dd className="font-medium">
                          {product.category?.name ?? "Sin categoría"}
                        </dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="text-muted-foreground">
                          Disponibilidad:
                        </dt>
                        <dd
                          className={`font-medium ${
                            product.inStock ? "text-green-600" : "text-red-600"
                          }`}
                        >
                          {product.inStock ? "En stock" : "Agotado"}
                        </dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="text-muted-foreground">Colores:</dt>
                        <dd className="font-medium">
                          {product.colors.join(", ")}
                        </dd>
                      </div>
                    </dl>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-4">Tallas Disponibles</h3>
                    <div className="flex flex-wrap gap-2">
                      {product.sizes.map((size) => (
                        <Badge key={size} variant="outline">
                          {size}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reviews" className="mt-6">
            <ProductReviews productId={product.documentId ?? ""} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
