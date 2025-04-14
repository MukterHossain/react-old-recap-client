
import * as ReactDOM from "react-dom/client";
import {
  RouterProvider,
} from "react-router-dom";
import './index.css'
import { router } from './route/MainRoute.jsx';
import React from "react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
