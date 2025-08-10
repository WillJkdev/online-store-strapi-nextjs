export type AppProduct = {
  documentId?: string;
  name: string;
  slug: string;
  price: number;
  originalPrice: number | null;
  discount: number | null;
  image?: { url: string };
  category?: { name: string };
  selectedSize?: string;
  selectedColor?: string;
  quantity?: number;
};
