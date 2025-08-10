"use client";

import Link from "next/link";
import { ShoppingBag, Search, Menu, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useCart } from "@/hooks/useCart";
import { useState } from "react";

export function Header() {
  const { items } = useCart();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const itemCount = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold">StyleShop</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/productos"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Productos
            </Link>
            <Link
              href="/hombre"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Hombre
            </Link>
            <Link
              href="/mujer"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Mujer
            </Link>
            <Link
              href="/ofertas"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Ofertas
            </Link>
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex items-center space-x-4 flex-1 max-w-sm mx-8">
            <div className="relative w-full">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Buscar productos..." className="pl-8" />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <Search className="h-5 w-5" />
            </Button>

            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>

            <Link href="/carrito">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingBag className="h-5 w-5" />
                {itemCount > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs">
                    {itemCount}
                  </Badge>
                )}
              </Button>
            </Link>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="flex flex-col space-y-4 mt-8">
                  <Link href="/productos" className="text-lg font-medium">
                    Productos
                  </Link>
                  <Link href="/hombre" className="text-lg font-medium">
                    Hombre
                  </Link>
                  <Link href="/mujer" className="text-lg font-medium">
                    Mujer
                  </Link>
                  <Link href="/ofertas" className="text-lg font-medium">
                    Ofertas
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Mobile Search */}
        {isSearchOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Buscar productos..." className="pl-8" />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
