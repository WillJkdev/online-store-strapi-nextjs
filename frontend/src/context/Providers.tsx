"use client";

// import { ApolloProvider } from "@apollo/client";
// import client from "@/lib/apolloClient";
import { CartProvider } from "@/context/CartProvider";
import { Toaster } from "sonner";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    // <ApolloProvider client={client}>
    <CartProvider>
      {children}
      <Toaster richColors position="top-center" />
    </CartProvider>
    // </ApolloProvider>
  );
}
