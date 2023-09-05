import React from "react";
import ReactDOM from "react-dom/client";

// router
import { RouterProvider } from "react-router-dom";
import { router } from "./router/routers.tsx";

import "./index.css";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { apiSlice } from "./api/apiSlice.ts";
import { store } from "./app/store.ts";
import Provider from "react-redux/es/components/Provider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApiProvider api={apiSlice}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ApiProvider>
  </React.StrictMode>
);
