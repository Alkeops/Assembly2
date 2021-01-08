import { createContext, useReducer } from "react";

const initialState = {
  productosEnCart: [],
  cantidadTotal: 0,
  cantidadArticulos: 0,
};
const cart = createContext(initialState);
const { Provider } = cart;

const CartProvider = ({ children }) => {
  const idExists = (state, id) =>
    state.findIndex((elemento) => elemento.id === id);

  const [stateCart, dispatch] = useReducer((state, { type, payload }) => {
    switch (type) {
      case "ADD_PRODUCT":
        const posicion = idExists(state.productosEnCart, payload.id);
        if (posicion < 0)
          return {
            cantidadTotal: state.cantidadTotal + 1,
            cantidadArticulos: state.cantidadArticulos + payload.quantity,
            productosEnCart: [...state.productosEnCart, payload],
          };
        else {
          let modificado = state.productosEnCart[posicion];
          modificado = {
            ...modificado,
            quantity: modificado.quantity + payload.quantity,
          };
          return {
            ...state,
            cantidadArticulos: state.cantidadArticulos + payload.quantity,
            productosEnCart: [
              ...state.productosEnCart.filter((prod) => prod.id !== payload.id),
              modificado,
            ],
          };
        }
      case "DELETE_PRODUCT":
        return {
          ...state,
          cantidadTotal: state.cantidadTotal - 1,
          cantidadArticulos: state.cantidadArticulos - payload.quantity,
          productosEnCart: [
            ...state.productosEnCart.filter((prod) => prod.id !== payload.id),
          ],
        };
      case "CLEAN_CART":
        return { ...initialState };
      default:
        throw new Error("Imposible");
    }
  }, initialState);
  return <Provider value={{ stateCart, dispatch }}>{children}</Provider>;
};

export { cart, CartProvider };
