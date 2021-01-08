import { useContext } from "react";
import { cart } from "./CartProvider";

const Cart = () => {
  const { dispatch } = useContext(cart);
  const { cantidadArticulos, productosEnCart } = useContext(cart).stateCart;
  console.log(productosEnCart);
  const finalizar = () => {
    dispatch({
      type: "CLEAN_CART",
    });
  };
  return (
    <div className="cart">
      <h1>{cantidadArticulos}</h1> <h1 onClick={finalizar}>Limpiar Carrito</h1>
    </div>
  );
};

export default Cart;
