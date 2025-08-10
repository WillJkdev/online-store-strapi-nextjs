"use client";

import { Check } from "lucide-react";

interface ColorSelectorProps {
  colors: string[];
  selectedColor: string;
  onColorChange: (color: string) => void;
}

const colorMap: Record<string, string> = {
  Blanco: "bg-white border-gray-300",
  Negro: "bg-black",
  Gris: "bg-gray-500",
  Azul: "bg-blue-500",
  Rojo: "bg-red-500",
  Verde: "bg-green-500",
  Rosa: "bg-pink-500",
  Amarillo: "bg-yellow-500",
  Morado: "bg-purple-500",
  Naranja: "bg-orange-500",
};

export function ColorSelector({
  colors,
  selectedColor,
  onColorChange,
}: ColorSelectorProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {colors.map((color) => (
        <button
          key={color}
          onClick={() => onColorChange(color)}
          className={`relative w-8 h-8 rounded-full border-2 ${
            selectedColor === color ? "border-primary" : "border-gray-300"
          } ${colorMap[color] || "bg-gray-400"}`}
          title={color}
        >
          {selectedColor === color && (
            <Check className="w-4 h-4 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          )}
        </button>
      ))}
    </div>
  );
}
