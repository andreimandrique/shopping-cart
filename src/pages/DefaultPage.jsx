import { Link } from "react-router-dom";

export default function DefaultPage() {
  return (
    <>
      <div className="center">
        <h1>Andrei Shop</h1>
      </div>
      <div className="center">
        <div className="front-img"></div>
      </div>
      <div className="center">
        <Link to="/product" className="front-link">
          Shop Now
        </Link>
      </div>
    </>
  );
}