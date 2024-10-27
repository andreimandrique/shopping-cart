export default function Card(props) {
  return (
    <>
      <img src={props.imgURL} alt={props.desc} width={200} />
      <p>{props.title}</p>
      <p>{props.price}</p>
    </>
  );
}
