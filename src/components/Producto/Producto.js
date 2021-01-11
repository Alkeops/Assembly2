import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Boton from "../common/Boton";
import Counter from "../common/Counter";
import { useContext } from "react";
import { cart } from "../Cart/CartProvider";
import productos from "../../productos";
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
    productos.then((res) => {
      const producto = res.find((prod) => prod.id === id);
      setProduct(producto);
    });
  }, [id]);

  const finalizar = () => {
    dispatch({
      type: "ADD_PRODUCT",
      payload: {
        id: product.id,
        nombre: product.nombre,
        quantity: counter,
        precio: product.precio,
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
