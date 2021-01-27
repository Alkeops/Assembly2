import { useContext, useEffect, useState } from "react";
import CartForm from "./CartForm";
import CartItem from "./CartItem";
import CartPayment from "./CartPayment";
import { cart } from "./CartProvider";

const Cart = () => {
  const { dispatch } = useContext(cart);
  const { productosEnCart, cantidadArticulos } = useContext(cart).stateCart;
  const [totales, setTotales] = useState(0);
  const [carrito, setCarrito] = useState([]);
  const [open, setOpen] = useState(false);
  const finalizar = () => {
    dispatch({
      type: "CLEAN_CART",
    });
    setTotales(0);
  };
  useEffect(() => {
    if (productosEnCart.length) {
      let totalPrecio = productosEnCart.reduce(
        (sum, value) => sum + value.precio * value.quantity,
        0
      );
      setTotales(totalPrecio);
    }
    setCarrito(productosEnCart.sort((a, b) => a.nombre > b.nombre));
  }, [productosEnCart]);

  return (
    <div className="cart">
      {cantidadArticulos !== 0 ? (
        <CartPayment
          cantidadArticulos={cantidadArticulos}
          totales={totales}
          setOpen={setOpen}
        />
      ) : (
        <h1 className="cart__vacio">Tu carrito esta vacio</h1>
      )}
      <div className="cart__productos">
        {carrito.map(({ nombre, id, precio, quantity }) => (
          <CartItem
            dispatch={dispatch}
            key={id}
            nombre={nombre}
            id={id}
            precio={precio}
            cantidad={quantity}
            setTotales={setTotales}
          />
        ))}
        {cantidadArticulos !== 0 && (
          <h1 className="cart__vaciar" onClick={finalizar}>
            VACIAR EL CARRITO
          </h1>
        )}
      </div>
      {open && (
        <CartForm
          finalizar={finalizar}
          open={open}
          setOpen={setOpen}
          dataFromCart={{
            items: [...carrito],
            total: totales,
            date: new Date(),
          }}
        />
      )}
    </div>
  );
};

export default Cart;
