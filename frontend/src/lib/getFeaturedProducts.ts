import { createServerApolloClient } from "@/lib/apolloClient";
import { GetProductsDocument } from "@/graphql/generated";
import { transformProduct } from "@/lib/transformProduct";
import type {
  GetProductsQuery,
  GetProductsQueryVariables,
} from "@/graphql/generated";

type FeaturedProductsProps = {
  featured?: boolean;
  categorySlug?: string;
  limit?: number;
  page?: number;
};

export async function getFeaturedProducts({
  featured,
  categorySlug,
  limit = 8,
  page = 1,
}: FeaturedProductsProps) {
  const client = createServerApolloClient();

  const variables: GetProductsQueryVariables = {
    page,
    limit,
  };

  if (featured !== undefined) {
    variables.featured = featured;
  }

  if (categorySlug) {
    variables.categorySlug = categorySlug;
  }

  const { data } = await client.query<GetProductsQuery>({
    query: GetProductsDocument,
    variables,
  });

  const products = data.products_connection?.nodes
    ?.map((product) => (product ? transformProduct(product) : null))
    .filter(Boolean);

  const pageInfo = data.products_connection?.pageInfo;
  const total = pageInfo?.total ?? 0;
  const pageCount = pageInfo?.pageCount ?? 1;

  return {
    products,
    total,
    pageCount,
    currentPage: page,
  };
}
