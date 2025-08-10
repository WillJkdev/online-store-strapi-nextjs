"use client";

import { Star, ThumbsUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";

interface ProductReviewsProps {
  productId: string;
}

// Datos de ejemplo - en producción vendrían de Strapi
const mockReviews = [
  {
    id: "1",
    user: "María González",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
    date: "2024-01-15",
    title: "Excelente calidad",
    comment:
      "La camiseta es de muy buena calidad, el algodón se siente suave y la talla es perfecta. Muy recomendada.",
    helpful: 12,
    verified: true,
  },
  {
    id: "2",
    user: "Carlos Ruiz",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 4,
    date: "2024-01-10",
    title: "Buena compra",
    comment:
      "Me gustó mucho el producto, aunque el color es un poco diferente a la foto. Pero en general muy satisfecho.",
    helpful: 8,
    verified: true,
  },
];

const ratingDistribution = [
  { stars: 5, count: 89, percentage: 70 },
  { stars: 4, count: 25, percentage: 20 },
  { stars: 3, count: 8, percentage: 6 },
  { stars: 2, count: 3, percentage: 2 },
  { stars: 1, count: 2, percentage: 2 },
];

export function ProductReviews({ productId }: ProductReviewsProps) {
  console.log("productId", productId);
  const averageRating = 4.8;
  const totalReviews = 127;

  return (
    <div className="space-y-6">
      {/* Resumen de Calificaciones */}
      <Card>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">{averageRating}</div>
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(averageRating)
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <p className="text-muted-foreground">{totalReviews} reseñas</p>
            </div>

            <div className="space-y-2">
              {ratingDistribution.map((item) => (
                <div key={item.stars} className="flex items-center gap-3">
                  <span className="text-sm w-8">{item.stars}★</span>
                  <Progress value={item.percentage} className="flex-1" />
                  <span className="text-sm text-muted-foreground w-8">
                    {item.count}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Lista de Reseñas */}
      <div className="space-y-4">
        {mockReviews.map((review) => (
          <Card key={review.id}>
            <CardContent className="p-6">
              <div className="flex gap-4">
                <Avatar>
                  <AvatarImage src={review.avatar || "/placeholder.svg"} />
                  <AvatarFallback>{review.user.charAt(0)}</AvatarFallback>
                </Avatar>

                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="font-medium">{review.user}</h4>
                    {review.verified && (
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                        Compra verificada
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < review.rating
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {review.date}
                    </span>
                  </div>

                  <h5 className="font-medium mb-2">{review.title}</h5>
                  <p className="text-muted-foreground mb-3">{review.comment}</p>

                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm">
                      <ThumbsUp className="w-4 h-4 mr-1" />
                      Útil ({review.helpful})
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Botón para ver más reseñas */}
      <div className="text-center">
        <Button variant="outline">Ver todas las reseñas</Button>
      </div>
    </div>
  );
}
