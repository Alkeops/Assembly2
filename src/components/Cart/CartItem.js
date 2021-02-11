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
    <div className="card-item">
      <div className="card-item__foto"></div>
      <div className="card-item__info">
        <span className="card-item__nombre">{nombre}</span>

        <div className="card-item__cantidad">
          <span>Cantidad: </span>
          <button
            className="btn-cantidad menos"
            onClick={() => modificarCarrito(false)}
          >
            -
          </button>
          <p>{cantidad}</p>
          <button
            className="btn-cantidad"
            onClick={() => modificarCarrito(true)}
          >
            +
          </button>
        </div>
      </div>
      <div className="card-item__subtotal">
        <div className="precio">
          <p>Precio Unitario: </p>
          <span className="card-item__precio">{precio}</span>
        </div>
        <div className="precio">
          <p>Subtotal: </p>
          <span className="card-item__precio">{precio}</span>
        </div>
      </div>
      <span className="card-item__eliminar" onClick={eliminarCarrito}>
        X Eliminar
      </span>
    </div>
  );
};

export default CartItem;
