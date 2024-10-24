import useProduct from "./useProduct";
import Card from "./Card";
import { useState } from "react";

function App() {
  const { data, error, loading } = useProduct();
  const [order, setOrder] = useState([]);

  function addToCart(productDetail) {
    setOrder((prevOrder) => [...prevOrder, { productDetail }]);
  }

  function handleOrder() {
    console.log(order);
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>A network error was encountered</p>;

  const productList = data.map((product) => (
    <div key={product.id} className="card">
      <Card
        title={product.title}
        image={product.image}
        price={product.price}
        onClickBtn={() =>
          addToCart({
            id: product.id,
            title: product.title,
            image: product.image,
            price: product.price,
          })
        }
      />
    </div>
  ));

  return (
    <>
      <button onClick={handleOrder}>Show Order</button>
      <div>{productList}</div>
    </>
  );
}

export default App;
