import { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import Boton from "../common/Boton";
import Counter from "../common/Counter";
import { cart } from "../Cart/CartProvider";

import { productoUnico } from "config/firebase/firestoreService";
const Producto = ({
  match: {
    params: { id, categoria },
  },
}) => {
  const [product, setProduct] = useState([]);
  const { dispatch } = useContext(cart);
  const history = useHistory();
  const [terminar, setTerminar] = useState(false);
  const [counter, setCounter] = useState(1);
  useEffect(() => {
    cargaProducto(id);
  }, [id]);

  const cargaProducto = async (id) => {
    const data = await productoUnico(id);
    setProduct(data);
  };
  const finalizar = () => {
    dispatch({
      type: "ADD_PRODUCT",
      payload: {
        ...product,
        id: id,
        quantity: counter,
      },
    });
    setCounter(1);
    setTerminar(true);
  };
  const finalizarCompra = () => {
    history.push("/cart");
  };
  return (
    <div className="producto">
      <div className="producto__imagenes"></div>
      <div className="wrapper">
        <h4 className="producto__compania">{product.compania}</h4>
        <h3 className="producto__nombre">{product.nombre}</h3>
        <span className="producto__precio">{product.precio}</span>
        {terminar ? (
          <Boton
            content="Terminar Compra"
            className="btn btn-black"
            onClick={finalizarCompra}
          />
        ) : (
          <Counter
            stock={10}
            initial={1}
            onAdd={finalizar}
            counter={counter}
            setCounter={setCounter}
          />
        )}
      </div>
    </div>
  );
};

export default Producto;
