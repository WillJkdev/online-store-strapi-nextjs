import type { Product, Media, Category } from "@/lib/types";

const STRAPI_URL =
  process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";
const STRAPI_TOKEN = process.env.STRAPI_TOKEN;

async function fetchAPI(path: string, options: RequestInit = {}) {
  const url = `${STRAPI_URL}/api${path}`;

  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      ...(STRAPI_TOKEN && { Authorization: `Bearer ${STRAPI_TOKEN}` }),
      ...options.headers,
    },
    ...options,
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
}

export async function getProducts(params?: {
  featured?: boolean;
  category?: string;
  limit?: number;
  page?: number;
}): Promise<Product[]> {
  const searchParams = new URLSearchParams();

  if (params?.featured) {
    searchParams.append("filters[featured][$eq]", "true");
  }

  if (params?.category) {
    searchParams.append("filters[category][slug][$eq]", params.category);
  }

  if (params?.limit) {
    searchParams.append("pagination[pageSize]", params.limit.toString());
  }

  if (params?.page) {
    searchParams.append("pagination[page]", params.page.toString());
  }

  // ❗ Importante para obtener relaciones como image, images, category
  searchParams.append("populate", "*");

  const url = `/products?${searchParams.toString()}`;
  const response = await fetchAPI(url);
  return response.data.map((item: Product) => transformProduct(item));
}

export async function getProduct(slug: string): Promise<Product | null> {
  try {
    const response = await fetchAPI(
      `/products?filters[slug][$eq]=${slug}&populate=*`
    );

    if (response.data.length === 0) {
      return null;
    }

    return transformProduct(response.data[0]);
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
}

function transformProduct(raw: Product): Product {
  const {
    // id,
    documentId,
    name,
    slug,
    description,
    price,
    originalPrice,
    discount,
    image,
    // images,
    category,
    sizes,
    colors,
    inStock,
    featured,
    createdAt,
    updatedAt,
    publishedAt,
    locale,
    localizations,
  } = raw;

  return {
    // id: String(id), // ✅ Convertido a string
    documentId,
    name,
    slug,
    description: description || [], // ✅ Tipo RichText[]
    price,
    originalPrice,
    discount,
    image: image ? transformMedia(image) : undefined,
    // images: Array.isArray(images) ? images.map(transformMedia) : [],
    category: category ? transformCategory(category) : undefined,
    sizes: sizes || [],
    colors: colors || [],
    inStock: inStock ?? true,
    featured: featured ?? false,
    createdAt,
    updatedAt,
    publishedAt,
    locale,
    localizations: localizations?.map(transformProduct),
  };
}

// ✅ Nueva función para adaptar un objeto Media
function transformMedia(media: Media): Media {
  return {
    // id: String(media.id),
    name: media.name,
    url: media.url,
    width: media.width,
    height: media.height,
    mime: media.mime,
    size: media.size,
    previewUrl: media.previewUrl,
    provider: media.provider,
    provider_metadata: media.provider_metadata,
  };
}

// ✅ Nueva función para adaptar un objeto Category
function transformCategory(cat: Category): Category {
  return {
    // id: String(cat.id),
    name: cat.name,
    slug: cat.slug,
    createdAt: cat.createdAt,
    updatedAt: cat.updatedAt,
    publishedAt: cat.publishedAt,
    locale: cat.locale,
  };
}
