"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("¡Suscripción exitosa!", {
      description: "Te has suscrito a nuestro newsletter",
    });
    setEmail("");
  };

  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Mantente al día</h2>
        <p className="text-lg mb-8 opacity-90">
          Suscríbete a nuestro newsletter y recibe las últimas ofertas y
          novedades
        </p>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto flex gap-4">
          <Input
            type="email"
            placeholder="Tu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-white text-black"
          />
          <Button type="submit" variant="secondary">
            Suscribirse
          </Button>
        </form>
      </div>
    </section>
  );
}
