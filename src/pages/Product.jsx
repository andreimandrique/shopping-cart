import { useOutletContext } from "react-router-dom";
import Card from "../components/Card";
import ProductImage from "../components/ProductImage";
import ProductDesc from "../components/ProductDesc";
import Button from "../components/Button";

export default function Product() {
  const { data, setProduct } = useOutletContext();

  function addToCart(order) {
    setProduct((prev) => [...prev, order]);
  }

  const productList = data.map((product) => (
    <div key={self.crypto.randomUUID()}>
      <Card>
        <ProductImage imgURL={product.image} desc={product.description} />
        <ProductDesc title={product.title} price={product.price} />
        <Button
          text="Add to Cart"
          btnClick={() => {
            addToCart({
              id: self.crypto.randomUUID(),
              image: product.image,
              title: product.title,
              price: product.price,
              quantity: 1,
            });
          }}
        />
      </Card>
    </div>
  ));

  return (
    <>
      <div className="center">
        <h1>Product Page </h1>
      </div>
      <div className="card-container">{productList}</div>
    </>
  );
}
