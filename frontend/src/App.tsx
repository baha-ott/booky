// api
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { apiSlice } from "./api/apiSlice";
// redux store
import { Provider } from "react-redux";
import { store } from "./app/store";
// routing
import { RouterProvider } from "react-router-dom";
import { router } from "./router/routers";

function App() {
  return (
    <ApiProvider api={apiSlice}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ApiProvider>
  );
}

export default App;
