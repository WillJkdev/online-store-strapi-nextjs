import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import fetch from "cross-fetch"; // para asegurar compatibilidad SSR

export function createServerApolloClient() {
  return new ApolloClient({
    link: new HttpLink({
      uri: process.env.STRAPI_GRAPHQL_API,
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
      },
      fetch,
    }),
    cache: new InMemoryCache(),
    ssrMode: true,
  });
}
