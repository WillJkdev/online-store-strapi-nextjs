"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import type { Product } from "@/lib/types";
import Image from "next/image";

interface ProductImageGalleryProps {
  product: Product;
}

export function ProductImageGallery({ product }: ProductImageGalleryProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL || "";

  const images = [
    {
      url: product.image?.url
        ? `${baseUrl}${product.image.url}`
        : "/placeholder.svg?height=600&width=600",
      alt: product.image?.name || product.name,
      width: product.image?.width || 600,
      height: product.image?.height || 600,
    },
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="space-y-4">
      {/* Imagen Principal */}
      <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
        <Image
          src={images[currentImageIndex].url}
          alt={`${product.name} - Vista ${currentImageIndex + 1}`}
          width={images[currentImageIndex].width}
          height={images[currentImageIndex].height}
          className="w-full h-full object-cover"
        />

        {/* Controles de navegación */}
        {images.length > 1 && (
          <>
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
              onClick={prevImage}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
              onClick={nextImage}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </>
        )}

        {/* Botón de Zoom */}
        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 bg-white/80 hover:bg-white"
            >
              <ZoomIn className="h-4 w-4" />
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-4xl">
            <Image
              src={images[currentImageIndex].url}
              alt={`${product.name} - Vista ampliada`}
              width={images[currentImageIndex].width}
              height={images[currentImageIndex].height}
              className="w-full h-auto"
            />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
