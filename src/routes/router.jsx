import { createBrowserRouter, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Cart from "../pages/Cart";
import Category from "../pages/Category";
import ProductDetails from "../pages/ProductDetails";
import NotFound from "../pages/NotFound";
import Layout from "../layouts/Layout";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "old-home", element: <Navigate to="/" /> },
        { path: "about", element: <About /> },
        { path: "cart", element: <Cart /> },
        { path: "category/:categoryId", element: <Category /> },
        { path: "product/:productId", element: <ProductDetails /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ],
  {
    basename: "/ReactRouterMiniShop",
  },
);

export default router;
