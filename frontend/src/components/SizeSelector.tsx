"use client";

import { Button } from "@/components/ui/button";

interface SizeSelectorProps {
  sizes: string[];
  selectedSize: string;
  onSizeChange: (size: string) => void;
}

export function SizeSelector({
  sizes,
  selectedSize,
  onSizeChange,
}: SizeSelectorProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {sizes.map((size) => (
        <Button
          key={size}
          variant={selectedSize === size ? "default" : "outline"}
          size="sm"
          onClick={() => onSizeChange(size)}
          className="min-w-[3rem]"
        >
          {size}
        </Button>
      ))}
    </div>
  );
}
