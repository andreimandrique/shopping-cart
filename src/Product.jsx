import { useOutletContext } from "react-router-dom";

export default function Product() {
  const { data, setProduct } = useOutletContext();

  function addToCart(order) {
    setProduct((prev) => [...prev, order]);
  }

  const productList = data.map((product) => (
    <div key={self.crypto.randomUUID()} className="card">
      <img
        src={product.image}
        alt={product.description}
        width={180}
        height={200}
      />
      <h3>{product.title}</h3>
      <p>{product.price}</p>
      <button
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
  ));

  return (
    <>
      <h3>Product Page</h3>
      <div>{productList}</div>
    </>
  );
}
