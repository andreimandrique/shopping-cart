import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import useProduct from "./hooks/useProduct";
import { useEffect, useState } from "react";

export default function App() {
  const [product, setProduct] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const { data, error, loading } = useProduct();

  useEffect(() => {
    const newTotalPrice = product.reduce(
      (sum, item) => sum + (item.price || 0),
      0
    );
    setTotalPrice(newTotalPrice);
  }, [product]);

  if (error) return <p>Error</p>;
  if (loading) return <p>Loading...</p>;

  return (
    <>
      <Header numberOfProduct={product.length} />
      <Outlet context={{ data, setProduct, product, totalPrice }} />
    </>
  );
}
