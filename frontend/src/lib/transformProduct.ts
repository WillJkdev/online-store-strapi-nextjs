import { GetProductsQuery } from "@/graphql/generated";
import { AppProduct } from "./gqlTypes";

type ProductConnection = NonNullable<GetProductsQuery["products_connection"]>;
type GQLProduct = ProductConnection["nodes"][number];

// Transforma un solo producto
export function transformProduct(raw: GQLProduct): AppProduct | null {
  return {
    documentId: raw.documentId,
    name: raw.name,
    slug: raw.slug,
    price: raw.price,
    originalPrice: raw.originalPrice ?? 0,
    discount: raw.discount ?? 0,
    image: raw.image ? { url: raw.image.url } : undefined,
    category: raw.category ? { name: raw.category.name } : undefined,
  };
}

export function transformProducts(
  products: GQLProduct[] | undefined
): AppProduct[] {
  if (!products) return [];
  return products
    .map(transformProduct)
    .filter((p): p is AppProduct => p !== null);
}
