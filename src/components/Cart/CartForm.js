import React, { useEffect, useState } from "react";
import Boton from "components/common/Boton";
import { nuevaCompra } from "config/firebase/firestoreService";
import { useHistory } from "react-router-dom";

const CartForm = ({ setOpen, dataFromCart, finalizar }) => {
  const history = useHistory();
  const [user, setUser] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [id, setId] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setError("");
    }, 2500);
  }, [error]);
  const handleChange = ({ target: { name, value } }) => {
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    if (!user.name || !user.phone || !user.email) {
      setError("No completaste el formulario correctamente");
      return false;
    }
    const submitForm = { buyer: user, items: dataFromCart };
    const idCompra = await nuevaCompra(submitForm);
    setId(idCompra);
  };

  const finish = () => {
    finalizar();
    setOpen(false);
    setId("");
    history.push("/");
  };
  return (
    <>
      <div
        className="cart-form"
        onClick={(e) => {
          e.stopPropagation();
          setOpen(false);
        }}
      ></div>
      <div className="card-wrapper">
        <div className="card-container">
          {id ? (
            <>
              <h3>{`El id de tu compra es ${id}. Gracias!`}</h3>
              <Boton
                content="Cerrar"
                className="btn btn-black"
                onClick={finish}
              />
            </>
          ) : (
            <>
              <h3>Ingresa tus datos</h3>
              <form onSubmit={(e) => e.preventDefault()}>
                <input
                  placeholder="Name"
                  name="name"
                  type="text"
                  required
                  autoComplete="off"
                  onChange={handleChange}
                />
                <input
                  placeholder="Phone"
                  name="phone"
                  type="tel"
                  required
                  autoComplete="off"
                  onChange={handleChange}
                />
                <input
                  placeholder="Email"
                  type="email"
                  name="email"
                  required
                  autoComplete="off"
                  onChange={handleChange}
                />
                {error && <h4 className="error">{error}</h4>}
                <Boton
                  className="btn btn-black"
                  content="Finalizar compra"
                  type="submit"
                  onClick={handleSubmit}
                />
              </form>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default CartForm;
