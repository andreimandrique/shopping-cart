import { createContext, useState } from "react";
import { Outlet, Link } from "react-router-dom";

export const ProductContext = createContext();

export default function App() {
  const [product, setProduct] = useState("");

  return (
    <>
      <h1>HomePage</h1>
      <p>my order: {product}</p>
      <div>
        <li>
          <Link to="/">Go to Home</Link>
        </li>
        <li>
          <Link to="/product">Go to Product</Link>
        </li>
        <li>
          <Link to="/checkout">Go to Checkout</Link>
        </li>
      </div>
      <ProductContext.Provider value={{ product, setProduct }}>
        <Outlet />
      </ProductContext.Provider>
    </>
  );
}
