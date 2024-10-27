import App from "./App";
import Product from "./Product";
import Checkout from "./Checkout";
import ErrorPage from "./ErrorPage";
import DefaultPage from "./pages/DefaultPage";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <DefaultPage /> },
      { path: "product", element: <Product /> },
      { path: "checkout", element: <Checkout /> },
    ],
  },
];

export default routes;
