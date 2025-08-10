import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">StyleShop</h3>
            <p className="text-gray-400 mb-4">
              Tu tienda de moda online de confianza. Calidad y estilo en cada
              prenda.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Productos</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/hombre" className="hover:text-white">
                  Hombre
                </Link>
              </li>
              <li>
                <Link href="/mujer" className="hover:text-white">
                  Mujer
                </Link>
              </li>
              <li>
                <Link href="/accesorios" className="hover:text-white">
                  Accesorios
                </Link>
              </li>
              <li>
                <Link href="/calzado" className="hover:text-white">
                  Calzado
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Ayuda</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/contacto" className="hover:text-white">
                  Contacto
                </Link>
              </li>
              <li>
                <Link href="/envios" className="hover:text-white">
                  Envíos
                </Link>
              </li>
              <li>
                <Link href="/devoluciones" className="hover:text-white">
                  Devoluciones
                </Link>
              </li>
              <li>
                <Link href="/tallas" className="hover:text-white">
                  Guía de tallas
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/privacidad" className="hover:text-white">
                  Privacidad
                </Link>
              </li>
              <li>
                <Link href="/terminos" className="hover:text-white">
                  Términos
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="hover:text-white">
                  Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 StyleShop. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
