import Boton from "components/common/Boton";
import React from "react";

const CartPayment = ({ cantidadArticulos, totales, setOpen }) => {
  return (
    <div className={`cart__pago cart-payment`}>
      <h1 className="cart-payment__articulos">
        Tu carrito ({cantidadArticulos})
      </h1>
      <div className="cart-payment__totales">
        <h3>TOTAL A PAGAR:</h3>
        <span>{totales}</span>
      </div>
      <div className="cart-payment__boton">
        <Boton
          className="btn btn-black"
          content="Comprar"
          onClick={() => setOpen(true)}
        />
      </div>
    </div>
  );
};

export default CartPayment;
