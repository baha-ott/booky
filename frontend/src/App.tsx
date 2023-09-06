import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { apiSlice } from "./api/apiSlice";
import { store } from "./app/store";
import { router } from "./router/routers";

function App() {
  return (
    <>
      <ApiProvider api={apiSlice}>
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </ApiProvider>
    </>
  );
}

export default App;
