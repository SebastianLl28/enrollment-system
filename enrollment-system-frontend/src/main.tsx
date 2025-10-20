import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
      staleTime: 0,
      gcTime: 0,
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={client}>
    <StrictMode>
      <App />
      <ReactQueryDevtools initialIsOpen={false} />
    </StrictMode>
  </QueryClientProvider>
);
