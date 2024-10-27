import { useOutletContext } from "react-router-dom";
import Card from "./components/Card";

export default function Product() {
  const { data, setProduct } = useOutletContext();

  function addToCart(order) {
    setProduct((prev) => [...prev, order]);
  }

  const productList = data.map((product) => (
    <div key={self.crypto.randomUUID()}>
      <Card>
        <div className="img-container">
          <img src={product.image} alt={product.description} width={200} />
        </div>
        <div className="detail-container">
          <h3>{product.title}</h3>
          <p>{product.price}</p>
        </div>
        <div className="button-container">
          <button
            className="button"
            onClick={() => {
              addToCart({
                id: self.crypto.randomUUID(),
                image: product.image,
                title: product.title,
                price: product.price,
                quantity: 1,
              });
            }}
          >
            Add to Cart
          </button>
        </div>
      </Card>
    </div>
  ));

  return (
    <>
      <div className="center">
        <h1>Product Page</h1>
      </div>
      <div className="card-container">{productList}</div>
    </>
  );
}
