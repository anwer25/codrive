import React from "react";
import ReactDOM from "react-dom/client";
import "@/assets/sass/index.scss";
import { ProviderComponent } from "./components";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ProviderComponent>
      <RouterProvider router={router} />
    </ProviderComponent>
  </React.StrictMode>,
);
