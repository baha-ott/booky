// react router dom
import { createBrowserRouter } from "react-router-dom";

// loaders

// routes(pages)
import Root from "./root";
import HomePage from "../pages/home/page";
import FavoritesPage from "../pages/favorites/page";

import AddBookPage from "../pages/add-book/page";
import BookPage from "../pages/book-page/page";
import EditBookPage from "../pages/edit-book/page";
import RootErrorBoundary from "../components/RootErrorBoundary";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <RootErrorBoundary />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/favorites",
        element: <FavoritesPage />,
      },
      {
        path: "/add-book",
        element: <AddBookPage />,
      },
      {
        path: "/:bookId",
        element: <BookPage />,
      },
      {
        path: "/edit/:bookId",
        element: <EditBookPage />,
      },
    ],
  },
]);
