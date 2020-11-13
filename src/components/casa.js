function Casa(props) {
  return (
    <button className="casa" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

export default Casa;