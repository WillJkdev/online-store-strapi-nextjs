// Subtipo para textos enriquecidos (como tiptap, editor.js o markdown)
export type RichText = {
  type: string;
  content?: RichText[];
  text?: string;
  marks?: string[];
};

// Subtipo para medios (image, video, etc.)
export interface Media {
  // id: string;
  documentId?: string;
  name: string;
  url: string;
  width?: number | null;
  height?: number | null;
  mime?: string;
  size?: number;
  previewUrl?: string | null;
  provider: string;
  provider_metadata?: {
    public_id?: string;
    resource_type?: string;
    [key: string]: unknown;
  };
}

// Subtipo para categorías
export interface Category {
  // id: string;
  documentId?: string;
  name: string;
  slug: string;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
  locale?: string;
}

// Tipo principal de producto
export interface Product {
  // id?: string; // ← convertido desde number
  documentId?: string;
  name: string;
  slug: string;
  description: RichText[]; // ← enriquecido
  price: number;
  originalPrice?: number | null;
  discount?: number | null;
  image?: Media;
  images?: Media[];
  category?: Category | null;
  sizes: string[];
  colors: string[];
  inStock: boolean;
  featured?: boolean | null;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
  locale?: string;
  localizations?: Product[];
}
