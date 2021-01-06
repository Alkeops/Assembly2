import { useState, useEffect } from "react";
import Boton from "./Boton";

const Counter = ({ stock = 5, initial = 1, onAdd }) => {
  const [counter, setCounter] = useState(initial);
  const [error, setError] = useState("");
  const suma = () => {
    if (counter === stock) {
      setError("Lo sentimos no tenemos más stock disponible");
      return false;
    }
    setError("");
    setCounter(counter + 1);
  };
  const resta = () => {
    if (counter === initial) {
      setError("Cantidad minima posible");
      return false;
    }
    setError("");
    setCounter(counter - 1);
  };
  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError("");
      }, 1500);
    }
  }, [error, setError]);
  return (
    <>
      <div className="counter">
        <div className="sum">
          <span onClick={resta}>-</span>
          <span className="sum__cantidad">{counter}</span>
          <span onClick={suma}>+</span>
        </div>
        <Boton content="Agregar" className="btn btn-black" onClick={onAdd} />
      </div>
      {error && <span className="error">{error}</span>}
    </>
  );
};

export default Counter;
