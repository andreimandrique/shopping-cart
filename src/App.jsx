import { useState, useEffect } from "react";

function useProduct() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=5", { mode: "cors" })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then((response) => setData(response))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return { data, error, loading };
}

function App() {
  const { data, error, loading } = useProduct();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>A network error was encountered</p>;

  const productList = data.map((product) => (
    <div key={product.id}>
      <h3>{product.title}</h3>
      <button>Add to Cart</button>
    </div>
  ));

  return <div>{productList}</div>;
}

export default App;
