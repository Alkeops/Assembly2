import { useState } from "react";
import { useHistory } from "react-router-dom";
import Boton from "../common/Boton";
import Counter from "../common/Counter";

const Producto = () => {
  const history = useHistory();
  const [terminar, setTerminar] = useState(false);
  const finalizar = () => {
    setTerminar(true);
  };
  const finalizarCompra = () => {
    history.push("/cart");
  };
  return (
    <div className="producto">
      <div className="producto__imagenes"></div>
      <div className="wrapper">
        <h4 className="producto__compania">Intel</h4>
        <h3 className="producto__nombre">Procesador i9</h3>
        <span className="producto__precio">$20,000.00</span>
        {terminar ? (
          <Boton
            content="Terminar Compra"
            className="btn btn-black"
            onClick={finalizarCompra}
          />
        ) : (
          <Counter stock={10} initial={1} onAdd={finalizar} />
        )}
      </div>
    </div>
  );
};

export default Producto;
