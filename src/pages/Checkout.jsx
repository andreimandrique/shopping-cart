import { useOutletContext } from "react-router-dom";
import Card from "../components/Card";
import ProductImage from "../components/ProductImage";
import ProductDesc from "../components/ProductDesc";

export default function Checkout() {
  const { setProduct, product, totalPrice } = useOutletContext();

  function cancelProduct(productId) {
    const updatedProduct = product.filter(
      (product) => product.id !== productId
    );
    setProduct(updatedProduct);
  }

  function addQuantity(productId) {
    const productToUpdate = product.find((product) => product.id === productId);

    if (productToUpdate) {
      productToUpdate.quantity++;

      setProduct((prevProduct) =>
        prevProduct.map((product) =>
          product.id === productId ? productToUpdate : product
        )
      );
    }
  }

  function minusQuantity(productId) {
    const productToUpdate = product.find((product) => product.id === productId);

    if (productToUpdate && productToUpdate.quantity > 1) {
      productToUpdate.quantity--;

      setProduct((prevProduct) =>
        prevProduct.map((product) =>
          product.id === productId ? productToUpdate : product
        )
      );
    }
  }

  const productList = product.map((product) => (
    <div key={self.crypto.randomUUID()}>
      <Card>
        <ProductImage imgURL={product.image} desc={product.description} />
        <ProductDesc title={product.title} price={product.price} />
        <p>Quantity: {product.quantity}</p>
        <button
          className="btn-checkout"
          onClick={() => {
            cancelProduct(product.id);
          }}
        >
          Cancel
        </button>
        <button
          className="btn-checkout"
          onClick={() => {
            addQuantity(product.id);
          }}
        >
          Add
        </button>
        <button
          className="btn-checkout"
          onClick={() => {
            minusQuantity(product.id);
          }}
        >
          Minus
        </button>
      </Card>
    </div>
  ));

  if (product.length == 0)
    return (
      <div className="cente">
        <h1>You don&#39;t have any order yet !</h1>
      </div>
    );

  return (
    <>
      <div className="checkout-container">
        <div>
          <h1>Checkout Page </h1>
        </div>

        <div>
          <h1>Total Price: $ {totalPrice.toFixed(2)}</h1>
        </div>
      </div>
      <div className="card-container">{productList}</div>
    </>
  );
}
