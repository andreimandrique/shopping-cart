import { useOutletContext } from "react-router-dom";

export default function Checkout() {
  const { setProduct, product } = useOutletContext();

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
    <div key={self.crypto.randomUUID()} className="card">
      <img
        src={product.image}
        alt={product.description}
        width={180}
        height={200}
      />
      <h3>{product.title}</h3>
      <p>{product.price}</p>
      <p>{product.quantity}</p>
      <button
        onClick={() => {
          cancelProduct(product.id);
        }}
      >
        Cancel
      </button>
      <button
        onClick={() => {
          addQuantity(product.id);
        }}
      >
        Add
      </button>
      <button
        onClick={() => {
          minusQuantity(product.id);
        }}
      >
        Minus
      </button>
    </div>
  ));

  if (product.length == 0)
    return (
      <>
        <h3>Checkout Page</h3>
        <div>Empty Cart</div>
      </>
    );

  return (
    <>
      <h3>Checkout Page</h3>
      <div>{productList}</div>
    </>
  );
}
