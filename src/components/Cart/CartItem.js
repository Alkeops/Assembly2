const CartItem = ({ precio, cantidad, nombre, id, dispatch, setTotales }) => {
  const eliminarCarrito = () => {
    dispatch({
      type: "DELETE_PRODUCT",
      payload: { id },
    });
  };
  const modificarCarrito = (suma) => {
    dispatch({
      type: "MODIFY_PRODUCT",
      payload: { id, suma: suma },
    });
  };
  return (
    <>
      <h3>{nombre}</h3>
      <h3>{id}</h3>
      <h3>{precio}</h3>
      <h3>{cantidad}</h3>
      <button className="btn btn-black" onClick={() => modificarCarrito()}>
        Menos 1
      </button>
      <button className="btn btn-black" onClick={() => modificarCarrito(true)}>
        Mas 1
      </button>
      <button className="btn btn-black" onClick={eliminarCarrito}>
        Eliminar
      </button>
    </>
  );
};

export default CartItem;
