import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import useProduct from "./useProduct";
import { useState } from "react";

export default function App() {
  const [product, setProduct] = useState([]);

  const { data, error, loading } = useProduct();

  if (error) return <p>Error</p>;
  if (loading) return <p>Loading...</p>;

  return (
    <>
      <Header numberOfProduct={product.length} />
      <Outlet context={{ data, setProduct, product }} />
    </>
  );
}
