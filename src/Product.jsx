import { useContext } from "react";
import { ProductContext } from "./App";

export default function Product() {
  const { product, setProduct } = useContext(ProductContext);

  function addtoCart() {
    setProduct("t shirt");
  }

  return (
    <>
      <h3>Product Page</h3>
      <p>{product}</p>
      <button onClick={addtoCart}>Add to Cart</button>
    </>
  );
}
