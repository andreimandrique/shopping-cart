import { Link } from "react-router-dom";

export default function Header(props) {
  return (
    <div>
      <h1>HomePage</h1>
      <h3>Product: {props.productCount}</h3>
      <li>
        <Link to="/">Go to Home</Link>
      </li>
      <li>
        <Link to="/product">Go to Product </Link>
      </li>
      <li>
        <Link to="/checkout">Go to Checkout</Link>
      </li>
    </div>
  );
}
