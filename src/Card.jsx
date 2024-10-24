function Card(props) {
  return (
    <>
      <img className="card-image" src={props.image} alt="pic" />
      <h3>{props.title}</h3>
      <p>{props.price}</p>
      <button onClick={props.onClickBtn}>Add to Cart</button>
    </>
  );
}

export default Card;
