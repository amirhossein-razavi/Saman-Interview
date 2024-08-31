import React from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "@mui/material/styles";

import HomePage from "pages";

const queryClient = new QueryClient();

const element = document.getElementById("root") as HTMLElement;
const root = createRoot(element);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={{}}>
      <QueryClientProvider client={queryClient}>
        <HomePage />
      </QueryClientProvider>
    </ThemeProvider>
  </React.StrictMode>
);
