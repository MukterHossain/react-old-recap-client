
import * as ReactDOM from "react-dom/client";
import {
  RouterProvider,
} from "react-router-dom";
import './index.css'
import { router } from './route/MainRoute.jsx';
import React from "react";
import AuthProvider from './provider/AuthProvider.jsx'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
